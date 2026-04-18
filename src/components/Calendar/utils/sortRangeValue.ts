// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

// Range value, sort two date
function sortRangeValue(newDate, value) {
  // No value, click date, start date and end date is same
  if (!Array.isArray(value) || value.length !== 2) {
    return [newDate, newDate]
  }

  // Just has start date, select end date
  if (DateUtil.compare(value[0], value[1]) === 0) {
    let newValue = [value[0], newDate]
    if (DateUtil.compare(value[0], newDate) === -1) {
      newValue = [newDate, value[0]]
    }
    return newValue
  }

  // Reselect start date
  return [newDate, newDate]
}

export default sortRangeValue
