import dayjs from 'dayjs'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DateUtil from './../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, DateUtil } from 'lyrixi-mobile'
测试使用-end */

// 默认日期区间
function getDefaultRanges() {
  return {
    [LocaleUtil.locale('今日', 'lyrixi.today')]: [new Date(), new Date()],
    [LocaleUtil.locale('昨日', 'lyrixi.yesterday')]: [
      dayjs().subtract(1, 'day').toDate(),
      dayjs().subtract(1, 'day').toDate()
    ],

    [LocaleUtil.locale('近{0}日', 'lyrixi.last.days', ['7'])]: [
      dayjs().subtract(6, 'day').toDate(),
      new Date()
    ],

    [LocaleUtil.locale('近{0}日', 'lyrixi.last.days', ['30'])]: [
      dayjs().subtract(29, 'day').toDate(),
      new Date()
    ],

    [LocaleUtil.locale('近{0}日', 'lyrixi.last.days', ['90'])]: [
      dayjs().subtract(89, 'day').toDate(),
      new Date()
    ],

    [LocaleUtil.locale('本周', 'lyrixi.this.week')]: [
      DateUtil.startOrEnd(new Date(), 'week', 'start'),
      new Date()
    ],
    [LocaleUtil.locale('本月', 'lyrixi.this.month')]: [
      DateUtil.startOrEnd(new Date(), 'month', 'start'),
      new Date()
    ],
    [LocaleUtil.locale('上月', 'lyrixi.last.month')]: [
      dayjs().date(1).subtract(1, 'month').toDate(),
      dayjs().date(1).subtract(1, 'day').toDate()
    ],

    [LocaleUtil.locale('本季度', 'lyrixi.this.quarter')]: [
      DateUtil.startOrEnd(new Date(), 'quarter', 'start'),
      new Date()
    ],

    [LocaleUtil.locale('今年', 'lyrixi.this.year')]: [
      DateUtil.startOrEnd(new Date(), 'year', 'start'),
      DateUtil.startOrEnd(new Date(), 'year', 'end')
    ],

    [LocaleUtil.locale('自定义', 'lyrixi.custom')]: 0
  }
}

export default getDefaultRanges
