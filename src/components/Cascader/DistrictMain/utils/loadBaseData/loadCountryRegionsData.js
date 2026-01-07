import _ from 'lodash'
import formatList from './../../../utils/formatList'

// 加载省市区
async function loadCountryRegionsData({ countryId, loadCountryRegions }) {
  // 省作为起点：有列表直接用；没有则加载国家(86)下的省
  const countryRegionsData = await loadCountryRegions(countryId)
  if (countryRegionsData?.status === 'error') return countryRegionsData

  return {
    ...countryRegionsData,
    list: formatList(countryRegionsData?.list)
  }
}

export default loadCountryRegionsData
