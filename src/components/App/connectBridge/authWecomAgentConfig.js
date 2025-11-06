import getSuitType from './getSuitType'
import getAppId from './getAppId'
import getLowAppId from './getLowAppId'

// 内库使用-start
import Request from './../../../utils/Request'
import LocaleUtil from './../../../utils/LocaleUtil'
import Device from './../../../utils/Device'
import Bridge from './../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil, Device, Bridge } from 'lyrixi-mobile'
测试使用-end */

// 企业微信自建应用和SASS应用鉴权
function authWecomAgentConfig(options) {
  return new Promise((resolve) => {
    // iframe不需要鉴权
    if (window !== window.top) {
      resolve(true)
      return
    }
    if (Device.getUrlParameter('auth') === '0') {
      resolve(true)
      return
    }
    if (Bridge.platform !== 'wework' && Bridge.platform !== 'weworkBrowser') {
      resolve(true)
      return
    }
    // 获取appId
    let appId = getAppId()

    if (!appId) {
      resolve(LocaleUtil.locale('appId为空，无法鉴权。'))
      return
    }

    let queryParams = {
      appId: appId,
      url: window.location.href.split('#')[0]
    }
    // 获取下游appId
    let lowerAppId = getLowAppId()
    if (lowerAppId) {
      queryParams.lowerAppId = lowerAppId
    }
    // 获取suitType
    let suitType = getSuitType()
    if (suitType) {
      queryParams['suiteType'] = suitType
    }
    Request.post(options?.url, queryParams, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        Bridge.hideLoading()
        if (res.code === '1') {
          let resData = res.data
          let querys = {
            corpid: appId, // 必填，企业微信的corpid，必须与当前登录的企业一致
            ...resData
            // agentid: resData.agentid || '', // 必填，企业微信的应用id （e.g. 1000247）
            // timestamp: resData.timestamp || '', // 必填，生成签名的时间戳
            // nonceStr: resData.nonceStr || '', // 必填，生成签名的随机串
            // signature: resData.signature || '' // 必填，签名，见附录-JS-SDK使用权限签名算法
          }

          // eslint-disable-next-line
          window.top.wx.agentConfig({
            ...querys,
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

            //必填
            debug: false,
            beta: true,
            success: function (res) {
              resolve(res)
            },
            fail: function (res) {
              console.error('鉴权失败:', res)
              resolve(res.errMsg || LocaleUtil.locale('企业微信鉴权失败，请稍后重试！'))
            }
          })
        } else {
          resolve(res.message || LocaleUtil.locale('企业微信鉴权接口失败，请稍后重试！'))
        }
      })
      .catch((e) => {
        resolve(LocaleUtil.locale('企业微信鉴权接口异常，请稍后重试！'))
      })
  })
}

export default authWecomAgentConfig
