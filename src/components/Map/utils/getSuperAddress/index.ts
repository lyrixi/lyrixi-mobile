import setAddressCache from './setAddressCache'
import getAddressCache from './getAddressCache'
import defaultGetAddress from './../getAddress'

export interface GetSuperAddressParams {
  cacheExpiresContinue?: boolean
  cacheExpires?: number | null
  type: string
  latitude: number
  longitude: number
}

/**
 * 获取地址（带缓存）
 */
async function getSuperAddress({
  cacheExpiresContinue = true,
  cacheExpires,
  type,
  latitude,
  longitude
}: GetSuperAddressParams): Promise<unknown> {
  const cacheData = await getAddressCache(
    { latitude, longitude },
    cacheExpiresContinue ? cacheExpires : null
  )
  if (cacheData) {
    console.log('地址读取缓存:', cacheData)
    return cacheData
  }
  const result: unknown = await defaultGetAddress({
    latitude,
    longitude,
    type
  })
  const r = result as { status?: string; [key: string]: unknown }
  if (r?.status === 'success') {
    console.log(`地址查询成功, 设置缓存${cacheExpires}秒:`, result)
    if (cacheExpires) {
      await setAddressCache({ longitude, latitude, cacheExpires }, result)
    }
  }
  return result
}

export default getSuperAddress
