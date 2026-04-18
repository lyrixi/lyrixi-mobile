import CacheKeyPrefix from './CacheKeyPrefix'
import setLocationCache from './setLocationCache'

// 内库使用-start
import Storage from './../../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import {Storage } from 'lyrixi-mobile'
测试使用-end */

// 读取缓存
async function getLocationCache(type, cacheExpires) {
  const cacheKey = `${CacheKeyPrefix}${type}`
  const cache = await Storage.getItem(cacheKey)
  if (!cache) return null
  try {
    const { data, expires } = cache
    if (typeof expires === 'number' && Date.now() < expires) {
      // 再次缓存延长时效
      if (cacheExpires) {
        await setLocationCache(type, cacheExpires, data)
      }
      return data
    }
  } catch (e) {
    // ignore
  }
  return null
}

export default getLocationCache
