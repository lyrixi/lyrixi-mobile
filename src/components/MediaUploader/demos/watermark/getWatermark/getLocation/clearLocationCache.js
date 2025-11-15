import { Storage } from 'lyrixi-mobile'
import getLocationCacheKey from './getLocationCacheKey'

// 清除缓存
async function clearLocationCache(type) {
  const cacheKey = getLocationCacheKey(type)
  await Storage.removeItem(cacheKey)
}

export default clearLocationCache
