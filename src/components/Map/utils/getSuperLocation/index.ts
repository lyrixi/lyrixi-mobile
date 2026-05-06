import getLocationCache from './getLocationCache'
import setLocationCache from './setLocationCache'
import clearLocationCache from './clearLocationCache'
import defaultGetLocation from './../getLocation'
import getBrowserLocation from './getBrowserLocation'

import type { GetLocationOptions, LocResult, GetSuperLocationOptions } from './types'

// 内库使用-start
import Device from './../../../../utils/Device'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Device, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */


export type { GetLocationOptions, GetSuperLocationOptions } from './types'

async function getLocation({
  browser,
  cacheExpiresContinue,
  cacheExpires,
  timeout,
  type
}: GetLocationOptions): Promise<unknown> {
  return new Promise((resolve) => {
    console.log('定位方式:', type)

    if (cacheExpires === 0) {
      void clearLocationCache(type)
    }

    void (async () => {
      const cacheData = await getLocationCache(
        type,
        cacheExpiresContinue ? cacheExpires : null
      )
      if (cacheData) {
        console.log('定位读取缓存:', cacheData)
        resolve(cacheData)
        return
      }

      let getLocationTimer: ReturnType<typeof setTimeout> | null = null
      let getLocationTimeout = false

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

      let result: unknown = null
      if (browser) {
        result = await getBrowserLocation({ type })
      } else {
        result = await defaultGetLocation({ type })
      }

      if (getLocationTimeout) return

      if (getLocationTimer) window.clearTimeout(getLocationTimer)

      const r = result as LocResult
      if (r?.status === 'success') {
        if (
          cacheExpires &&
          typeof cacheExpires === 'number' &&
          r.longitude !== undefined &&
          r.longitude !== null &&
          r.latitude !== undefined &&
          r.latitude !== null
        ) {
          console.log(`定位成功, 设置缓存${cacheExpires}秒:`, result)
          void setLocationCache(type, cacheExpires, {
            ...r,
            longitude: r.longitude,
            latitude: r.latitude
          })
        }
      }
      resolve(result)
    })()
  })
}

/**
 * 定位：考虑定位超时场景，超时后再尝试浏览器定位
 */
async function getSuperLocation({
  timeout = 10000,
  cacheExpiresContinue = true,
  cacheExpires,
  type
}: GetSuperLocationOptions): Promise<unknown> {
  if (Device.device === 'pc') {
    return getLocation({
      type,
      cacheExpiresContinue,
      cacheExpires,
      timeout,
      browser: true
    })
  }
  let result: unknown = await getLocation({
    type,
    cacheExpiresContinue,
    cacheExpires,
    timeout: timeout
  })
  const r0 = result as LocResult
  if (r0?.status === 'success') {
    return result
  }
  if (r0?.code !== 'LOCATION_TIMEOUT') {
    return result
  }
  return getLocation({
    type,
    cacheExpiresContinue,
    cacheExpires,
    timeout: timeout,
    browser: true
  })
}

export default getSuperLocation
