import getAppId from './getAppId'

// 内库使用-start
import Request from './../../../utils/Request'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function authWechatConfig(options) {
  return new Promise((resolve) => {
    // 获取appId
    let appId = getAppId()
    if (!appId) {
      resolve(LocaleUtil.locale('appId为空，无法鉴权。'))
      return
    }

    // 构建参数
    let params = {
      url: window.location.href.split('#')[0],
      appId: appId
    }

    // 微信鉴权
    Request.post(options.url, {
      data: params,
      header: {
        'Content-type': 'application/json'
      }
    })
      .then((response) => {
        let result = response
        if (result.code === '1') {
          // beta: true必须这么写，否则wx.invoke调用形式的jsapi会有问题
          // debug: window.top._debug_调试打开后将变为true
          window.top.wx.config(
            Object.assign({ beta: true, debug: window.top._debug_ || false }, result.data, {
              jsApiList: [
                'openLocation',
                'getLocation',
                'chooseImage',
                'uploadImage',
                'previewImage',
                'getLocalImgData',
                'scanQRCode',
                'onHistoryBack',
                'closeWindow',
                'hideOptionMenu',
                'showMenuItems',
                'hideMenuItems',
                'hideAllNonBaseMenuItem',
                'selectExternalContact',
                'getCurExternalContact',
                'getCurExternalChat',
                'openUserProfile',
                'sendChatMessage',
                'startRecord',
                'stopRecord',
                'uploadVoice',
                'onVoiceRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'onVoicePlayEnd',
                'updateAppMessageShareData',
                'updateTimelineShareData',
                'openDefaultBrowser',
                'shareToExternalMoments',
                'shareAppMessage'
              ],

              // 填入打开小程序的开放标签名
              openTagList: ['wx-open-launch-weapp']
            })
          )

          window.top.wx.error((err) => {
            console.log(err)
            resolve(JSON.stringify(err))
          })
          window.top.wx.ready(() => {
            console.log('鉴权完成')
            resolve(true)
          })

          // 不鉴权测试
          // resolve(true)
        } else {
          resolve(response.message || LocaleUtil.locale('微信鉴权接口失败，请稍后重试！'))

          console.log(response.message || LocaleUtil.locale('微信鉴权接口失败，请稍后重试！'))
        }
      })
      .catch((err) => {
        resolve(LocaleUtil.locale('微信鉴权接口异常，请稍后重试！'))
      })
  })
}

export default authWechatConfig
