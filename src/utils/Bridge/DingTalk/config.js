// 内库使用-start
import Request from './../../../utils/Request'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function config({ url, headers, payload, formatResponse, onSuccess, onError } = {}) {
  // 获取鉴权信息
  Request.post(url, payload, {
    headers: headers
  })
    .then(async (response) => {
      if (response.code === '1') {
        let result = await formatResponse(response, { platform: 'dingtalk' })
        if (result.status === 'error') {
          onError?.({
            status: 'error',
            message: result.message
          })
          return
        }
        let isReady = false

        // config 超时
        setTimeout(() => {
          // 单例
          if (isReady) return

          isReady = true
          onError?.({
            status: 'error',
            message: `DingTalk ${LocaleUtil.locale(
              '超时',
            )}`
          })
        }, 10000)

        // 必填，需要使用的jsapi列表，注意：不要带dd。
        window.top.dd.config({
          agentId: result.data.agentId, // 必填，微应用ID
          appId: result.data.appId, // 必填，企业ID
          timeStamp: result.data.timeStamp, // 必填，生成签名的时间戳
          nonceStr: result.data.nonceStr, // 必填，自定义固定字符串。
          signature: result.data.signature, // 必填，签名
          type: 0, // 选填。0表示微应用的jsapi,1表示服务窗的jsapi；不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
          // https://open.dingtalk.com/document/orgapp/client-api-comparison-table
          jsApiList: [
            'biz.map.view', // openLocation也使用此ApiList
            'device.geolocation.get', // getLocation也使用此ApiList
            'biz.util.scan',
            'biz.util.chooseImage',
            'uploadFile',
            // 以下api不需要鉴权
            'biz.util.previewImage'
            // 'previewImage',
            // 'closePage',
            // 'setNavigationTitle'
          ]
        })

        // 该方法必须带上，用来捕获鉴权出现的异常信息，否则不方便排查出现的问题
        window.top.dd.error(function (err) {
          console.error('鉴权失败:', err)
          onError?.({
            status: 'error',
            message: `${LocaleUtil.locale('鉴权失败', 'noKey_c0a3c7a55fe9e9647c0957dfa2beeeb6')} ${err?.errorMessage || ''
              }`
          })
        })
        window.top.dd.ready(function () {
          console.log('鉴权成功')
          onSuccess?.({
            status: 'success'
          })
        })
      } else {
        console.log('钉钉鉴权接口失败，请稍后重试！')
        onError?.({
          status: 'error',
          message:
            response.message ||
            LocaleUtil.locale(
              '钉钉鉴权接口失败，请稍后重试！',
              'noKey_98bb782f2dfde64bca3089c5dca9fa82'
            )
        })
      }
    })
    .catch((err) => {
      console.log('钉钉鉴权接口异常，请稍后重试！', err)
      onError?.({
        status: 'error',
        message: LocaleUtil.locale(
          '钉钉鉴权接口异常，请稍后重试！',
          'noKey_591fa56109d479b2ab1e03c3a306c035'
        )
      })
    })
}

export default config
