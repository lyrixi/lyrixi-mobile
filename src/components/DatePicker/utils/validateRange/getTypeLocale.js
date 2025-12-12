// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function getTypeLocale(type) {
  const typeLocale = {
    year: LocaleUtil.locale('年', 'lyrixi.unit.year'),
    quarter: LocaleUtil.locale('季', 'lyrixi.unit.quarter'),
    month: LocaleUtil.locale('月', 'lyrixi.unit.month'),
    date: LocaleUtil.locale('日', 'lyrixi.unit.date'),
    time: LocaleUtil.locale('分', 'lyrixi.unit.minute'),
    datetime: LocaleUtil.locale('分', 'lyrixi.unit.minute'),
    week: LocaleUtil.locale('周', 'lyrixi.unit.week')
  }
  return typeLocale[type]
}

export default getTypeLocale
