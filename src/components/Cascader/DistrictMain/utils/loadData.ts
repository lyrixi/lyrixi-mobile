// 内库使用-start
import Loading from './../../../Loading'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

import loadCountryRegionsData from './loadBaseData/loadCountryRegionsData'

interface DistrictTab {
  id: string | number
  type?: string[]
  [key: string]: unknown
}

interface ApiResult {
  status: 'success' | 'error' | 'empty'
  list?: unknown[]
  message?: string
}

type LoadCountryRegionsFn = (id: string | number) => Promise<ApiResult>
type LoadStreetsFn = (id: string | number, ctx?: { value?: DistrictTab[] }) => Promise<ApiResult>

// 点击末级加载省市区或街道数据
async function loadData(
  tabs: DistrictTab[],
  {
    loadCountryRegions,
    loadStreets
  }: {
    loadCountryRegions: LoadCountryRegionsFn
    loadStreets: LoadStreetsFn
  }
): Promise<ApiResult> {
  const lastTab = tabs?.[tabs?.length - 1]

  if (lastTab?.type?.includes('country')) {
    Loading.show()
    const countryRegionsData = await loadCountryRegionsData({
      countryId: lastTab.id,
      loadCountryRegions
    })
    Loading.hide()
    return countryRegionsData
  }

  Loading.show()
  const streetsData = await loadStreets(lastTab.id, { value: tabs })
  Loading.hide()
  return streetsData
}

export default loadData
