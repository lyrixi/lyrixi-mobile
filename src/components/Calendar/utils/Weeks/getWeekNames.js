// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function getWeekNames(start) {
  if (start === 'Monday') {
    return [
      LocaleUtil.locale('一', 'lyrixi.calendar.week.monday'),
      LocaleUtil.locale('二', 'lyrixi.calendar.week.tuesday'),
      LocaleUtil.locale('三', 'lyrixi.calendar.week.wednesday'),
      LocaleUtil.locale('四', 'lyrixi.calendar.week.thursday'),
      LocaleUtil.locale('五', 'lyrixi.calendar.week.friday'),
      LocaleUtil.locale('六', 'lyrixi.calendar.week.saturday'),
      LocaleUtil.locale('日', 'lyrixi.unit.date')
    ]
  }
  return [
    LocaleUtil.locale('日', 'lyrixi.unit.date'),
    LocaleUtil.locale('一', 'lyrixi.calendar.week.monday'),
    LocaleUtil.locale('二', 'lyrixi.calendar.week.tuesday'),
    LocaleUtil.locale('三', 'lyrixi.calendar.week.wednesday'),
    LocaleUtil.locale('四', 'lyrixi.calendar.week.thursday'),
    LocaleUtil.locale('五', 'lyrixi.calendar.week.friday'),
    LocaleUtil.locale('六', 'lyrixi.calendar.week.saturday')
  ]
}

export default getWeekNames
