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

let Bridge = {}
if (
  Device.platform === 'wechat' ||
  Device.platform === 'wecom' ||
  Device.platform === 'wechatMiniprogram' ||
  Device.platform === 'wecomMiniprogram'
) {
  Bridge = BridgeWx
} else if (Device.platform === 'alipay' || Device.platform === 'alipayMiniprogram') {
  Bridge = BridgeAlipay
} else if (Device.platform === 'dingtalk') {
  Bridge = BridgeDingtalk
} else if (Device.platform === 'lark') {
  Bridge = BridgeLark
} else {
  Bridge = BridgeBrowser
}

export default Bridge
