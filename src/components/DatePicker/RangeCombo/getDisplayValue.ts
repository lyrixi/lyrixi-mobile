// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

// 显示名称(共用方法)
function getDisplayValue({ value, type, rangeId, ranges, separator }) {
  if (!Array.isArray(value) || value.length !== 2) {
    return ''
  }

  // 显示别名
  if (rangeId) {
    // 正确的别名
    if (Array.isArray(ranges[rangeId])) {
      return rangeId
    }

    // 自定义别名
    return `${DateUtil.format(value[0], type)}${separator || ' ~ '}${DateUtil.format(
      value[1],
      type
    )}`
  }

  // 显示自定义日期
  return `${DateUtil.format(value[0], type)}${separator || ' ~ '}${DateUtil.format(value[1], type)}`
}

export default getDisplayValue
