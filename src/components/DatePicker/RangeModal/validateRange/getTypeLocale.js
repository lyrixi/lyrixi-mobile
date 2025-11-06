// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function getTypeLocale(type) {
  const typeLocale = {
    year: LocaleUtil.locale('年', 'lyrixi_unit_year'),
    quarter: LocaleUtil.locale('季', 'lyrixi_unit_quarter'),
    month: LocaleUtil.locale('月', 'lyrixi_unit_month'),
    date: LocaleUtil.locale('日', 'lyrixi_unit_date'),
    time: LocaleUtil.locale('分', 'lyrixi_unit_minute'),
    datetime: LocaleUtil.locale('分', 'lyrixi_unit_minute'),
    week: LocaleUtil.locale('周', 'lyrixi_unit_week')
  }
  return typeLocale[type]
}

export default getTypeLocale
