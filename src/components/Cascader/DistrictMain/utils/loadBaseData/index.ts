

import type { DistrictMainApiDistrictNode, DistrictResultState } from '../../../types'

// 内库使用-start
import ArrayUtil from './../../../../../utils/ArrayUtil'
import LocaleUtil from './../../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

type LoadFn = (id?: string | number) => Promise<DistrictResultState>

// 获取国家省市区, 返回数据格式为{ status: 'success' | 'error', message: string, list: [] }
async function loadBaseData({
  countryId,
  loadCountries,
  loadCountryRegions
}: {
  countryId?: string | number
  loadCountries: () => Promise<DistrictResultState>
  loadCountryRegions: LoadFn
}): Promise<DistrictResultState> {
  const countriesData = await loadCountries()

  if (!countryId || countriesData.status === 'error') {
    return countriesData
  }

  const country = ((countriesData.list ?? []) as DistrictMainApiDistrictNode[]).find(
    (item) => item.id === countryId
  )
  if (!country) {
    return {
      status: 'error',
      message: String(
        LocaleUtil.locale(
          'value参数错误, value开始应当为国家',
          'lyrixi_9a2f6cb8fea853e91225b72d770768e6'
        ) ?? ''
      )
    }
  }

  if (Array.isArray(country.children) && country.children.length) {
    return countriesData
  }

  const countryRegionsData = await loadCountryRegions(countryId)
  if (countryRegionsData?.status === 'error') return countryRegionsData
  if (countryRegionsData.list) {
    country.children = countryRegionsData.list as DistrictMainApiDistrictNode[]
  }

  return {
    ...countriesData,
    list: ArrayUtil.updateDeepTreeParentId(
      (countriesData?.list ?? []) as unknown as Parameters<typeof ArrayUtil.updateDeepTreeParentId>[0]
    ) as DistrictMainApiDistrictNode[]
  }
}

export type { DistrictResultState } from '../../../types'
export default loadBaseData
