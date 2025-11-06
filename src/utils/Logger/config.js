import setLogs from './setLogs'

// 内库使用-start
import Storage from './../Storage'
// 内库使用-end

/* 测试使用-start
import { Storage } from 'lyrixi-mobile'
测试使用-end */

// 全局变量
let originalConsoleInfo = null
let initialized = false

/**
 * 初始化日志功能，覆盖console.info
 */
function config({ types } = {}) {
  if (initialized) {
    return true
  }

  // 保存原始的console.info方法
  originalConsoleInfo = console.info

  // 覆盖console.info方法
  console.info = async (...args) => {
    // 调用原始方法，保持原有功能
    if (originalConsoleInfo) {
      originalConsoleInfo.apply(console, args)
    }

    // 记录日志到存储
    await setLogs(
      args
        .map((arg) => {
          if (typeof arg === 'object') {
            return JSON.stringify(arg)
          }
          return String(arg)
        })
        .join(' ')
    )
  }

  initialized = true

  Storage.config({
    types: types || ['indexedDB', 'webSQL']
  })
  return true
}

export default config
