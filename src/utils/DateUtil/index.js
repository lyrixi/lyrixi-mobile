import plugin from './plugin'
// 通用方法
import toDate from './toDate'
import startOrEnd from './startOrEnd'
import add from './add'
import compare from './compare'
import diff from './diff'
import format from './format'
import compareRange from './compareRange'

// 定制方法
import getWeekDates from './getWeekDates'
import previousWeek from './previousWeek'
import nextWeek from './nextWeek'
import getMonthDates from './getMonthDates'
import previousMonth from './previousMonth'
import nextMonth from './nextMonth'
import getDaysInMonth from './getDaysInMonth'
import quarter from './quarter'
// 与add功能重复, 但为了兼容旧版本, 保留

// 时区方法
import betweenTimeZones from './utc/betweenTimeZones.js'
import utcToTimeZone from './utc/utcToTimeZone.js'
import timeZoneToUtc from './utc/timeZoneToUtc.js'
import utcOffset from './utc/utcOffset'
import parseUtcOffset from './utc/parseUtcOffset'
import stringifyUtcOffset from './utc/stringifyUtcOffset'

// 初始化插件, 没有插件无法使用此库
plugin()

// 日期工具类
const dateUtil = {
  plugin: plugin,
  // 通用方法
  // 通用方法: 转为日期格式
  toDate: toDate,
  // 通用方法: 边界时间, 支持: 'year', 'quarter', 'month', 'week', 'date'
  startOrEnd: startOrEnd,
  // 通用方法: 增加日期, 'year', 'quarter', 'month', 'week', 'date'
  add: add,
  // 通用方法: 比较年月日,大于返回1,等于返回0,小于返回-1,错误返回undefined
  compare: compare,
  // 通用方法: 比较两个时间范围，1包含，0相等，-1不包含
  compareRange: compareRange,
  // 通用方法: 日期相差'year|quarter|month|week|day|hour|minute|second'
  diff: diff,
  // 通用方法: 格式化日期
  format: format,

  // 定制方法
  // 定制方法: 获取指定周7天的日期
  getWeekDates: getWeekDates,
  previousWeek: previousWeek,
  nextWeek: nextWeek,
  // 定制方法: 获取指定月42天的日期, 当前月isCurrent为true
  getMonthDates: getMonthDates,
  previousMonth: previousMonth,
  nextMonth: nextMonth,
  // 定制方法: 获取月天数
  getDaysInMonth: getDaysInMonth,
  // 定制方法: 获取当前季度
  quarter: quarter,

  // 时区方法
  // 时区方法: 获取当前时区地址名称
  timeZonePlaceName: () => {
    return typeof Intl?.DateTimeFormat === 'function'
      ? new Intl.DateTimeFormat().resolvedOptions().timeZone
      : ''
  },
  // 时区方法: 获取当前UTC偏移量, 分钟数是国际时区标准, 返回: 总分钟数
  utcOffset: utcOffset,
  // 时区方法: 将 UTC 转为指定时区, 入参: "UTC日期, 时区偏移总分钟数", 返回: "日期"
  utcToTimeZone: (utcDate, offset) => {
    if (utcDate && typeof offset === 'number') {
      return utcToTimeZone(utcDate, offset)
    }
    return utcDate || new Date()
  },
  // 时区方法: 将指定时区时间转为 UTC, 入参: "日期, 时区偏移总分钟数", 返回: "UTC日期"
  timeZoneToUtc: (date, offset) => {
    if (date && typeof offset === 'number') {
      return timeZoneToUtc(date, offset)
    }
    return date || new Date()
  },
  // 时区方法: 在两个时区间转换, 入参: "日期, 原时区偏移总分钟数, 目标时区偏移总分钟数", 返回: "日期"
  timeZoneToTimeZone: (timeZoneDate, fromOffset, toOffset) => {
    if (timeZoneDate && typeof fromOffset === 'number' && typeof toOffset === 'number') {
      return timeZoneToTimeZone(timeZoneDate, fromOffset, toOffset)
    }
    return timeZoneDate || new Date()
  },
  // 时区方法: 解析UTC偏移量, 入参:"UTC+08:00", 返回: 总分钟数
  parseUtcOffset: parseUtcOffset,
  // 时区方法: 时区字符串化，入参: 总分钟数, 返回: "UTC+08:00"
  stringifyUtcOffset: stringifyUtcOffset
}

export default dateUtil
