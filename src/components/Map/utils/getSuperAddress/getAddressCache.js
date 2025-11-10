import CacheKey from './CacheKey'
import setAddressCache from './setAddressCache'
import removeAddressCache from './removeAddressCache'

// 内库使用-start
import Storage from './../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import {Storage } from 'lyrixi-mobile'
测试使用-end */

/**
 * 获取地址缓存
 * @param {Object} params - 参数对象
 * @param {number} params.latitude - 纬度
 * @param {number} params.longitude - 经度
 * @returns {Object|null} 缓存数据或null
 */
async function getAddressCache({ latitude, longitude }, cacheExpires) {
  try {
    const cache = await Storage.getItem(CacheKey)
    if (!cache) return null

    const { data, expires, coordinate } = cache

    // 检查缓存是否过期
    if (typeof expires === 'number' && Date.now() > expires) {
      await removeAddressCache()
      return null
    }

    // 检查经纬度是否相同
    if (
      coordinate &&
      Math.abs(coordinate.latitude - latitude) < 0.000001 &&
      Math.abs(coordinate.longitude - longitude) < 0.000001
    ) {
      // 再次缓存延长时效
      if (cacheExpires) {
        await setAddressCache({ latitude, longitude, cacheExpires }, data)
      }
      return data
    } else {
      // 经纬度不同，删除缓存
      await removeAddressCache()
      return null
    }
  } catch (error) {
    console.warn('获取地址缓存失败:', error)
    return null
  }
}

export default getAddressCache
