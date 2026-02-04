import setAddressCache from './setAddressCache'
import getAddressCache from './getAddressCache'
import defaultGetAddress from './../getAddress'

/**
 * @description: 获取地址
 * @param {longitude, latitude, type: 'gcj02|wgs84'} params
 * @return {
 * address
 * ...
 * }
 */
async function getSuperAddress({
  cacheExpiresContinue = true,
  cacheExpires,
  type,
  latitude,
  longitude
}) {
  // 先查缓存
  const cacheData = await getAddressCache(
    { type, latitude, longitude },
    cacheExpiresContinue ? cacheExpires : null
  )
  if (cacheData) {
    console.log('地址读取缓存:', cacheData)
    return cacheData
  }
  // 没有缓存则查接口
  const result = await defaultGetAddress({
    latitude,
    longitude,
    type
  })

  // 查询成功则缓存结果
  if (result.status === 'success') {
    console.log(`地址查询成功, 设置缓存${cacheExpires}秒:`, result)
    await setAddressCache({ longitude, latitude, cacheExpires }, result)
  }

  return result
}

export default getSuperAddress
