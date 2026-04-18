import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react'

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

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import DOMUtil from './../../../../utils/DOMUtil'
import GeoUtil from './../../../../utils/GeoUtil'
import Result from './../../../Result'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, GeoUtil, Result } from 'lyrixi-mobile'
测试使用-end */

const MapContainer = forwardRef(
  (
    {
      // Value & Display Value
      center,
      zoom,
      minZoom,
      maxZoom,
      // 定位与获取位置缓存时长: 秒
      cacheExpires,

      // Utils
      getAddress,
      getLocation,
      openLocation,
      queryNearby,

      // Style
      style,
      className,

      // Element
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
    // 指定获取定位和地址的方法
    // eslint-disable-next-line
    if (typeof getAddress !== 'function') getAddress = cacheExpires ? defaultGetSuperAddress : defaultGetAddress
    // eslint-disable-next-line
    if (typeof getLocation !== 'function') getLocation = cacheExpires ? defaultGetSuperLocation : defaultGetLocation
    if (typeof openLocation !== 'function') {
      // eslint-disable-next-line
      openLocation = window?.defaultOpenLocation
    }
    // eslint-disable-next-line
    if (typeof queryNearby !== 'function') queryNearby = defaultQueryNearby

    if (typeof center !== 'object' || !center?.longitude || !center?.latitude || !center?.type) {
      // eslint-disable-next-line
      center = coordsToFit(
        window?.MapLoaderConfig?.center || {
          latitude: 39.909187,
          longitude: 116.397451,
          type: 'gcj02'
          // address: '北京天安门'
        }
      )
    }

    const rootRef = useRef(null)
    // null: 加载中; string: 加载失败; object: 加载成功
    let [leafletMap, setLeafletMap] = useState(null)

    // Define export Api
    const APIRef = useRef({
      element: rootRef.current,
      getElement: () => rootRef.current,
      type: getMapType(),
      // Dynamic props
      currentMap: null,
      leafletMap: null,
      // 打开位置地图
      openLocation: openLocation,
      // 指定获取定位和地址的方法
      getAddress: async (coord) => {
        if (typeof coord !== 'object' || !coord?.longitude || !coord?.latitude || !coord?.type) {
          return {
            status: 'error',
            message: 'getAddress must pass longitude, latitude and type'
          }
        }

        let result = await getAddress({ ...coord, cacheExpires })

        // Get address success
        if (result?.address) {
          result = {
            ...coord,
            ...result
          }
        }

        return result
      },
      // Get location
      getLocation: async (params) => {
        let result = await getLocation({ ...params, cacheExpires })
        return result
      },
      // 搜索附近与搜索
      /*
      入参:
      {
        map: APIRef.current, // 内部使用map.currentMap
        keyword: '',
        longitude: '',
        latitude: '',
        radius: 1000 // 不传半径则为模糊搜索
      }
      出参:
      {
        address: '上海市南京东路830号',
        latitude: 31.237415229632834,
        longitude: 121.47015544295395,
        name: 'eve lom市百一店'
      }
      */
      queryNearby: queryNearby,
      center: center,
      // Functions
      setView: (...params) => {
        leafletMap?.setView(...params)
      },
      panTo: (coords) => {
        if (!leafletMap) return
        if (Array.isArray(coords)) {
          let points = coords.map((coord) => {
            if (!coord?.latitude || !coord?.longitude || !coord?.type) {
              console.error('MapContainer panTo invalid parameter:', coord)
              return null
            }
            let newCoord = coordsToFit(coord)
            return newCoord?.latitude && newCoord?.longitude
              ? [newCoord.latitude, newCoord.longitude]
              : null
          })
          points = points.filter((point) => point)

          if (Array.isArray(points) && points.length) {
            leafletMap.fitBounds(points, { padding: [1, 1] })
          }
        } else if (typeof coords === 'object') {
          if (!coords?.latitude || !coords?.longitude || !coords?.type) {
            console.error('MapContainer panTo invalid parameter:', coords)
            return
          }
          let newCoord = coordsToFit(coords)

          if (newCoord?.latitude && newCoord?.longitude) {
            leafletMap.panTo([newCoord.latitude, newCoord.longitude])
          }
        }
      },
      getCenter: () => {
        let latlng = leafletMap?.getCenter()
        let center = {
          latitude: latlng.lat,
          longitude: latlng.lng
        }

        // 百度国内坐标为gcj02和bd09
        let isInChina = GeoUtil.isInChina([center.longitude, center.latitude])
        if (isInChina) {
          if (window.google || window.AMap) {
            center.type = 'gcj02'
          } else if (window.BMap) {
            center.type = 'bd09'
          }
        } else {
          center.type = 'wgs84'
        }

        return center
      },
      zoomIn: () => {
        leafletMap?.zoomIn()
      },
      zoomOut: () => {
        leafletMap?.zoomOut()
      },
      getZoom: () => {
        return leafletMap?.getZoom?.() || null
      },
      setZoom: (zoom) => {
        if (!leafletMap?.setZoom) return
        return leafletMap.setZoom(zoom)
      }
    })

    // Export API
    useImperativeHandle(ref, () => {
      return APIRef.current
    })

    // Init leafletMap and currentMap
    useEffect(() => {
      APIRef.current.element = rootRef.current
      loadData()
      // eslint-disable-next-line
    }, [])

    // Load data
    async function loadData() {
      if (!rootRef.current?.querySelector) {
        setLeafletMap(LocaleUtil.locale('No Container', 'lyrixi_6a9144880f91a917d142206c4ecf2103'))
        return
      }

      // Create leaflet leafletMap
      leafletMap = await createLeafletMap(
        rootRef.current?.querySelector?.('.lyrixi-map-container'),
        {
          center,
          zoom,
          minZoom,
          maxZoom
        }
      )
      APIRef.current.leafletMap = leafletMap

      let currentMapContainer = rootRef?.current?.querySelector?.('.lyrixi-map-api-container')
      if (!currentMapContainer) {
        setLeafletMap(LocaleUtil.locale('No Container', 'lyrixi_6a9144880f91a917d142206c4ecf2103'))
        return
      }

      // Create bmap,amap,etc current map to use invoke api
      const currentMap = await createCurrentMap(currentMapContainer, {
        center
      })
      APIRef.current.currentMap = currentMap

      // Load leafletMap failed
      if (!window.L || !window.L?.tileLayer?.currentTileLayer) {
        let errorMessage = !window.L
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
          message: errorMessage
        })
        return
      }

      // Init leafletMap events
      events()

      // Render children
      setLeafletMap(leafletMap)

      // onLoad event
      onLoad?.({
        status: 'success',
        map: APIRef.current
      })
    }

    // Bind events
    function events() {
      // Listen zoom event
      leafletMap.on('zoomstart', function () {
        onZoomStart && onZoomStart(APIRef.current)
        APIRef.current.onZoomStart && APIRef.current.onZoomStart(APIRef.current)
      })
      leafletMap.on('zoom', function () {
        onZoom && onZoom(APIRef.current)
        APIRef.current.onZoom && APIRef.current.onZoom(APIRef.current)
      })
      leafletMap.on('zoomend', function () {
        onZoomEnd && onZoomEnd(APIRef.current)
        APIRef.current.onZoomEnd && APIRef.current.onZoomEnd(APIRef.current)
      })

      // Listen move event
      leafletMap.on('movestart', function () {
        onMoveStart && onMoveStart(APIRef.current)
        APIRef.current.onMoveStart && APIRef.current.onMoveStart(APIRef.current)
      })
      leafletMap.on('move', function () {
        onMove && onMove(APIRef.current)
        APIRef.current.onMove && APIRef.current.onMove(APIRef.current)
      })
      leafletMap.on('moveend', function (e) {
        onMoveEnd && onMoveEnd(APIRef.current)
        APIRef.current.onMoveEnd && APIRef.current.onMoveEnd(APIRef.current)
      })

      // Listen drag event
      leafletMap.on('dragstart', function () {
        onDragStart && onDragStart(APIRef.current)
        APIRef.current.onDragStart && APIRef.current.onDragStart(APIRef.current)
      })
      leafletMap.on('drag', function () {
        onDrag && onDrag(APIRef.current)
        APIRef.current.onDrag && APIRef.current.onDrag(APIRef.current)
      })
      leafletMap.on('dragend', function (e) {
        onDragEnd && onDragEnd(APIRef.current)
        APIRef.current.onDragEnd && APIRef.current.onDragEnd(APIRef.current)
      })
    }

    // Render
    let newChildren = null
    // 未加载完成显示空
    if (!leafletMap) {
      newChildren = null
    }
    // 加载失败
    else if (typeof leafletMap === 'string') {
      newChildren = (
        <Result className="lyrixi-map-container-result" status="500" title={leafletMap} />
      )
    }
    // 加载成功
    else {
      newChildren = injectChildrenProps(children, {
        map: APIRef.current
      })
    }

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-map', className)}
      >
        {/* Element: Leaflet Map Container */}
        <div className="lyrixi-map-container"></div>

        {/* Element: API Map Container */}
        <div className="lyrixi-map-api-container"></div>

        {/* Element: Children */}
        {leafletMap ? newChildren : null}
      </div>
    )
  }
)

export default MapContainer
