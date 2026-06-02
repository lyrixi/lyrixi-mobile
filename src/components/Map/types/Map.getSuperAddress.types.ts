export interface GetSuperAddressParams {
  cacheExpiresContinue?: boolean
  cacheExpires?: number | null
  type: string
  latitude: number
  longitude: number
}

/** Storage 中地址缓存条目的反序列化形态 */
export interface AddressCachePayload {
  data?: unknown
  expires?: number
  coordinate?: { latitude: number; longitude: number }
}

/** setAddressCache 第一个参数 */
export interface SetAddressCacheParams {
  latitude: number
  longitude: number
  cacheExpires?: number | null
}
