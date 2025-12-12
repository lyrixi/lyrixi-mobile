// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function getTitleByType(type) {
  if (type === 'year') {
    return LocaleUtil.locale('选择年', 'lyrixi.dateModal.title.year')
  }
  if (type === 'quarter') {
    return LocaleUtil.locale('选择季', 'lyrixi.dateModal.title.quarter')
  }
  if (type === 'month') {
    return LocaleUtil.locale('选择年月', 'lyrixi.dateModal.title.month')
  }
  if (type === 'date') {
    return LocaleUtil.locale('选择日期', 'lyrixi.dateModal.title.date')
  }
  if (type === 'time') {
    return LocaleUtil.locale('选择时间', 'lyrixi.dateModal.title.time')
  }
  if (type === 'datetime') {
    return LocaleUtil.locale('选择日期时间', 'lyrixi.dateModal.title.datetime')
  }
  if (type === 'week') {
    return LocaleUtil.locale('选择周', 'lyrixi.dateModal.title.week')
  }
  return LocaleUtil.locale('选择日期', 'lyrixi.dateModal.title.date')
}

export default getTitleByType
