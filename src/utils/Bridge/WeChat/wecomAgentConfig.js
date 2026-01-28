// 内库使用-start
import Request from './../../../utils/Request'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 企业微信自建应用和SASS应用鉴权
function wecomAgentConfig({ url, headers, payload, formatResponse, onSuccess, onError } = {}) {
  if (!url || !payload?.appId) {
    onError?.({
      status: 'error',
      message: `WeChat ${LocaleUtil.locale(
        '缺少参数',
        'lyrixi_f06ec979541f5f1283216579ac421380'
      )}: url or appId`
    })
    return
  }

  Request.post(url, payload, {
    headers: headers
  })
    .then(async (response) => {
      if (response.code === '1') {
        // 这里的result需要返回{corpid: appId, ...}
        let result = await formatResponse(response, { platform: 'wecom' })
        if (result.status === 'error') {
          onError?.({
            status: 'error',
            message: result.message
          })
          return
        }

        // eslint-disable-next-line
        window.top.wx.agentConfig({
          ...result,
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
            onSuccess?.({
              status: 'success'
            })
          },
          fail: function (res) {
            console.error('鉴权失败:', res)
            onError?.({
              status: 'error',
              messsage:
                res.errMsg ||
                `WeChat ${LocaleUtil.locale(
                  '鉴权失败，请稍后重试！',
                  'lyrixi_2a3ba5ab52970d065f994590dcb73c9b'
                )}`
            })
          }
        })
      } else {
        onError?.({
          status: 'error',
          messsage:
            response.message ||
            `WeChat ${LocaleUtil.locale(
              '鉴权接口失败，请稍后重试！',
              'lyrixi_7334cbbe6fd40b00e470b91c73f16d2f'
            )}`
        })
      }
    })
    .catch((e) => {
      onError?.({
        status: 'error',
        messsage: `WeChat ${LocaleUtil.locale(
          '鉴权接口异常，请稍后重试！',
          'lyrixi_d015103b9b8864df89ed3c7edb96eca0'
        )}`
      })
    })
}

export default wecomAgentConfig
