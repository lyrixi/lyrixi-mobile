// 内库使用-start
import Storage from './../Storage'
// 内库使用-end

/* 测试使用-start
import { Storage } from 'lyrixi-mobile'
测试使用-end */

function setCache(url, cacheKey, data) {
  if (!cacheKey || !['string', 'number'].includes(typeof cacheKey)) {
    return
  }
  Storage.setItem(url, {
    cacheKey: cacheKey,
    data: data
  })
}

export default setCache
