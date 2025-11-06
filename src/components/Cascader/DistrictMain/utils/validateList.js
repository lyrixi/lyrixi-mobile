import findDistrictLeafIndex from './findDistrictLeafIndex'

// 校验列表数据是否合法, 判断国家省市区数据是否完整
async function validateList(value, { list, startType }) {
  if (!Array.isArray(list) || !list.length) {
    return false
  }

  // 起始类型: 国家, 加载国家内的省市区数据
  if (startType === 'country') {
    let currentCountryId = value?.[0]?.id

    // 未选国家, 则正确
    if (!currentCountryId) {
      return true
    }

    // 已选国家
    let country = null
    for (let item of list) {
      if (item.id === currentCountryId) {
        country = item
        break
      }
    }

    // 国家为末级（按leafType判断），则不需要省市区
    if (typeof findDistrictLeafIndex(country) === 'number') {
      return true
    }

    // 国家非末级节点, 则需要省市区
    if (!country?.children) {
      return false
    }

    return true
  }

  // 起始类型: 省, 直接返回列表即可
  return true
}

export default validateList
