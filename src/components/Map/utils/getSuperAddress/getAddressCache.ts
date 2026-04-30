import CacheKey from './CacheKey'
import setAddressCache from './setAddressCache'
import clearAddressCache from './clearAddressCache'

// 内库使用-start
import Storage from './../../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import {Storage} from 'lyrixi-mobile'
测试使用-end */

import type { AddressCachePayload } from './types'

/**
 * 获取地址缓存
 */
async function getAddressCache(
  { latitude, longitude }: { latitude: number; longitude: number },
  cacheExpires: number | null | undefined
): Promise<unknown | null> {
  try {
    const cache = (await Storage.getItem(CacheKey)) as AddressCachePayload | null | undefined
    if (!cache) return null

    const { data, expires, coordinate } = cache

    if (typeof expires === 'number' && Date.now() > expires) {
      await clearAddressCache()
      return null
    }

    if (
      coordinate &&
      Math.abs(coordinate.latitude - latitude) < 0.000001 &&
      Math.abs(coordinate.longitude - longitude) < 0.000001
    ) {
      if (cacheExpires) {
        await setAddressCache({ latitude, longitude, cacheExpires }, data)
      }
      return data
    }
    await clearAddressCache()
    return null
  } catch (error) {
    console.warn('获取地址缓存失败:', error)
    return null
  }
}

export default getAddressCache
