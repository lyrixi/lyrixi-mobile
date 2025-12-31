import _ from 'lodash'
import formatList from './../../utils/formatList'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 获取国家省市区
async function getList(currentValue, { startType, loadCountries, loadCountryRegions }) {
  if (startType === 'country') {
    return await getCountryStartList(currentValue, {
      loadCountries,
      loadCountryRegions
    })
  } else {
    return await getProvinceStartList(currentValue, { loadCountryRegions })
  }
}

// 起始类型: 国家
async function getCountryStartList(currentValue, { loadCountries, loadCountryRegions }) {
  let countries = await loadCountries()
  if (typeof countries === 'string') return countries
  if (_.isEmpty(countries)) return LocaleUtil.locale('国家数据为空')

  // 若无选中国家, 则直接返回
  const currentCountryId = currentValue?.[0]?.id
  if (!currentCountryId) return countries

  // 若选中国家, 则补齐其省市区
  const country = countries.find((item) => item.id === currentCountryId)
  if (!country) {
    return LocaleUtil.locale('value参数错误, value开始应当为国家')
  }
  if (Array.isArray(country.children) && country.children.length) {
    return countries
  }

  // 补齐该国家的省市区
  const province = await loadCountryRegions(country.id)
  if (typeof province === 'string') return province
  country.children = province
  return formatList(countries)
}

// 起始类型: 省
async function getProvinceStartList(currentValue, { countryId = '86', loadCountryRegions }) {
  // 省作为起点：有列表直接用；没有则加载国家(86)下的省
  const provinces = await loadCountryRegions(countryId)
  if (typeof provinces === 'string') return formatList(provinces)
  if (_.isEmpty(provinces)) return LocaleUtil.locale('省市区数据为空')

  // 若无选中省, 则直接返回
  const currentProvinceId = currentValue?.[0]?.id
  if (!currentProvinceId) return provinces

  // 若选中国家, 则补齐其省市区
  const province = provinces.find((item) => item.id === currentProvinceId)
  if (!province) {
    return LocaleUtil.locale('value参数错误, value开始应当为省')
  }

  return formatList(provinces)
}

export default getList
