import back from './utils/back'
import formatOpenLocationParams from './utils/formatOpenLocationParams'
import Browser from './Browser'
import WeChat from './WeChat'
import Alipay from './Alipay'
import DingTalk from './DingTalk1'
import Lark from './Lark'

// 内库使用-start
import Device from './../Device'
// 内库使用-end

/* 测试使用-start
import { Device } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  // 存储自定义 Bridge
  _customBridges: {},
  // 添加自定义 Bridge
  addBridge(platform, customBridge) {
    if (!platform || !customBridge) {
      console.error('Bridge.addBridge: platform and customBridge are required')
      return
    }
    this._customBridges[platform] = customBridge
  },
  // 内部方法：获取当前 Bridge
  _getCurrentBridge() {
    const platform = Device.platform

    // 1. 先检查自定义 Bridge
    if (this._customBridges?.[platform]) {
      return { ...Browser, ...this._customBridges[platform] }
    }

    // 2. 再使用默认 Bridge 选择逻辑
    if (
      platform === 'wechat' ||
      platform === 'wecom' ||
      platform === 'wechatMiniprogram' ||
      platform === 'wecomMiniprogram'
    ) {
      return { ...Browser, ...WeChat }
    } else if (platform === 'alipay' || platform === 'alipayMiniprogram') {
      return { ...Browser, ...Alipay }
    } else if (platform === 'dingtalk') {
      return { ...Browser, ...DingTalk }
    } else if (platform === 'lark') {
      return { ...Browser, ...Lark }
    } else {
      return Browser
    }
  },

  // 方法转发
  load(...args) {
    return this._getCurrentBridge().load(...args)
  }
}

// Expose 工具类（静态属性）
Bridge.utils = {
  back: back,
  formatOpenLocationParams: formatOpenLocationParams
}

export default Bridge
