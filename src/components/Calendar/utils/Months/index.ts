import getDateRowIndex from './getDateRowIndex'
import paginateMonths from './paginateMonths'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

// 获得上月日历
function getPrevMonthData(currentDate, weekStart) {
  let date = DateUtil.previousMonth(new Date(currentDate))
  return DateUtil.getMonthDates(date, weekStart)
}
// 获得下月日历
function getNextMonthData(currentDate, weekStart) {
  let date = DateUtil.nextMonth(new Date(currentDate))
  return DateUtil.getMonthDates(date, weekStart)
}

// 获取三个月的日历数据, 每个月渲染42格, 共126格
function getMonths(currentDate, { weekStart }) {
  if (!currentDate) {
    return null
  }

  // 获取三个月的日历数据
  let data = {
    previous: getPrevMonthData(currentDate, weekStart),
    current: DateUtil.getMonthDates(currentDate, weekStart),
    next: getNextMonthData(currentDate, weekStart)
  }

  return data
}

const Months = {
  previousMonth: DateUtil.previousMonth,
  nextMonth: DateUtil.nextMonth,
  // 当前日期在日历中的行数, 用于周视图替换同行上下周数据
  getDateRowIndex,
  // 当前日期一月的日期
  getMonthDates: DateUtil.getMonthDates,
  // 获取上月,本月与下月数据集合
  getMonths,
  // 对months进行分页[[row, row, ...], [row, row, ...], [row, row, ...]]
  paginateMonths
}

export default Months
