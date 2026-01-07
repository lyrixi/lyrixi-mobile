import _ from 'lodash'

// 起始类型: 国家
async function loadCountriesData({ loadCountries }) {
  let countriesData = await loadCountries()
  return countriesData
}

export default loadCountriesData
