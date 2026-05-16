
import type { AppBridgeResultPayload, AppInitBridgeConfig, AppInitBridgeResult } from './types'

// 内库使用-start
import Bridge from './../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

/**
 * 初始化桥接：先加载 Bridge，再配置鉴权
 * @param bridgeConfig - 桥接配置参数
 * @returns Promise resolving to status and message
 */
function initBridge({
  getScriptSrc,
  getConfigUrl,
  formatHeaders,
  formatPayload,
  formatResponse
}: AppInitBridgeConfig = {}): Promise<AppInitBridgeResult> {
  return new Promise((resolve) => {
    // 先调用 Bridge.load
    // eslint-disable-next-line
    Bridge.load(
      {
        getScriptSrc,
        onSuccess: () => {
          // Bridge.load 成功后，调用 Bridge.config 进行鉴权
          // eslint-disable-next-line
          Bridge.config(
            {
              getConfigUrl,
              formatHeaders,
              formatPayload,
              formatResponse,
              onSuccess: (result: unknown) => {
                const r = result as AppBridgeResultPayload
                resolve({
                  status: 'success',
                  message: r?.message
                })
              },
              onError: (error: unknown) => {
                const e = error as AppBridgeResultPayload
                resolve({
                  status: 'error',
                  message: e?.message
                })
              }
            },
            undefined
          )
        },
        onError: (error: AppBridgeResultPayload) => {
          // Bridge.load 失败
          resolve({
            status: 'error',
            message: error?.message || '桥接加载失败'
          })
        }
      },
      undefined
    )
  })
}

export default initBridge
