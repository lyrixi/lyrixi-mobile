import React, { useEffect, useState } from 'react'
import initBridge from './initBridge'

// 内库使用-start
import Theme from './../../utils/Theme'
import LocaleUtil from './../../utils/LocaleUtil'
import Logger from './../../utils/Logger'
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
    Message.destroy()
  },
  false
)

// 顶层容器
function App({
  enableLogDB = true, // 启用日志数据库
  mapConfig = null, // 地图配置 {type: 'bmap' | 'amap' | 'google', key: 'xxx'}
  bridgeConfig = null, // { getScriptSrc, getConfigUrl, formatHeaders, formatPayload, formatResponse}
  languageConfig = null, // 语言配置 {language: 'zh_CN' | 'en_US' | 'ja_JP', dayjs: true | false, lyrixi: true | false, localJsFiles: string[], localJsonFiles: string[], remoteJsFiles: string[], remoteJsonFiles: string[]}
  debugElement = null, // 传入debugger元素, 用于点击10次后门, 唤醒vconsole调试面板
  preload = null, // 预加载函数, 返回 {status: 'success'|'error', message: string}
  themeConfig = null, // 主题配置 {fontSize: 'm' | 'l' | 'xl'}
  children
}) {
  // result: {status: 'empty'|'error'|'noMore'|'loading', message: string}
  let [result, setResult] = useState(null)

  // Execute only once
  useEffect(() => {
    // 更新主题
    if (themeConfig?.fontSize) {
      Theme.setFontSize(themeConfig.fontSize)
    }

    // 启用日志功能
    if (enableLogDB) {
      Logger.config()
    }

    // 启用后门(点击10次后门, 唤醒vconsole调试面板)
    if (debugElement && debugElement instanceof Element) {
      Debugger.addTrigger(debugElement)
    }

    load()
    // eslint-disable-next-line
  }, [])

  async function load() {
    // 加载语言文件
    if (languageConfig?.language) {
      let result = await LocaleUtil.loadLocale(languageConfig?.language, languageConfig)
      if (result.status === 'error') {
        setResult(result)
        return
      }
    }

    // 加载必要的库
    if (preload) {
      let result = await preload?.()
      if (result.status === 'error') {
        setResult(result)
        return
      }
    }

    // 启用桥接功能
    if (bridgeConfig && typeof bridgeConfig === 'object') {
      let result = await initBridge(bridgeConfig)
      if (result.status === 'error') {
        setResult(result)
        return
      }
    }

    // 全部加载完成
    setResult({
      status: 'success',
      message: 'success'
    })
  }

  // 国际化文件尚未加载成功, 会导致显示中文
  if (result === null) {
    return null
  }

  // Error
  if (result?.status === 'error') {
    return (
      <Result status={result?.status === 'error' ? '500' : 'empty'} title={result?.message}>
        {result?.status !== 'empty' ? (
          <Button className="lyrixi-result-button" color="primary" onClick={() => load('retry')}>
            {LocaleUtil.locale('重试', 'lyrixi_132c5cdcceb0f1f17c8c088a42959aa4')}
          </Button>
        ) : null}
      </Result>
    )
  }

  // Map
  if (mapConfig?.type && mapConfig?.key) {
    return (
      <Map.APILoader
        config={{
          type: mapConfig.type,
          key: mapConfig.key
        }}
        onError={(error) => {
          setResult(error)
        }}
      >
        {/* 地图加载完成后才会渲染children */}
        {children}
      </Map.APILoader>
    )
  }

  // Ordinary container
  return children
}

export default App
