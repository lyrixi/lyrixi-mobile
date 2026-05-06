/** 行政区划 API 通用返回 */
export interface DistrictMainApiResult {
  status: 'success' | 'error' | 'empty'
  list?: unknown[]
  message?: string
}

/** 与历史命名兼容 */
export type ApiResult = DistrictMainApiResult

/** api/index 聚合层使用的树节点 */
export interface DistrictMainApiDistrictNode {
  id: string | number
  name?: string
  type?: string[]
  isLeaf?: boolean
  parentid?: string | number
  children?: DistrictMainApiDistrictNode[]
  [key: string]: unknown
}

/** formatCountryRegions 入参树节点 */
export interface DistrictFormatCountryRegionsNode {
  id: string | number
  name?: string
  parentid?: string | number
  nature?: number | string
  type?: string[]
  anchor?: string
  isLeaf?: boolean
  children?: DistrictFormatCountryRegionsNode[]
  [key: string]: unknown
}
