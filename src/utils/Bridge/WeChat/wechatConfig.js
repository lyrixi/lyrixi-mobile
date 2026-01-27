// 内库使用-start
import Request from './../../../utils/Request'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function wechatConfig({ url, headers, payload, formatResponse, onSuccess, onError } = {}) {
  if (!url || !payload?.appId) {
    onError?.({
      status: 'error',
      message: `${LocaleUtil.locale(
        '缺少参数',
        'lyrixi.lack.parameter'
      )}: url or appId`
    })
    return
  }

  // 微信鉴权
  Request.post(url, payload, {
    header: headers
  })
    .then(async (response) => {
      if (response.code === '1') {
        let result = await formatResponse(response, { platform: 'wechat' })
        if (result.status === 'error') {
          onError?.({
            status: 'error',
            messsage: result.message
          })
          return
        }
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
          onError?.({
            status: 'error',
            messsage: JSON.stringify(err)
          })
        })
        window.top.wx.ready(() => {
          console.log('鉴权完成')
          onSuccess?.({
            status: 'success'
          })
        })
      } else {
        onError?.({
          status: 'error',
          messsage:
            response.message ||
            LocaleUtil.locale(
              '微信鉴权接口失败，请稍后重试！',
              'lyrixi.wechat.config.interface.error'
            )
        })

        console.log(
          response.message ||
          LocaleUtil.locale(
            '微信鉴权接口失败，请稍后重试！',
            'lyrixi.wechat.config.interface.error'
          )
        )
      }
    })
    .catch((err) => {
      onError?.({
        status: 'error',
        messsage: LocaleUtil.locale(
          '微信鉴权接口异常，请稍后重试！',
          'lyrixi.wechat.config.interface.exception'
        )
      })
    })
}

export default wechatConfig
