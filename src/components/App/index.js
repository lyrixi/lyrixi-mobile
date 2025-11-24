import React, { useEffect, useState } from 'react'
// 系统字体大小
import updateVariables from './updateVariables'
// 桥接
import connectBridge from './connectBridge'

// 内库使用-start
import LocaleUtil from './../../utils/LocaleUtil'
import Logger from './../../utils/Logger'
import Debugger from './../../utils/Debugger'
import Result from './../Result'
import Button from './../Button'
import Map from './../Map'
import Message from './../Message'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Logger, Debugger, Result, Button, Map, Message } from 'lyrixi-mobile'
测试使用-end */

// System font size
updateVariables()

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
  enableLogger = true,
  bridgeConfig = null,
  backdoor = null,
  preload = null,
  loadingRender,
  map = {},
  children
}) {
  // Map配置
  const { onSuccess: onMapSuccess, onError: onMapError, ...mapConfig } = map

  // result: {status: 'empty'|'error'|'noMore'|'loading', message: string}
  let [result, setResult] = useState(null)

  // Execute only once
  useEffect(() => {
    // 启用日志功能
    if (enableLogger) {
      Logger.config()
    }

    // 启用后门(点击10次后门, 唤醒vconsole调试面板)
    if (backdoor && backdoor instanceof Element) {
      Debugger.addTrigger(backdoor)
    }

    load()
    // eslint-disable-next-line
  }, [])

  async function load() {
    // 加载必要的库
    if (preload) {
      let isOk = await preload?.()
      if (typeof isOk === 'string') {
        setResult({
          status: 'error',
          message: isOk
        })
        return
      }
    }

    // 启用桥接功能
    if (bridgeConfig && typeof bridgeConfig === 'object') {
      let isOk = await connectBridge(bridgeConfig)
      if (typeof isOk === 'string') {
        setResult({
          status: 'error',
          message: isOk
        })
        return
      }
    }

    // 全部加载完成
    setResult({
      status: 'success',
      message: '全部加载完成'
    })
  }

  // 国际化文件尚未加载成功, 会导致显示中文
  if (result === null) {
    return null
  }

  // Error
  if (typeof result?.status === 'error') {
    return (
      <Result status={result?.status === 'error' ? '500' : 'empty'} title={result?.message}>
        {result?.status !== 'empty' ? (
          <Button className="lyrixi-result-button" color="primary" onClick={() => load('retry')}>
            {LocaleUtil.locale('重试', 'lyrixi.retry')}
          </Button>
        ) : null}
      </Result>
    )
  }

  // Map
  if (mapConfig && typeof mapConfig === 'object') {
    return (
      <Map.APILoader
        config={mapConfig}
        loading={loadingRender}
        onSuccess={onMapSuccess}
        onError={onMapError}
      >
        {children}
      </Map.APILoader>
    )
  }

  // Ordinary container
  return children
}

export default App
