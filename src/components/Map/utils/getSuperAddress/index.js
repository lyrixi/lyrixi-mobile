import defaultGetAddress from './../getAddress'
import setAddressCache from './setAddressCache'
import getAddressCache from './getAddressCache'

/**
 * @description: 获取地址
 * @param {longitude, latitude, type: 'gcj02|wgs84'} params
 * @return {
 * address
 * ...
 * }
 */
async function getSuperAddress({
  cacheExpiresContinue,
  cacheExpires,
  type,
  latitude,
  longitude,
  getAddress = defaultGetAddress,
  onSuccess,
  onError
}) {
  // 先查缓存
  const cacheData = await getAddressCache(
    { type, latitude, longitude },
    cacheExpiresContinue ? cacheExpires : null
  )
  if (cacheData) {
    onSuccess && onSuccess(cacheData)
    return cacheData
  }
  // 没有缓存则查接口
  const result = await getAddress({
    latitude,
    longitude,
    type,
    cacheExpires,
    onSuccess,
    onError
  })

  // 查询成功则缓存结果
  if (typeof result !== 'string') {
    await setAddressCache({ longitude, latitude, cacheExpires }, result)
  }

  return result
}

export default getSuperAddress
