import type { DistrictMainApiResult } from '../../api/types'

export interface DistrictMainLoadDataTab {
  id: string | number
  type?: string[]
  [key: string]: unknown
}

export type DistrictMainLoadDataApiResult = DistrictMainApiResult
