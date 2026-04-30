export interface AddressParams {
  longitude?: number | string
  latitude?: number | string
  type?: string
  address?: string
  [key: string]: unknown
}

/** getAddress 聚合入口入参（与 AddressParams 一致，允许 null） */
export type GetAddressParams = AddressParams | null | undefined

/** 逆地理等返回中可能出现的错误形态 */
export interface GetAddressResultShape {
  status?: string
  message?: string
  [key: string]: unknown
}
