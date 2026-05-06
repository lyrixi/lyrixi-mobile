import loadCountries from './loadCountries'
import loadCountryRegions from './loadCountryRegions'
import loadStreets from './loadStreets'
import formatCountryRegions from './formatCountryRegions'

import type { ApiResult, DistrictFormatCountryRegionsNode, DistrictMainApiDistrictNode } from './types'

const api = {
  loadCountries: async function (): Promise<ApiResult> {
    const result = await loadCountries()
    if (result?.status === 'success' && Array.isArray(result.list)) {
      result.list = (result.list as DistrictMainApiDistrictNode[]).map((node) => {
        node.type = ['country']
        return node
      })
    }
    return result as ApiResult
  },

  loadCountryRegions: async function (countryId: string | number): Promise<ApiResult> {
    const result = await loadCountryRegions(countryId)
    if (result?.status === 'success' && Array.isArray(result.list)) {
      result.list = formatCountryRegions(result.list as DistrictFormatCountryRegionsNode[], countryId)
      return result as ApiResult
    }
    return result as ApiResult
  },

  loadStreets: async function (districtId: string | number): Promise<ApiResult> {
    const result = await loadStreets(districtId)
    if (result.status === 'success' && Array.isArray(result.list)) {
      result.list = (result.list as DistrictMainApiDistrictNode[]).map((item: DistrictMainApiDistrictNode) => {
        return {
          id: item.id,
          name: item.name,
          parentid: districtId,
          type: ['street'],
          isLeaf: true
        }
      })
    }
    return result as ApiResult
  }
}

export default api
