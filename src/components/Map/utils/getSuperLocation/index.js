import getLocationCache from './getLocationCache'
import setLocationCache from './setLocationCache'
import clearLocationCache from './clearLocationCache'
import defaultGetLocation from './../getLocation'
import getBrowserLocation from './getBrowserLocation'

// 内库使用-start
import Device from './../../../../utils/Device'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Device, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

async function getLocation({
  browser,
  cacheExpiresContinue,
  cacheExpires,
  timeout,
  type
}) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    console.log('定位方式:', type)

    // 如果 cacheExpires === 0，清除缓存
    if (cacheExpires === 0) {
      await clearLocationCache(type)
    }

    // 优先读取缓存
    const cacheData = await getLocationCache(type, cacheExpiresContinue ? cacheExpires : null)
    if (cacheData) {
      console.log('定位读取缓存:', cacheData)
      resolve(cacheData)
      return
    }

    // 超时定时器
    let getLocationTimer = null
    let getLocationTimeout = false

    // 超时处理
    if (getLocationTimer) window.clearTimeout(getLocationTimer)
    if (typeof timeout === 'number') {
      getLocationTimer = setTimeout(() => {
        console.error('定位超时')
        getLocationTimeout = true
        resolve({
          status: 'error',
          code: 'LOCATION_TIMEOUT',
          message: LocaleUtil.locale('定位超时', 'lyrixi_af14815f5e9938584f52751cbb3c5dc2')
        })
      }, timeout)
    }

    // 立即定位
    let result = null
    if (browser) {
      result = await getBrowserLocation({
        type
      })
    } else {
      result = await defaultGetLocation({
        type
      })
    }

    // 超时处理： 定位完成则不需要响应，清除超时定时器
    if (getLocationTimeout) return

    // 没有超时则清除超时定时器
    if (getLocationTimer) window.clearTimeout(getLocationTimer)

    // 定位完成处理: 设置缓存
    if (result.status === 'success') {
      if (cacheExpires && typeof cacheExpires === 'number') {
        console.log(`定位成功, 设置缓存${cacheExpires}秒:`, result)
        await setLocationCache(type, cacheExpires, result)
      }
    }

    resolve(result)
  })
}

/**
 * @description: 定位：考虑定位超时场景，超时后再尝试浏览器定位
 * @param {{
*  browser:Boolean 是否浏览器定位
*  cacheExpiresContinue:Boolean 是否延长缓存时效
*  cacheExpires:Number 缓存过期时间, 单位: 秒
*  timeout:Number 定位超时时长,
*  type:String<'wgs84'|'gcj02'> 定位类型
*  }}
*  @return {status: 'success|error', data: {longitude, latitude}, message: '定位失败信息'}
*/
async function getSuperLocation({
  timeout = 10000,
  cacheExpiresContinue = true,
  cacheExpires,
  type
} = {}) {
  let result = null
  if (Device.device === 'pc') {
    result = await getLocation({
      type,
      cacheExpiresContinue,
      cacheExpires,
      timeout,
      browser: true
    })
    return result
  }
  result = await getLocation({
    type,
    cacheExpiresContinue,
    cacheExpires,
    timeout: timeout
  })

  // 定位成功则返回结果
  if (result.status === 'success') {
    return result
  }

  // 定位出错返回结果
  if (result?.code !== 'LOCATION_TIMEOUT') {
    return result
  }

  // 定位超时再用浏览器定位一次
  result = await getLocation({
    type,
    cacheExpiresContinue,
    cacheExpires,
    timeout: timeout,
    browser: true,
  })
  return result
}

export default getSuperLocation
