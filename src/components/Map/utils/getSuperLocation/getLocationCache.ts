import CacheKeyPrefix from './CacheKeyPrefix'
import setLocationCache from './setLocationCache'

// 内库使用-start
import Storage from './../../../../utils/Storage'
import normalizeLocationResult from './../normalizeLocationResult'
// 内库使用-end

/* 测试使用-start
import {Storage } from 'lyrixi-mobile'
测试使用-end */

import type { LocCacheData } from './types'

// 读取缓存
async function getLocationCache(
  type: string,
  cacheExpires: number | null | undefined
): Promise<unknown | null> {
  const cacheKey = `${CacheKeyPrefix}${type}`
  const cache = (await Storage.getItem(cacheKey)) as
    | { data?: Record<string, unknown>; expires?: number }
    | null
    | undefined
  if (!cache) return null
  try {
    const { data, expires } = cache
    if (typeof expires === 'number' && Date.now() < expires) {
      if (cacheExpires) {
        if (data && typeof data === 'object' && 'longitude' in data && 'latitude' in data) {
          await setLocationCache(
            type,
            cacheExpires,
            data as LocCacheData
          )
        }
      }
      return data ? normalizeLocationResult(data) : null
    }
  } catch {
    // ignore
  }
  return null
}

export default getLocationCache
