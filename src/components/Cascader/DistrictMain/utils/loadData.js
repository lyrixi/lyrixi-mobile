// 内库使用-start
import Loading from './../../../Loading'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

import loadCountryRegionsData from './loadBaseData/loadCountryRegionsData'

// 点击末级加载省市区或街道数据
async function loadData(tabs, { loadCountryRegions, loadStreets }) {
  // lastTab为当前选中项
  let lastTab = tabs?.[tabs?.length - 1]

  // 若点击国家, 则加载省市区
  if (lastTab?.type?.includes('country')) {
    Loading.show()
    let countryRegionsData = await loadCountryRegionsData({
      countryId: lastTab.id,
      loadCountryRegions
    })
    Loading.hide()
    return countryRegionsData
  }

  // 加载街道
  Loading.show()
  let streetsData = await loadStreets(lastTab.id, { value: tabs })
  Loading.hide()
  return streetsData
}

export default loadData
