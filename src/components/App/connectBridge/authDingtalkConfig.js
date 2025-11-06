import getSuitType from './getSuitType'
import getAppId from './getAppId'

// 内库使用-start
import Request from './../../../utils/Request'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function authDingtalkConfig(options) {
  return new Promise((resolve) => {
    // 获取appId
    let appId = getAppId()
    if (!appId) {
      resolve(LocaleUtil.locale('appId为空，无法鉴权。'))
      return
    }
    // 获取suitType
    let suitType = getSuitType()
    if (!suitType) {
      resolve(LocaleUtil.locale('suitType为空，无法鉴权。'))
      return
    }

    // 构建参数
    let params = {
      url: window.location.href.split('#')[0],
      appId: appId,
      suitType: suitType
    }

    // 获取鉴权信息
    Request.post(options?.url, params, {
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((response) => {
        let result = response
        if (result.code === '1') {
          let isReady = false

          // config 超时
          setTimeout(() => {
            // 单例
            if (isReady) return

            isReady = true
            resolve(`config failed: timeout`)
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
            resolve(`${LocaleUtil.locale('鉴权失败')} ${err?.errorMessage || ''}`)
          })
          window.top.dd.ready(function () {
            console.log('鉴权成功')
            resolve(true)
          })
        } else {
          console.log('钉钉鉴权接口失败，请稍后重试！')
          resolve(response.message || LocaleUtil.locale('钉钉鉴权接口失败，请稍后重试！'))
        }
      })
      .catch((err) => {
        console.log('钉钉鉴权接口异常，请稍后重试！', err)
        resolve(LocaleUtil.locale('钉钉鉴权接口异常，请稍后重试！'))
      })
  })
}

export default authDingtalkConfig
