import getTitleByType from './getTitleByType'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

function getTitle(value, { type, separator } = {}) {
  // Multiple Date
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        return DateUtil.format(item, type)
      })
      .join(separator || ' ~ ')
  }

  // Date
  if (value instanceof Date) {
    let title = DateUtil.format(value, type)
    return title
  }

  return getTitleByType(type)
}

export default getTitle
