// 内库使用-start
import ArrayUtil from './../../../../../utils/ArrayUtil'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil } from 'lyrixi-mobile'
测试使用-end */

// 加载省市区
async function loadCountryRegionsData({ countryId, loadCountryRegions }) {
  // 省作为起点：有列表直接用；没有则加载国家(86)下的省
  const countryRegionsData = await loadCountryRegions(countryId)
  if (countryRegionsData?.status === 'error') return countryRegionsData

  return {
    ...countryRegionsData,
    list: ArrayUtil.updateDeepTreeParentId(countryRegionsData?.list)
  }
}

export default loadCountryRegionsData
