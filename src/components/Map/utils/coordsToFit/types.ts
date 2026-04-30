export interface CoordInput {
  inChinaTo?: string
  outChinaTo?: string
  longitude?: number | string
  latitude?: number | string
  type?: string
  isInChina?: boolean
  [key: string]: unknown
}
