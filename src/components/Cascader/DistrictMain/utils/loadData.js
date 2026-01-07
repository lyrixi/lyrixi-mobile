import loadCountryRegionsData from './loadBaseData/loadCountryRegionsData'

// 点击末级加载省市区或街道数据
async function loadData(tabs, { loadCountryRegions, loadStreets }) {
  // lastTab为当前选中项
  let lastTabId = tabs?.[tabs?.length - 1]?.id

  // 若点击国家, 则加载省市区
  if (lastTab?.type?.includes('country')) {
    Loading.show()
    let countryRegionsData = await loadCountryRegionsData({
      countryId: lastTabId,
      loadCountryRegions
    })
    Loading.hide()
    return countryRegionsData
  }

  // 加载街道
  Loading.show()
  let streetsData = await loadStreets(lastTabId, { value: tabs })
  Loading.hide()
  return streetsData
}

export default loadData
