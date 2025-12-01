import getSuitType from './getSuitType'
import getLowAppId from './getLowAppId'
import authWecomAgentConfig from './authWecomAgentConfig'
import authWechatConfig from './authWechatConfig'
import authLarkConfig from './authLarkConfig'
import authDingtalkConfig from './authDingtalkConfig'

// 内库使用-start
import Device from './../../../utils/Device'
import Bridge from './../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Device, Bridge } from 'lyrixi-mobile'
测试使用-end */

async function config(options = {}) {
  let { wechat = {}, wecom = {}, dingtalk = {}, lark = {} } = options || {}
  // PC端小程序不支持鉴权
  if (Device.device === 'pc') {
    return true
  }

  // iframe不需要鉴权
  if (window !== window.top) {
    return true
  }
  return new Promise((resolve) => {
    Bridge.load(async () => {
      // 钉钉标题需要手动补充
      let title = decodeURIComponent(decodeURIComponent(Device.getUrlParameter('title') || ''))
      if (Device.platform === 'dingtalk' && document.title) {
        Bridge.setTitle({ title: title || document.title })
      }

      // 企微鉴权
      let lowerAppId = getLowAppId()
      let suitType = getSuitType()
      if (
        Bridge.platform === 'wecom' ||
        (Bridge.platform === 'wecomBrowser' && lowerAppId && suitType)
      ) {
        let isOk = await authWecomAgentConfig(wecom)
        resolve(isOk)
        return isOk
      }

      // 其它平台鉴权
      if (
        Bridge.platform === 'wechatMiniProgram' ||
        Bridge.platform === 'wecomMiniProgram' ||
        Bridge.platform === 'wechat' ||
        Bridge.platform === 'wecom' ||
        Bridge.platform === 'wecomBrowser'
      ) {
        let isOk = await authWechatConfig(wechat)
        resolve(isOk)
        return isOk
      }

      if (Bridge.platform === 'lark') {
        let isOk = await authLarkConfig(lark)
        resolve(isOk)
        return isOk
      }

      if (Bridge.platform === 'dingtalk') {
        let isOk = await authDingtalkConfig(dingtalk)
        resolve(isOk)
        return isOk
      }
      resolve(true)
    }, options)
  })
}

export default config
