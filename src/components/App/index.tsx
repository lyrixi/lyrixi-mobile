import React, { useEffect, useState } from 'react'
import initBridge from './initBridge'

import type { AppLoadResult, AppProps } from './types'

// 内库使用-start
import Theme from './../../utils/Theme'
import LocaleUtil from './../../utils/LocaleUtil'
import Debugger from './../../utils/Debugger'
import Result from './../Result'
import Button from './../Button'
import Map from './../Map'
import Message from './../Message'
// 内库使用-end

/* 测试使用-start
import { Theme, LocaleUtil, Logger, Debugger, Result, Button, Map, Message } from 'lyrixi-mobile'
测试使用-end */

// Route change to destroy Modal
window.addEventListener(
  'popstate',
  () => {
    Message.close()
  },
  false
)

// Cast Result to avoid missing required props errors from untyped component
const ResultComponent = Result as React.ComponentType<{
  status?: string
  title?: React.ReactNode
  children?: React.ReactNode
}>

// 顶层容器
function App({
  mapConfig = null, // 地图配置 {type: 'bmap' | 'amap' | 'google', key: 'xxx'}
  bridgeConfig = null, // { getScriptSrc, getConfigUrl, formatHeaders, formatPayload, formatResponse}
  language = null, // 语言配置 'zh_CN|en_US|ja_JP...'
  debugElement = null, // 传入debugger元素, 用于点击10次后门, 唤醒vconsole调试面板
  preload = null, // 预加载函数, 返回 {status: 'success'|'error', message: string}
  themeConfig = null, // 主题配置 {fontSize: 'm' | 'l' | 'xl'}
  children
}: AppProps) {
  // result: {status: 'empty'|'error'|'noMore'|'loading', message: string}
  const [result, setResult] = useState<AppLoadResult | null>(null)

  async function load() {
    // 加载语言文件
    if (language) {
      const langResult = await LocaleUtil.loadLocale(language)
      if (langResult.status === 'error') {
        setResult({ status: 'error', message: langResult.message })
        return
      }
    }

    // 加载必要的库
    if (preload) {
      const preloadResult = await preload()
      if (preloadResult.status === 'error') {
        setResult(preloadResult)
        return
      }
    }

    // 启用桥接功能
    if (bridgeConfig && typeof bridgeConfig === 'object') {
      const bridgeResult = await initBridge(bridgeConfig)
      if (bridgeResult.status === 'error') {
        setResult(bridgeResult)
        return
      }
    }

    // 全部加载完成
    setResult({
      status: 'success',
      message: 'success'
    })
  }

  // Execute only once
  useEffect(() => {
    // 更新主题
    if (themeConfig?.fontSize) {
      Theme.setFontSize(themeConfig.fontSize)
    }

    // 启用后门(点击10次后门, 唤醒vconsole调试面板)
    if (debugElement && debugElement instanceof HTMLElement) {
      Debugger.addTrigger(debugElement)
    }

    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- 仅挂载时执行一次初始化
  }, [])

  // 国际化文件尚未加载成功, 会导致显示中文
  if (result === null) {
    return null
  }

  // Error
  if (result?.status === 'error') {
    return (
      <ResultComponent status="500" title={result?.message}>
        <Button
          radius="l"
          variant="filled" color="primary"
          style={{ margin: '10px 12px' }}
          onClick={() => void load()}
        >
          {LocaleUtil.locale('重试', 'lyrixi_132c5cdcceb0f1f17c8c088a42959aa4')}
        </Button>
      </ResultComponent>
    )
  }

  // Map
  if (mapConfig?.type && mapConfig?.key) {
    return (
      <Map.MapLoader
        config={{
          type: mapConfig.type,
          key: mapConfig.key
        }}
        onError={(loadError) => {
          const msg = loadError.message
          setResult({
            status: 'error',
            message:
              typeof msg === 'string' || typeof msg === 'number'
                ? String(msg)
                : msg === null || msg === undefined
                ? undefined
                : '加载失败'
          })
        }}
      >
        {/* 地图加载完成后才会渲染children */}
        {children}
      </Map.MapLoader>
    )
  }

  // Ordinary container
  return <>{children}</>
}

export default App
