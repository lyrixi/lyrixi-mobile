// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

// 判断绘制日期是否在当前显示的页当中
// drawDate: 要判断的日期
// pages: 三页数据数组 [previous, current, next]，pages[1] 是当前页
// 返回: true 表示在当前页，false 表示不在当前页
function isCurrentDate(drawDate, currentPage) {
  if (!currentPage || !Array.isArray(currentPage)) {
    return false
  }

  // 遍历当前页的所有日期，判断是否有日期与 drawDate 在同一月份
  for (let row of currentPage) {
    if (!Array.isArray(row)) continue

    for (let date of row) {
      if (date instanceof Date) {
        // 比较月份，如果月份相同则返回 true
        if (DateUtil.compare(drawDate, date, 'month') === 0) {
          return date.isCurrent
        }
      }
    }
  }

  return false
}

export default isCurrentDate
