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

interface LoadResult {
  status: 'success' | 'error'
  message?: string | React.ReactNode
  data?: unknown
  [key: string]: unknown
}

interface MapLoaderProps {
  config?: {
    key?: string
    type?: string
    leaflet?: { css?: string; js?: string }
    [key: string]: unknown
  }
  getAddress?: ((...args: unknown[]) => unknown) | null
  getLocation?: ((...args: unknown[]) => unknown) | null
  openLocation?: ((...args: unknown[]) => unknown) | null
  queryNearby?: ((...args: unknown[]) => unknown) | null
  loadingRender?: (() => React.ReactNode) | null
  loadingNode?: React.ReactNode
  children?: React.ReactNode
  onError?:
    | ((
        result: LoadResult & { reload?: () => void }
      ) => Promise<LoadResult | undefined> | LoadResult | undefined | void)
    | null
  onSuccess?: ((result: { status: string; map: { reload: () => void } }) => void) | null
}

interface MapLoaderRef {
  reload: () => void
}

const MapLoader = forwardRef<MapLoaderRef, MapLoaderProps>(
  (
    {
      config,
      getAddress,
      getLocation,
      openLocation,
      queryNearby,
      loadingRender,
      loadingNode,
      children,
      onError,
      onSuccess
    },
    ref
  ) => {
    let [result, setResult] = useState<LoadResult | null>(null)

    const APIRef = useRef<MapLoaderRef>({
      reload: loadData
    })

    useImperativeHandle(ref, () => {
      return APIRef.current
    })

    useEffect(() => {
      loadData()
      // eslint-disable-next-line
    }, [])

    async function loadData() {
      if (typeof getAddress === 'function') window.defaultGetAddress = getAddress
      if (typeof getLocation === 'function') window.defaultGetLocation = getLocation
      if (typeof openLocation === 'function') window.defaultOpenLocation = openLocation
      if (typeof queryNearby === 'function') window.defaultQueryNearby = queryNearby

      if (config?.key && config?.type) {
        window.MapLoaderConfig = {
          ...window.MapLoaderConfig,
          ...config
        }
      } else if (window.MapLoaderConfig) {
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

      let loadResult: LoadResult = (await loadSource(window.MapLoaderConfig)) as LoadResult
      if (loadResult?.status === 'error') {
        if (onError) {
          const newResult = await onError({ ...loadResult, ...APIRef.current })
          if (newResult !== undefined) {
            loadResult = newResult
          }
        }
      } else {
        onSuccess?.({ status: 'success', map: APIRef.current })
      }
      setResult(loadResult)
    }

    if (result === null) {
      if (loadingNode) {
        return <>{loadingNode}</>
      }
      if (loadingRender) {
        return <>{loadingRender()}</>
      }
      return null
    }

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

    if (result.message && React.isValidElement(result.message)) {
      return result.message as React.ReactElement
    }

    if (window.L) {
      canvasMarkers(window.L)
    }

    return <>{children}</>
  }
)

export default MapLoader
