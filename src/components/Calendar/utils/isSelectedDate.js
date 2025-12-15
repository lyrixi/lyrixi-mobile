// 内库使用-start
import DateUtil from '../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

// 当前日期是否选中, 空:未选中 数组:[selected:选中 selected-start:开始 selected-end:结束]
function isSelectedDate(date, selected, selectionMode) {
  // range mode
  if (Array.isArray(selected)) {
    if (selectionMode === 'range' && selected.length === 2) {
      let isSelected = []
      // Date is between startDate and endDate, add selected class
      if (DateUtil.compare(date, selected[0]) >= 0 && DateUtil.compare(date, selected[1]) <= 0) {
        isSelected.push('lyrixi-selected')
      }
      if (DateUtil.compare(date, selected[0]) === 0) {
        isSelected.push('lyrixi-selected-start')
      }
      if (DateUtil.compare(date, selected[1]) === 0) {
        isSelected.push('lyrixi-selected-end')
      }
      if (isSelected.length) {
        return isSelected
      }
      return null
    }
    if (selectionMode === 'multiple' && selected.includes(date)) {
      return ['lyrixi-selected']
    }
    return null
  }

  // date mode
  if (selected instanceof Date === false) {
    return null
  }

  if (DateUtil.compare(date, selected) === 0) {
    return ['lyrixi-selected']
  }

  return null
}

export default isSelectedDate
