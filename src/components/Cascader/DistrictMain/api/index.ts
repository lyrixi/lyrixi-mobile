import loadCountries from './loadCountries'
import loadCountryRegions from './loadCountryRegions'
import loadStreets from './loadStreets'
import formatCountryRegions from './formatCountryRegions'

const api = {
  // 获取国家
  loadCountries: async function () {
    let result = await loadCountries()
    if (result?.status === 'success') {
      result.list = result.list.map((node) => {
        node.type = ['country']
        return node
      })
    }
    return result
  },
  /**
   * @description: 获取省市区
   * @param {Number} countryId 国家ID
   * @return {[{id: '100200', name: '江苏省', parentid: '86', ...}]}
   */
  loadCountryRegions: async function (countryId) {
    let result = await loadCountryRegions(countryId)
    if (result?.status === 'success') {
      result.list = formatCountryRegions(result.list, countryId)
      return result
    }
    return result
  },
  /**
   * @description: 获取街道
   * @param {Number} id 区ID
   * @return {{id: '100200300', name: '沙洲街道', parentid: '100200', type: ['street'], isLeaf: true}}
   */
  loadStreets: async function (districtId) {
    let result = await loadStreets(districtId)
    if (result.status === 'success') {
      result.list = result.list.map((item) => {
        return {
          id: item.id,
          name: item.name,
          parentid: districtId,
          type: ['street'],
          isLeaf: true
        }
      })
    }
    return result
  }
}

export default api
