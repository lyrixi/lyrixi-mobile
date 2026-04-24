// 内库使用-start
import ArrayUtil from './../../../../../utils/ArrayUtil'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil } from 'lyrixi-mobile'
测试使用-end */

interface ApiResult {
  status: 'success' | 'error' | 'empty'
  list?: unknown[]
  message?: string
}

// 加载省市区
async function loadCountryRegionsData({
  countryId,
  loadCountryRegions
}: {
  countryId: string | number
  loadCountryRegions: (id: string | number) => Promise<ApiResult>
}): Promise<ApiResult> {
  const countryRegionsData = await loadCountryRegions(countryId)
  if (countryRegionsData?.status === 'error') return countryRegionsData

  return {
    ...countryRegionsData,
    list: ArrayUtil.updateDeepTreeParentId(
      (countryRegionsData?.list ?? []) as unknown as Parameters<typeof ArrayUtil.updateDeepTreeParentId>[0]
    ) as unknown[]
  }
}

export default loadCountryRegionsData
