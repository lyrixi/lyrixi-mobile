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
const APILoader = forwardRef(
  (
    {
      // Value & Display Value(key: '地图的key', type: 'bmap' | 'amap' | 'google')
      config,

      // Element
      loading,
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
      // 保持单例
      if (config?.key && config?.type) {
        window.APILoaderConfig = {
          ...window.APILoaderConfig,
          ...config
        }
      }
      // 没有设置config，则读取默认配置
      else if (window.APILoaderConfig) {
        // eslint-disable-next-line
        config = window.APILoaderConfig
      }

      if (!window.APILoaderConfig?.key || !window.APILoaderConfig?.type) {
        setResult({
          status: 'error',
          message: LocaleUtil.locale('没有key和地图类型, 无法使用地图', 'lyrixi.no.key.type')
        })
        return
      }

      // Load map resource
      result = await loadSource(window.APILoaderConfig)
      if (result?.status === 'error') {
        // 自定义处理错误
        if (onError) {
          let newResult = await onError({ ...{}, ...result, ...APIRef.current })
          if (newResult !== undefined) {
            result = newResult
          }
        }
      } else {
        onSuccess && onSuccess(APIRef.current)
      }
      setResult(result)
    }

    // 未加载完成显示空
    if (result === null) {
      if (React.isValidElement(loading)) {
        return loading
      }
      if (typeof loading === 'function') {
        return loading()
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
            {LocaleUtil.locale('重试', 'lyrixi.retry')}
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

export default APILoader
