// 内库使用-start
import Storage from './../Storage'
// 内库使用-end

/* 测试使用-start
import { Storage } from 'lyrixi-mobile'
测试使用-end */

async function getCache(url, cacheKey) {
  if (!cacheKey || !['string', 'number'].includes(typeof cacheKey)) {
    return undefined
  }
  let cache = await Storage.getItem(url)
  if (cache?.cacheKey !== cacheKey) {
    return undefined
  }
  return cache.data
}

export default getCache
