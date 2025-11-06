import getSuitType from './getSuitType'
import getAppId from './getAppId'

// 内库使用-start
import Request from './../../../utils/Request'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function authLarkConfig(options) {
  return new Promise((resolve) => {
    // 获取appId
    let appId = getAppId()
    // appId
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
    Request.post(options?.url, {
      data: params,
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
              resolve(true)
            },
            // 失败回调
            onFail: (err) => {
              // 单例
              if (isReady) return
              isReady = true
              console.log(`config failed: `, err)
              resolve(`config failed`)
            }
            // // 成功回调
            // onSuccess: (res) => {
            //   console.log('Auth success:', res)
            //   // 单例
            //   if (isReady) return
            //   isReady = true

            //   // console.log('Auth success')
            //   // window.top.h5sdk.error((err) => {
            //   //   console.log('Bridge ready failed:', err)
            //   //   resolve('Bridge ready failed')
            //   //   // if (typeof callback === 'function')
            //   //   //   callback({ errCode: 'BRIDGE_ERROR', errMsg: 'Bridge ready failed' })
            //   // })

            //   // window.top.h5sdk.ready(function () {
            //   //   console.log('Bridge ready')
            //   //   resolve(true)
            //   //   // if (typeof callback === 'function') callback()
            //   // })
            //   resolve(true)
            // },
            // // 失败回调
            // onFail: (err) => {
            //   console.log(err)
            //   // 单例
            //   if (isReady) return

            //   console.error('Auth fail')
            //   resolve(`config failed`)
            // }
          })
        } else {
          resolve(response.message || LocaleUtil.locale('飞书鉴权接口失败，请稍后重试！'))
        }
      })
      .catch((err) => {
        resolve(LocaleUtil.locale('飞书鉴权接口异常，请稍后重试！'))
      })
  })
}

export default authLarkConfig
