import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react'
import type { L } from '../../types'

import getMapType from './../../utils/getMapType'
import createLeafletMap from './createLeafletMap'
import createCurrentMap from './createCurrentMap'
import injectChildrenProps from './injectChildrenProps'
import coordsToFit from './../../utils/coordsToFit'
import defaultGetAddress from './../../utils/getAddress'
import defaultGetSuperAddress from './../../utils/getSuperAddress'
import defaultGetLocation from './../../utils/getLocation'
import defaultGetSuperLocation from './../../utils/getSuperLocation'
import defaultQueryNearby from './../../utils/queryNearby'

import type { MapPoint, GetAddressFn, GetLocationFn, QueryNearbyFn, MapContainerAPI, MapContainerProps } from '../../types'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import DOMUtil from './../../../../utils/DOMUtil'
import GeoUtil from './../../../../utils/GeoUtil'
import Result from './../../../Result'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, GeoUtil, Result } from 'lyrixi-mobile'
测试使用-end */

const MapContainer = forwardRef<MapContainerAPI | null, MapContainerProps>(
  (
    {
      // Value & Display Value
      center: centerProp,
      zoom,
      minZoom,
      maxZoom,
      cacheExpires,
      getAddress: getAddressProp,
      getLocation: getLocationProp,
      openLocation: openLocationProp,
      queryNearby: queryNearbyProp,
      // Style
      style,
      className,
      // Elements
      children,
      // Events
      onLoad,
      onZoomStart,
      onZoom,
      onZoomEnd,
      onMoveStart,
      onMove,
      onMoveEnd,
      onDragStart,
      onDrag,
      onDragEnd
    },
    ref
  ) => {
    let getAddress: GetAddressFn =
      typeof getAddressProp === 'function'
        ? getAddressProp
        : cacheExpires
          ? (defaultGetSuperAddress as GetAddressFn)
          : (defaultGetAddress as GetAddressFn)

    let getLocation: GetLocationFn =
      typeof getLocationProp === 'function'
        ? getLocationProp
        : cacheExpires
          ? (defaultGetSuperLocation as GetLocationFn)
          : (defaultGetLocation as GetLocationFn)

    const openLocation: ((...args: unknown[]) => unknown) | undefined =
      typeof openLocationProp === 'function' ? openLocationProp : window?.defaultOpenLocation

    let queryNearby: QueryNearbyFn =
      typeof queryNearbyProp === 'function' ? queryNearbyProp : (defaultQueryNearby as QueryNearbyFn)

    let center: MapPoint

    const centerObj = Array.isArray(centerProp) ? null : centerProp

    if (
      typeof centerObj !== 'object' ||
      !centerObj?.longitude ||
      !centerObj?.latitude ||
      !centerObj?.type
    ) {
      center = coordsToFit(
        window?.MapLoaderConfig?.center || {
          latitude: 39.909187,
          longitude: 116.397451,
          type: 'gcj02'
        }
      ) as MapPoint
    } else {
      center = centerObj
    }

    const rootRef = useRef<HTMLDivElement>(null)

    let [leafletMap, setLeafletMap] = useState<L.Map | string | null>(null)

    const APIRef = useRef<MapContainerAPI>({
      element: rootRef.current,
      getElement: () => rootRef.current,
      type: getMapType(),
      currentMap: null,
      leafletMap: null,
      openLocation: openLocation,
      getAddress: async (coord: MapPoint) => {
        if (!coord?.longitude || !coord?.latitude || !coord?.type) {
          return {
            status: 'error',
            message: 'getAddress must pass longitude, latitude and type'
          }
        }
        const result = await getAddress({ ...coord, cacheExpires })
        if (result?.address) {
          return { ...coord, ...result }
        }
        return result
      },
      getLocation: async (params: Record<string, unknown>) => {
        const result = await getLocation({ ...params, cacheExpires })
        return result
      },
      queryNearby: queryNearby,
      center: center,
      setView: (...params: unknown[]) => {
        ;(leafletMap as L.Map)?.setView(...(params as Parameters<L.Map['setView']>))
      },
      panTo: (coords: MapPoint | MapPoint[]) => {
        if (!leafletMap || typeof leafletMap === 'string') return
        const lmap = leafletMap as L.Map
        if (Array.isArray(coords)) {
          let points = coords.map((coord: MapPoint) => {
            if (!coord?.latitude || !coord?.longitude || !coord?.type) {
              console.error('MapContainer panTo invalid parameter:', coord)
              return null
            }
            const newCoord = coordsToFit(coord) as MapPoint
            return newCoord?.latitude && newCoord?.longitude
              ? ([newCoord.latitude, newCoord.longitude] as [number, number])
              : null
          })
          const validPoints = points.filter((point): point is [number, number] => point !== null)
          if (validPoints.length) {
            lmap.fitBounds(validPoints as L.LatLngBoundsExpression, { padding: [1, 1] })
          }
        } else if (typeof coords === 'object') {
          if (!coords?.latitude || !coords?.longitude || !coords?.type) {
            console.error('MapContainer panTo invalid parameter:', coords)
            return
          }
          const newCoord = coordsToFit(coords) as MapPoint
          if (newCoord?.latitude && newCoord?.longitude) {
            lmap.panTo([newCoord.latitude as number, newCoord.longitude as number])
          }
        }
      },
      getCenter: () => {
        const lmap = leafletMap as L.Map
        const latlng = lmap?.getCenter()
        const c: { latitude: number; longitude: number; type?: string } = {
          latitude: latlng.lat,
          longitude: latlng.lng
        }

        const isInChina = GeoUtil.isInChina([c.longitude, c.latitude])
        if (isInChina) {
          if (window.google || window.AMap) {
            c.type = 'gcj02'
          } else if (window.BMap) {
            c.type = 'bd09'
          }
        } else {
          c.type = 'wgs84'
        }

        return c
      },
      zoomIn: () => {
        ;(leafletMap as L.Map)?.zoomIn()
      },
      zoomOut: () => {
        ;(leafletMap as L.Map)?.zoomOut()
      },
      getZoom: () => {
        return (leafletMap as L.Map)?.getZoom?.() || null
      },
      setZoom: (zoom: number) => {
        const lmap = leafletMap as L.Map
        if (!lmap?.setZoom) return
        return lmap.setZoom(zoom)
      }
    })

    useEffect(() => {
      APIRef.current.element = rootRef.current
      // eslint-disable-next-line @typescript-eslint/no-use-before-define -- loadData 声明在组件后部，与既有结构一致
      loadData()
      // eslint-disable-next-line
    }, [])

    useImperativeHandle(ref, () => {
      return APIRef.current
    })

    function localeToErrorString(node: string | React.ReactNode): string {
      return typeof node === 'string' ? node : 'Error'
    }

    function events() {
      /* 短路与回调，与既有写法一致 */
      /* eslint-disable @typescript-eslint/no-unused-expressions */
      const lmap = leafletMap as L.Map
      lmap.on('zoomstart', function () {
        onZoomStart && onZoomStart(APIRef.current)
        APIRef.current.onZoomStart && APIRef.current.onZoomStart(APIRef.current)
      })
      lmap.on('zoom', function () {
        onZoom && onZoom(APIRef.current)
        APIRef.current.onZoom && APIRef.current.onZoom(APIRef.current)
      })
      lmap.on('zoomend', function () {
        onZoomEnd && onZoomEnd(APIRef.current)
        APIRef.current.onZoomEnd && APIRef.current.onZoomEnd(APIRef.current)
      })

      lmap.on('movestart', function () {
        onMoveStart && onMoveStart(APIRef.current)
        APIRef.current.onMoveStart && APIRef.current.onMoveStart(APIRef.current)
      })
      lmap.on('move', function () {
        onMove && onMove(APIRef.current)
        APIRef.current.onMove && APIRef.current.onMove(APIRef.current)
      })
      lmap.on('moveend', function () {
        onMoveEnd && onMoveEnd(APIRef.current)
        APIRef.current.onMoveEnd && APIRef.current.onMoveEnd(APIRef.current)
      })

      lmap.on('dragstart', function () {
        onDragStart && onDragStart(APIRef.current)
        APIRef.current.onDragStart && APIRef.current.onDragStart(APIRef.current)
      })
      lmap.on('drag', function () {
        onDrag && onDrag(APIRef.current)
        APIRef.current.onDrag && APIRef.current.onDrag(APIRef.current)
      })
      lmap.on('dragend', function () {
        onDragEnd && onDragEnd(APIRef.current)
        APIRef.current.onDragEnd && APIRef.current.onDragEnd(APIRef.current)
      })
      /* eslint-enable @typescript-eslint/no-unused-expressions */
    }

    async function loadData() {
      if (!rootRef.current?.querySelector) {
        setLeafletMap(
          localeToErrorString(
            LocaleUtil.locale('No Container', 'lyrixi_6a9144880f91a917d142206c4ecf2103')
          )
        )
        return
      }

      const tileLayerEx = window.L?.tileLayer as (typeof window.L.tileLayer & {
        currentTileLayer?: (() => L.TileLayer) & { config?: Record<string, unknown> }
      }) | undefined

      leafletMap = await createLeafletMap(
        rootRef.current?.querySelector?.('.lyrixi-map-container') as HTMLElement,
        {
          center,
          zoom,
          minZoom,
          maxZoom
        }
      ) as L.Map | null
      APIRef.current.leafletMap = leafletMap as L.Map | null

      const currentMapContainer = rootRef?.current?.querySelector?.('.lyrixi-map-api-container') as HTMLElement | null
      if (!currentMapContainer) {
        setLeafletMap(
          localeToErrorString(
            LocaleUtil.locale('No Container', 'lyrixi_6a9144880f91a917d142206c4ecf2103')
          )
        )
        return
      }

      const currentMap = await createCurrentMap(currentMapContainer, { center })
      APIRef.current.currentMap = currentMap

      if (!window.L || !tileLayerEx?.currentTileLayer) {
        const errorMessage = !window.L
          ? LocaleUtil.locale(
            '请在Map组件需要使用MapLoader包裹',
            'lyrixi_5075eec6f717dd4179774e90bedc721b'
          )
          : LocaleUtil.locale(
            '缺少必要地图资源, 请检查MapLoader参数是否正确, 或者key是否过期',
            'lyrixi_f7e421b903f7d2a65ded4b70e5927574'
          )
        setLeafletMap(leafletMap)
        onLoad?.({
          status: 'error',
          message: localeToErrorString(errorMessage)
        })
        return
      }

      events()

      setLeafletMap(leafletMap)

      onLoad?.({
        status: 'success',
        map: APIRef.current
      })
    }

    let newChildren = null

    if (!leafletMap) {
      newChildren = null
    } else if (typeof leafletMap === 'string') {
      newChildren = (
        <Result className="lyrixi-map-container-result" status="500" title={leafletMap} />
      )
    } else {
      newChildren = injectChildrenProps(children, {
        map: APIRef.current
      })
    }

    return (
      <div
        ref={rootRef}
        style={style}
        className={DOMUtil.classNames('lyrixi-map', className)}
      >
        <div className="lyrixi-map-container"></div>
        <div className="lyrixi-map-api-container"></div>
        {leafletMap ? newChildren : null}
      </div>
    )
  }
)

export default MapContainer
