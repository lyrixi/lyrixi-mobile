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
        let result = await formatResponse(response, { platform: 'lark' })
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
          if (isReady) return

          isReady = true
          onError?.({
            status: 'error',
            message: 'config failed: timeout'
          })
        }, 10000)

        window.top.h5sdk.config({
          appId: result.data.appId,
          timestamp: result.data.timeStamp,
          nonceStr: result.data.nonceStr,
          signature: result.data.signature,
          jsApiList: ['openLocation', 'getLocation', 'scanCode', 'previewImage', 'closeWindow'],
          // 成功回调
          onSuccess: (res) => {
            // 单例
            if (isReady) return
            isReady = true
            console.log(`config success: `, res)
            onSuccess?.({
              status: 'success'
            })
          },
          // 失败回调
          onFail: (err) => {
            // 单例
            if (isReady) return
            isReady = true
            console.log(`config failed: `, err)
            onError?.({
              status: 'error',
              message: LocaleUtil.locale('config failed')
            })
          }
        })
      } else {
        onError?.({
          status: 'error',
          message: response.message || LocaleUtil.locale('飞书鉴权接口失败，请稍后重试！')
        })
      }
    })
    .catch((err) => {
      onError?.({
        status: 'error',
        message: LocaleUtil.locale('飞书鉴权接口异常，请稍后重试！')
      })
    })
}

export default config
