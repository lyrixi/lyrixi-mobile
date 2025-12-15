// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

// 获取日期所在行
function getDateRowIndex(currentDate, currentPage) {
  // 遍历当前页的所有日期，判断是否有日期与 drawDate 在同一月份
  for (let rowIndex = 0; rowIndex < currentPage.length; rowIndex++) {
    let row = currentPage[rowIndex]
    if (!Array.isArray(row)) continue

    for (let date of row) {
      if (date instanceof Date) {
        // 比较月份，如果月份相同则返回 true
        if (DateUtil.compare(currentDate, date) === 0) {
          return rowIndex
        }
      }
    }
  }

  return 0
}

export default getDateRowIndex
