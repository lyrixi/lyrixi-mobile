import { Storage } from 'lyrixi-mobile'
import getLocationCacheKey from './getLocationCacheKey'

// 读取缓存
async function getLocationCache(type) {
  const cacheKey = getLocationCacheKey(type)
  const cache = await Storage.getItem(cacheKey)
  if (!cache) return null
  try {
    const { data, expires } = cache
    if (typeof expires === 'number' && Date.now() < expires) {
      return data
    }
  } catch (e) {
    // ignore
  }
  return null
}

export default getLocationCache
