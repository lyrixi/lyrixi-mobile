import getLocationCache from './getLocationCache'
import setLocationCache from './setLocationCache'
import clearLocationCache from './clearLocationCache'

// 内库使用-start
import Device from './../../../../utils/Device'
import LocaleUtil from './../../../../utils/LocaleUtil'
import Bridge from './../../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Device, LocaleUtil, Bridge } from 'lyrixi-mobile'
测试使用-end */

// 错误码
const errorCodes = {
  LATLNG_ERROR: 'LATLNG_ERROR',
  PERMISSION_DENIED: 'PERMISSION_DENIED',
  NETWORK_ERROR: 'NETWORK_ERROR',
  LOCATION_TIMEOUT: 'LOCATION_TIMEOUT',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
}

/**
 * @description: 定位
 * @param {{
 *  browser:Boolean 是否浏览器定位
 *  cacheExpiresContinue:Boolean 是否延长缓存时效
 *  cacheExpires:Number 缓存过期时间, 单位: 秒
 *  timeout:Number 定位超时时长,
 *  type:String<'wgs84'|'gcj02'> 定位类型
 *  onSuccess:Function({status: 'success', data: {longitude, latitude}}) 定位成功回调
 *  onError:Function({status: 'error', code: 'PERMISSION_DENIED'|'NETWORK_ERROR'|'LOCATION_TIMEOUT'|'UNKNOWN_ERROR', message}) 定位失败回调
 * }}
 * @return {String|Object<{longitude, latitude}>}
 */
async function getLocation({
  browser,
  cacheExpiresContinue,
  cacheExpires,
  timeout,
  type,
  onSuccess,
  onError
}) {
  console.log('定位方式:', type)

  // 如果 cacheExpires === 0，清除缓存
  if (cacheExpires === 0) {
    await clearLocationCache(type)
  }

  // 优先读取缓存
  const cacheData = await getLocationCache(type, cacheExpiresContinue ? cacheExpires : null)
  if (cacheData) {
    onSuccess && onSuccess(cacheData)
    return
  }

  // 超时定时器
  let getLocationTimeout = null
  // 定位是否完成
  let getLocationComplete = 0
  // 超时处理
  if (getLocationTimeout) window.clearTimeout(getLocationTimeout)
  if (typeof timeout === 'number') {
    getLocationTimeout = setTimeout(() => {
      console.error('定位超时')
      getLocationComplete = 2

      // 定位超时不显示水印
      onError &&
        onError({
          status: 'error',
          code: errorCodes.LOCATION_TIMEOUT,
          message: LocaleUtil.locale('定位超时', 'noKey_af14815f5e9938584f52751cbb3c5dc2')
        })
    }, timeout)
  }

  // 回调参数
  const params = {
    type: type,
    onSuccess: async (data) => {
      console.log('定位成功', data)
      // 定位完成则不需要响应
      if (getLocationComplete) return
      if (getLocationTimeout) window.clearTimeout(getLocationTimeout)

      // 设置缓存
      if (cacheExpires && typeof cacheExpires === 'number') {
        await setLocationCache(type, cacheExpires, data)
      }

      // 定位完成
      onSuccess && onSuccess(data)
    },
    onError: (res) => {
      console.log('定位失败', res)
      // 定位完成则不需要响应
      if (getLocationComplete) return
      if (getLocationTimeout) window.clearTimeout(getLocationTimeout)

      // 浏览器定位返回浏览器的错误码
      if (res?.status === 'error') {
        onError && onError(res)
        return
      }

      // 客户端定位错误码
      if (
        res?.code === 'PERMISSION_DENIED' ||
        res?.code === 'ZK004' ||
        res?.code === 'ZK002' ||
        res?.code === 'BD69' ||
        res?.code === 'BD70' ||
        res?.code === 'BD71' ||
        res?.code === 'BD167' ||
        res?.code === 'GD12' ||
        res?.code === 'GD13' ||
        res?.code === 'GD33'
      ) {
        onError &&
          onError({
            code: errorCodes.PERMISSION_DENIED,
            message: LocaleUtil.locale(
              '未开启定位服务或权限，定位失败',
              'noKey_95491614e045ef613a2a90b6f0a162f1'
            )
          })
        return
      }
      if (
        res?.errorCode === 'ZK003' ||
        res?.errorCode === 'BD62' ||
        res?.errorCode === 'BD63' ||
        res?.errorCode === 'BD67' ||
        res?.errorCode === 'GD3' ||
        res?.errorCode === 'GD4' ||
        res?.errorCode === 'GD5' ||
        res?.errorCode === 'GD18' ||
        res?.errorCode === 'GD19'
      ) {
        onError &&
          onError({
            code: errorCodes.NETWORK_ERROR,
            message: LocaleUtil.locale(
              '网络异常，定位失败',
              'noKey_31208a8ed1bbb2f00cea08335add57e3'
            )
          })
        return
      }

      onError &&
        onError({
          code: errorCodes.UNKNOWN_ERROR,
          message: LocaleUtil.locale('网络异常，定位失败', 'noKey_31208a8ed1bbb2f00cea08335add57e3')
        })
    }
  }
  // 立即定位
  if (browser) {
    Bridge.getBrowserLocation(params)
  } else {
    Bridge.getLocation(params)
  }
}

// 定位：考虑定位超时场景，超时后再尝试浏览器定位
function getSuperLocation({ timeout = 10000, cacheExpiresContinue, cacheExpires, type } = {}) {
  return new Promise((resolve, reject) => {
    if (Device.device === 'pc') {
      getLocation({
        type,
        cacheExpiresContinue,
        cacheExpires,
        timeout: timeout,
        browser: true,
        onError: resolve,
        onSuccess: resolve
      })
      return
    }
    getLocation({
      type,
      cacheExpiresContinue,
      cacheExpires,
      timeout: timeout,
      onSuccess: resolve,
      // 非超时错误直接fail, 超时错误则再定位一次
      onError: (error) => {
        if (error?.code !== 'LOCATION_TIMEOUT') {
          resolve(error)
          return
        }
        getLocation({
          type,
          cacheExpiresContinue,
          cacheExpires,
          timeout: timeout,
          browser: true,
          onError: resolve,
          onSuccess: resolve
        })
      }
    })
  })
}

export default getSuperLocation
