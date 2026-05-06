export interface DistrictSearchByKeywordNode {
  id: string | number
  name?: string
  type?: string[]
  children?: DistrictSearchByKeywordNode[]
  path?: DistrictSearchByKeywordNode[]
  [key: string]: unknown
}

export interface DistrictSearchByKeywordResult {
  status: 'success' | 'empty'
  message: string
  list: DistrictSearchByKeywordNode[]
}
