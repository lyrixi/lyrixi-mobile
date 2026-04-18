// 内库使用-start
import Bridge from './../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

/**
 * 初始化桥接：先加载 Bridge，再配置鉴权
 * @param {Object} bridgeConfig - 桥接配置参数
 * @returns {Promise<{status: 'success|error', message: string}>}
 */
function initBridge({
  getScriptSrc,
  getConfigUrl,
  formatHeaders,
  formatPayload,
  formatResponse
} = {}) {
  return new Promise((resolve) => {
    // 先调用 Bridge.load
    Bridge.load({
      getScriptSrc,
      onSuccess: () => {
        // Bridge.load 成功后，调用 Bridge.config 进行鉴权
        Bridge.config({
          getConfigUrl,
          formatHeaders,
          formatPayload,
          formatResponse,
          onSuccess: (result) => {
            // 鉴权成功
            resolve({
              status: 'success',
              message: result?.message
            })
          },
          onError: (error) => {
            // 鉴权失败
            resolve({
              status: 'error',
              message: error?.message
            })
          }
        })
      },
      onError: (error) => {
        // Bridge.load 失败
        resolve({
          status: 'error',
          message: error?.message || '桥接加载失败'
        })
      }
    })
  })
}

export default initBridge
