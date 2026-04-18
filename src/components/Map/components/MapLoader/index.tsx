import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react'
import loadSource from './../../utils/loadSource'
import canvasMarkers from './leaflet.canvas-markers'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Result from './../../../Result'
import Button from './../../../Button'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Result, Button } from 'lyrixi-mobile'
测试使用-end */

// Load map js and css source
const MapLoader = forwardRef(
  (
    {
      // Value & Display Value
      /*
      {
        key: '地图的key',
        type: 'bmap' | 'amap' | 'google',
        markerIcons: {
          centerMarkerIcon: {
            iconUrl: `中心点图标`,
            iconRetinaUrl: `中心点图标2x`,
            shadowUrl: `阴影图标`,
            shadowRetinaUrl: `阴影图标2x`,
            shadowSize: [39, 39],
            iconSize: [30, 49],
            iconAnchor: [15, 25]
          },
          markerIcon: {
            iconUrl: `点位图标`,
            iconRetinaUrl: `点位图标2x`,
            shadowUrl: `阴影图标`,
            shadowRetinaUrl: `阴影图标2x`,
            shadowSize: [33, 33],
            iconSize: [20, 33],
            iconAnchor: [10, 16]
          }
        },
        leaflet: {
          css: `leaflet.css网络地址`,
          js: `leaflet.js网络地址`
        }
      }
      */
      config,

      // Utils
      getAddress,
      getLocation,
      openLocation,
      queryNearby,

      // Element
      loadingRender,
      loadingNode,
      children,

      // Events
      onError,
      onSuccess
    },
    ref
  ) => {
    // result: {status: 'success'|'error', data: any, message: string}
    let [result, setResult] = useState(null)

    const APIRef = useRef({
      reload: loadData
    })

    // 节点
    useImperativeHandle(ref, () => {
      return APIRef.current
    })

    useEffect(() => {
      loadData()
      // eslint-disable-next-line
    }, [])

    // 加载
    async function loadData() {
      // Utils
      if (typeof getAddress === 'function') window.defaultGetAddress = getAddress
      if (typeof getLocation === 'function') window.defaultGetLocation = getLocation
      if (typeof openLocation === 'function') window.defaultOpenLocation = openLocation
      if (typeof queryNearby === 'function') window.defaultQueryNearby = queryNearby

      // 地图Key/Type/MarkerIcons/Leaflet配置
      if (config?.key && config?.type) {
        window.MapLoaderConfig = {
          ...window.MapLoaderConfig,
          ...config
        }
      }
      // 没有设置config，则读取默认配置
      else if (window.MapLoaderConfig) {
        // eslint-disable-next-line
        config = window.MapLoaderConfig
      }

      if (!window.MapLoaderConfig?.key || !window.MapLoaderConfig?.type) {
        setResult({
          status: 'error',
          message: LocaleUtil.locale(
            '没有key和地图类型, 无法使用地图',
            'lyrixi_b7129383ac7096e597c7f06db53ac352'
          )
        })
        return
      }

      // Load map resource
      result = await loadSource(window.MapLoaderConfig)
      if (result?.status === 'error') {
        // 自定义处理错误
        if (onError) {
          let newResult = await onError({ ...result, ...APIRef.current })
          if (newResult !== undefined) {
            result = newResult
          }
        }
      } else {
        onSuccess && onSuccess({ status: 'success', map: APIRef.current })
      }
      setResult(result)
    }

    // 未加载完成显示空
    if (result === null) {
      if (loadingNode) {
        return loadingNode
      }
      if (loadingRender) {
        return loadingRender()
      }
      return null
    }

    // 加载失败
    if (result.status === 'error' && typeof result.message === 'string') {
      return (
        <Result title={result.message} className="lyrixi-map-container-result" status={'500'}>
          <Button
            className="lyrixi-result-button"
            color="primary"
            onClick={() => {
              loadData()
            }}
          >
            {LocaleUtil.locale('重试', 'lyrixi_132c5cdcceb0f1f17c8c088a42959aa4')}
          </Button>
        </Result>
      )
    }

    // onError可自定义渲染自定义DOM
    if (result.message && React.isValidElement(result.message)) {
      return result.message
    }

    // Add leaflet plugin: canvas markers(window.L.canvasIconLayer)
    if (window.L) {
      canvasMarkers(window.L)
    }
    // require('leaflet-canvas-marker')

    // 加载成功
    return children
  }
)

export default MapLoader
