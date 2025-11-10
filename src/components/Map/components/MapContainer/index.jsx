import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react'

import getMapType from './../../utils/getMapType'
import createMap from './createMap'
import createCurrentMap from './createCurrentMap'
import injectChildrenProps from './injectChildrenProps'
import coordsToFit from './../../utils/coordsToFit'
import defaultGetAddress from './../../utils/getAddress'
import defaultGetLocation from './../../utils/getLocation'
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
      center,
      zoom,
      minZoom,
      maxZoom,
      // 自定义获取地址和定位

      getAddress,
      getLocation,
      openLocation,
      queryNearby,
      // events
      onLoad,
      onZoomStart,
      onZoom,
      onZoomEnd,
      onMoveStart,
      onMove,
      onMoveEnd,
      onDragStart,
      onDrag,
      onDragEnd,

      children,

      // 其它属性
      className,
      style
    },
    ref
  ) => {
    // 指定获取定位和地址的方法
    // eslint-disable-next-line
    if (typeof getAddress !== 'function') getAddress = defaultGetAddress
    // eslint-disable-next-line
    if (typeof getLocation !== 'function') getLocation = defaultGetLocation
    if (typeof openLocation !== 'function') {
      // eslint-disable-next-line
      openLocation = window?.openLocationDefault || window?.APILoaderConfig?.openLocation
    }
    // eslint-disable-next-line
    if (typeof queryNearby !== 'function') queryNearby = defaultQueryNearby

    if (typeof center !== 'object' || !center?.longitude || !center?.latitude || !center?.type) {
      // eslint-disable-next-line
      center = coordsToFit(
        window?.APILoaderConfig?.center || {
          latitude: 39.909187,
          longitude: 116.397451,
          type: 'gcj02'
          // address: '北京天安门'
        }
      )
    }

    const rootRef = useRef(null)
    let [leafletMap, setLeafletMap] = useState(null)

    // Define export Api
    const APIRef = useRef({
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      type: getMapType(),
      // Dynamic props
      currentMap: null,
      leafletMap: null,
      // 打开位置地图
      openLocation: openLocation,
      // 指定获取定位和地址的方法
      getAddress: async (coord) => {
        if (typeof coord !== 'object' || !coord?.longitude || !coord?.latitude || !coord?.type) {
          return 'getAddress must pass longitude, latitude and type'
        }

        let result = await getAddress(coord)

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
        let result = await getLocation(params)
        if (result && typeof result === 'object' && !result.type && params.type) {
          result.type = params.type
        }
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
      APIRef.current.rootDOM = rootRef.current
      loadData()
      // eslint-disable-next-line
    }, [])

    // Load data
    async function loadData() {
      if (!rootRef.current?.querySelector) {
        setLeafletMap(LocaleUtil.locale('No Container', 'lyrixi_map_no_container'))
        return
      }

      // Create leaflet leafletMap
      leafletMap = await createMap(rootRef.current?.querySelector?.('.lyrixi-map-container'), {
        center,
        zoom,
        minZoom,
        maxZoom
      })
      APIRef.current.leafletMap = leafletMap

      let currentMapContainer = rootRef?.current?.querySelector?.('.lyrixi-map-api-container')
      if (!currentMapContainer) {
        setLeafletMap(LocaleUtil.locale('No Container', 'lyrixi_map_no_container'))
        return
      }

      // Create bmap,amap,etc current map to use invoke api
      const currentMap = await createCurrentMap(currentMapContainer, {
        center
      })
      APIRef.current.currentMap = currentMap

      // Load leafletMap failed
      if (typeof leafletMap === 'string') {
        setLeafletMap(leafletMap)
        onLoad && onLoad(leafletMap)
        return
      }

      // Init leafletMap events
      events()

      // Render children
      setLeafletMap(leafletMap)

      // onLoad success panTo center
      // if (center) {
      //   APIRef?.current?.panTo?.(center)
      // }

      // onLoad event
      onLoad && onLoad(APIRef.current)
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
      <div style={style} className={DOMUtil.classNames('map', className)} ref={rootRef}>
        {/* leaflet地图容器 */}
        <div className="lyrixi-map-container"></div>
        {/* 百度、高德地图容器用于调用api使用，并不展现 */}
        <div className="lyrixi-map-api-container"></div>
        {/* 其它控件 */}
        {leafletMap ? newChildren : null}
      </div>
    )
  }
)

export default MapContainer
