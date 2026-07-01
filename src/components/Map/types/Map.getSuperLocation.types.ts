/** getSuperLocation 内部调用的定位参数（与 utils/getLocation 的 GetLocationParams 区分） */
export interface GetSuperLocationCallParams {
  browser?: boolean
  cacheExpiresContinue?: boolean
  cacheExpires?: number | null
  timeout?: number
  type: string
}

export interface LocResult {
  status?: string
  code?: string
  longitude?: number
  latitude?: number
  [key: string]: unknown
}

export interface GetSuperLocationParams {
  timeout?: number
  cacheExpiresContinue?: boolean
  cacheExpires?: number | null
  type: string
}

/** 写入定位缓存时的数据形态 */
export interface LocCacheData {
  longitude: number
  latitude: number
  [key: string]: unknown
}

/** Storage.getItem 读出的定位缓存条目 */
export interface LocationStorageCache {
  data?: Record<string, unknown>
  expires?: number
}
