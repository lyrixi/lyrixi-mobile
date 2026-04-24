import { useState } from 'react'
import getStorage from './getCache'
import setStorage from './setCache'

/**
 * 页面数据缓存功能
 */
function useCacheState<T>(value: T, options?: { name?: string; persist?: boolean }) {
  /**
   * options缓存配置
   * @param {String} name - 唯一的缓存名称, 必填项, 默认无
   * @param {Boolean} persist - 是否永久缓存, 默认false
   */
  const { name: cacheName, persist } = options || {}
  let cacheValue = cacheName ? getStorage(cacheName) || value : value

  // 非永久缓存直接读取window变量缓存
  const [cache, setCache] = useState<T>(cacheValue as T)

  const setValue = (newValue: T) => {
    if (cacheName) {
      setStorage(cacheName, newValue, { persist })
    }
    setCache(newValue)
  }

  return [cache, setValue] as const
}

export default useCacheState
