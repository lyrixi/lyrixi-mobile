import CacheKeyPrefix from './CacheKeyPrefix'

// 内库使用-start
import Storage from './../../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import {Storage } from 'lyrixi-mobile'
测试使用-end */

// 清除缓存
async function clearLocationCache(type) {
  const cacheKey = `${CacheKeyPrefix}${type}`
  await Storage.removeItem(cacheKey)
}

export default clearLocationCache
