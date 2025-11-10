import queryAddress from './../getAddress'
import setAddressCache from './setAddressCache'
import getAddressCache from './getAddressCache'

/**
 * @description: 获取地址
 * @param {longitude, latitude, type: 'gcj02|wgs84'} params
 * @return {
 * address,
 * longitude,
 * latitude,
 * province,
 * provinceNumber,
 * provinceMatch
 * ...
 * }
 */
async function getSuperAddress({
  cacheExpiresContinue,
  cacheExpires,
  type,
  latitude,
  longitude,
  success,
  fail
}) {
  // 先查缓存
  const cacheData = await getAddressCache(
    { type, latitude, longitude },
    cacheExpiresContinue ? cacheExpires : null
  )
  if (cacheData) {
    if (typeof success === 'function') success(cacheData)
    return cacheData
  }
  // 没有缓存则查接口
  const result = await queryAddress({
    latitude,
    longitude,
    type,
    cacheExpires,
    success,
    fail
  })

  // 查询成功则缓存结果
  if (typeof result !== 'string') {
    await setAddressCache({ longitude, latitude, cacheExpires }, result)
  }

  return result
}

export default getSuperAddress
