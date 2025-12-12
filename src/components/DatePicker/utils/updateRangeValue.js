// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

// 边界处理: 00:00:00到23:59:59; 开始日期小于结束日期, 则交换位置
function updateRangeValue(rangeDates = [], type) {
  if (!Array.isArray(rangeDates) || rangeDates.length !== 2) {
    return null
  }
  const [startDate, endDate] = rangeDates
  if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
    return rangeDates
  }

  const adjustStart = (date) => {
    return DateUtil.startOrEnd(date, type, 'start')
  }
  const adjustEnd = (date) => {
    return DateUtil.startOrEnd(date, type, 'end')
  }

  // endDate greater than startDate, transposition
  if (
    DateUtil.startOrEnd(endDate, type).getTime() < DateUtil.startOrEnd(startDate, type).getTime()
  ) {
    return [adjustEnd(startDate), adjustStart(endDate)]
  }

  // startDate greater than endDate
  return [adjustStart(startDate), adjustEnd(endDate)]
}

export default updateRangeValue
