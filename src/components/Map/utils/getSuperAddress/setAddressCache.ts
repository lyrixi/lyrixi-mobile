import CacheKey from './CacheKey'

// 内库使用-start
import Storage from './../../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import {Storage } from 'lyrixi-mobile'
测试使用-end */

/**
 * 设置地址缓存
 * @param {Object} params - 参数对象
 * @param {number} params.latitude - 纬度
 * @param {number} params.longitude - 经度
 * @param {number} params.cacheExpires - 缓存过期时间（秒）
 * @param {Object} data - 要缓存的数据
 */
async function setAddressCache({ latitude, longitude, cacheExpires }, data) {
  if (!cacheExpires || typeof cacheExpires !== 'number') return false

  try {
    const cacheData = {
      data,
      coordinate: {
        latitude: latitude,
        longitude: longitude
      },
      expires: Date.now() + cacheExpires * 1000
    }

    await Storage.setItem(CacheKey, cacheData)
    return true
  } catch (error) {
    console.warn('设置地址缓存失败:', error)
    return false
  }
}

export default setAddressCache
