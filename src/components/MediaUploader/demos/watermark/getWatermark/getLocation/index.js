import { Device, Bridge, LocaleUtil } from 'lyrixi-mobile'
import getLocationCache from './getLocationCache'
import setLocationCache from './setLocationCache'
import clearLocationCache from './clearLocationCache'

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
 *  cacheExpires:Number 缓存过期时间, 单位: 秒
 *  timeout:Number 定位超时时长,
 *  type:String<'wgs84'|'gcj02'> 定位类型
 *  onSuccess:Function({longitude, latitude}) 定位成功回调
 *  onError:Function({errMsg, errCode}) 定位失败回调
 * }}
 * @return {String|Object<{longitude, latitude}>}
 */
async function getLocation({ browser, cacheExpires, timeout, type, onSuccess, onError }) {
  console.log('定位方式:', type)

  // 如果 cacheExpires === 0，清除缓存
  if (cacheExpires === 0) {
    await clearLocationCache(type)
  }

  // 优先读取缓存
  const cacheData = await getLocationCache(type, cacheExpires)
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
          errCode: errorCodes.LOCATION_TIMEOUT,
          errMsg: LocaleUtil.locale('定位超时')
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
      if (res?.errCode) {
        onError && onError(res)
        return
      }

      // 客户端定位错误码
      if (
        res?.errorCode === 'PERMISSION_DENIED' ||
        res?.errorCode === 'ZK004' ||
        res?.errorCode === 'ZK002' ||
        res?.errorCode === 'BD69' ||
        res?.errorCode === 'BD70' ||
        res?.errorCode === 'BD71' ||
        res?.errorCode === 'BD167' ||
        res?.errorCode === 'GD12' ||
        res?.errorCode === 'GD13' ||
        res?.errorCode === 'GD33'
      ) {
        onError &&
          onError({
            errCode: errorCodes.PERMISSION_DENIED,
            errMsg: LocaleUtil.locale('未开启定位服务或权限，定位失败')
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
            errCode: errorCodes.NETWORK_ERROR,
            errMsg: LocaleUtil.locale('网络异常，定位失败')
          })
        return
      }

      onError &&
        onError({
          errCode: errorCodes.UNKNOWN_ERROR,
          errMsg: LocaleUtil.locale('网络异常，定位失败')
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
export default ({ timeout = 10000, cacheExpires, type, onSuccess, onError } = {}) => {
  if (Device.device === 'pc') {
    getLocation({
      type,
      cacheExpires,
      timeout: timeout,
      browser: true,
      onError: onError,
      onSuccess: onSuccess
    })
    return
  }
  getLocation({
    type,
    cacheExpires,
    timeout: timeout,
    onSuccess: onSuccess,
    // 非超时错误直接fail, 超时错误则再定位一次
    onError: (error) => {
      if (error?.errCode !== 'LOCATION_TIMEOUT') {
        onError(error)
        return
      }
      getLocation({
        type,
        cacheExpires,
        timeout: timeout,
        browser: true,
        onError: onError,
        onSuccess: onSuccess
      })
    }
  })
}
