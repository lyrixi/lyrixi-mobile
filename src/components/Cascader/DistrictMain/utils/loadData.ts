
import type { DistrictMainLoadDataApiResult, DistrictMainLoadDataTab } from '../../types'

// 内库使用-start
import Loading from './../../../Loading'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

import loadCountryRegionsData from './loadBaseData/loadCountryRegionsData'

type LoadCountryRegionsFn = (id: string | number) => Promise<DistrictMainLoadDataApiResult>
type LoadStreetsFn = (id: string | number, ctx?: { value?: DistrictMainLoadDataTab[] }) => Promise<DistrictMainLoadDataApiResult>

// 点击末级加载省市区或街道数据
async function loadData(
  tabs: DistrictMainLoadDataTab[],
  {
    loadCountryRegions,
    loadStreets
  }: {
    loadCountryRegions: LoadCountryRegionsFn
    loadStreets: LoadStreetsFn
  }
): Promise<DistrictMainLoadDataApiResult> {
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
