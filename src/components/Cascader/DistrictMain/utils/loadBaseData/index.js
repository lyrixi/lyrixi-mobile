// 内库使用-start
import ArrayUtil from './../../../../../utils/ArrayUtil'
import LocaleUtil from './../../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 获取国家省市区, 返回数据格式为{ status: 'success' | 'error', message: string, list: [] }
async function loadBaseData({ countryId, loadCountries, loadCountryRegions }) {
  // 返回国家数据
  let countriesData = await loadCountries()

  // 未指定国家, 则直接返回国家数据
  if (!countryId) {
    return countriesData
  }

  // 加载指定国家的省市区
  const country = countriesData.list.find((item) => item.id === countryId)
  if (!country) {
    return {
      status: 'error',
      message: LocaleUtil.locale(
        'value参数错误, value开始应当为国家',
        'lyrixi_9a2f6cb8fea853e91225b72d770768e6'
      )
    }
  }
  // 此国家已有省市区， 则直接返回
  if (Array.isArray(country.children) && country.children.length) {
    return countriesData
  }
  // 补齐该国家的省市区
  const countryRegionsData = await loadCountryRegions(countryId)
  if (countryRegionsData?.status === 'error') return countryRegionsData
  if (countryRegionsData.list) country.children = countryRegionsData.list

  return {
    ...countriesData,
    list: ArrayUtil.updateDeepTreeParentId(countriesData?.list)
  }
}

export default loadBaseData
