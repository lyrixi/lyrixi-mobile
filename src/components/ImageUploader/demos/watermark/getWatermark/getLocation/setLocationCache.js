import { Storage } from 'lyrixi-mobile'
import getLocationCacheKey from './getLocationCacheKey'

// 设置缓存
async function setLocationCache(type, cacheExpires, data) {
  if (!cacheExpires) return
  const cacheKey = getLocationCacheKey(type)
  await Storage.setItem(cacheKey, {
    data,
    expires: Date.now() + cacheExpires * 1000
  })
}

export default setLocationCache
