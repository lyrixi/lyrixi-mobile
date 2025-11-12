import back from './utils/back'
import formatOpenLocationParams from './utils/formatOpenLocationParams'

import BridgeBrowser from './browser'
import BridgeWx from './wx'
import BridgeAlipay from './ap'
import BridgeDingtalk from './dingtalk'
import BridgeLark from './lark'

// 内库使用-start
import Device from './../Device'
// 内库使用-end

/* 测试使用-start
import { Device } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  // 存储自定义 Bridge
  _customBridges: [],

  /**
   * 添加自定义 Bridge
   * @param {String} platform - 平台名称，需要与 Device.platform 匹配
   * @param {Object|Function} bridgeOrFactory - Bridge 对象或返回 Bridge 对象的工厂函数
   * @example
   * Bridge.addBridge('customPlatform', {
   *   platform: 'customPlatform',
   *   load: function(callback, options) { ... },
   *   back: function(delta) { ... },
   *   // ... 其他方法
   * })
   *
   * // 或使用工厂函数（延迟初始化）
   * Bridge.addBridge('customPlatform', () => {
   *   return {
   *     platform: 'customPlatform',
   *     load: function(callback, options) { ... },
   *     // ...
   *   }
   * })
   */
  addBridge(platform, bridgeOrFactory) {
    if (typeof platform !== 'string' || !platform) {
      console.warn('Bridge.addBridge: platform must be a non-empty string')
      return
    }
    if (typeof bridgeOrFactory !== 'object' && typeof bridgeOrFactory !== 'function') {
      console.warn('Bridge.addBridge: bridgeOrFactory must be an object or function')
      return
    }
    this._customBridges.push({
      platform,
      bridge: bridgeOrFactory
    })
  },

  // 内部方法：获取当前 Bridge
  _getCurrentBridge() {
    const currentPlatform = Device.platform

    // 1. 先检查自定义 Bridge
    for (let item of this._customBridges) {
      if (item.platform === currentPlatform) {
        const bridge = typeof item.bridge === 'function' ? item.bridge() : item.bridge
        return bridge
      }
    }

    // 2. 再使用默认 Bridge 选择逻辑
    if (
      currentPlatform === 'wechat' ||
      currentPlatform === 'wecom' ||
      currentPlatform === 'wechatMiniprogram' ||
      currentPlatform === 'wecomMiniprogram'
    ) {
      return BridgeWx
    } else if (currentPlatform === 'alipay' || currentPlatform === 'alipayMiniprogram') {
      return BridgeAlipay
    } else if (currentPlatform === 'dingtalk') {
      return BridgeDingtalk
    } else if (currentPlatform === 'lark') {
      return BridgeLark
    } else {
      return BridgeBrowser
    }
  },

  // 动态属性：platform
  get platform() {
    return this._getCurrentBridge().platform
  },

  // 方法转发
  load(...args) {
    return this._getCurrentBridge().load(...args)
  },
  ready(...args) {
    // ready 是 load 的别名
    return this.load(...args)
  },
  back(...args) {
    return this._getCurrentBridge().back(...args)
  },
  closeWindow(...args) {
    return this._getCurrentBridge().closeWindow(...args)
  },
  onHistoryBack(...args) {
    return this._getCurrentBridge().onHistoryBack(...args)
  },
  setTitle(...args) {
    return this._getCurrentBridge().setTitle(...args)
  },
  openLocation(...args) {
    return this._getCurrentBridge().openLocation(...args)
  },
  getLocation(...args) {
    return this._getCurrentBridge().getLocation(...args)
  },
  chooseImage(...args) {
    return this._getCurrentBridge().chooseImage(...args)
  },
  uploadImage(...args) {
    return this._getCurrentBridge().uploadImage(...args)
  },
  previewImage(...args) {
    return this._getCurrentBridge().previewImage(...args)
  },
  previewFile(...args) {
    return this._getCurrentBridge().previewFile(...args)
  },
  invoke(...args) {
    return this._getCurrentBridge().invoke(...args)
  },
  getAppVersion(...args) {
    return this._getCurrentBridge().getAppVersion(...args)
  },
  tel(...args) {
    return this._getCurrentBridge().tel(...args)
  },
  getBrowserLocation(...args) {
    return this._getCurrentBridge().getBrowserLocation(...args)
  },
  goHome(...args) {
    return this._getCurrentBridge().goHome(...args)
  },
  openWindow(...args) {
    return this._getCurrentBridge().openWindow(...args)
  },
  logOut(...args) {
    return this._getCurrentBridge().logOut(...args)
  },
  scanQRCode(...args) {
    const bridge = this._getCurrentBridge()
    if (bridge.scanQRCode) {
      return bridge.scanQRCode(...args)
    }
    // 如果 Bridge 没有 scanQRCode 方法，调用 base 的默认实现
    return BridgeBrowser.scanQRCode(...args)
  },
  uploadFile(...args) {
    const bridge = this._getCurrentBridge()
    if (bridge.uploadFile) {
      return bridge.uploadFile(...args)
    }
    // 如果 Bridge 没有 uploadFile 方法，调用 base 的默认实现
    return BridgeBrowser.uploadFile(...args)
  },
  chooseFile(...args) {
    const bridge = this._getCurrentBridge()
    if (bridge.chooseFile) {
      return bridge.chooseFile(...args)
    }
    // 如果 Bridge 没有 chooseFile 方法，返回 undefined
    return undefined
  }
}

// Expose 工具类（静态属性）
Bridge.utils = {
  back: back,
  formatOpenLocationParams: formatOpenLocationParams
}

export default Bridge
