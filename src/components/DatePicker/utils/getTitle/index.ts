import getTitleByType from './getTitleByType'
import type { GetTitleOptions } from './../../types'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

type MultiTab = { value?: Date | null; [k: string]: unknown }

function getTitle(
  value: Date | (Date | null)[] | MultiTab[] | null | undefined,
  optionsOrFormat?: GetTitleOptions | string
): string | ReturnType<typeof getTitleByType> {
  if (typeof optionsOrFormat === 'string') {
    const pattern = optionsOrFormat
    if (Array.isArray(value)) {
      return value
        .map((item) => {
          if (!item) return ''
          if (item instanceof Date) return DateUtil.format(item, pattern)
          if (typeof item === 'object' && item !== null && 'value' in item) {
            const v = (item as MultiTab).value
            return v ? DateUtil.format(v, pattern) : ''
          }
          return ''
        })
        .filter(Boolean)
        .join(' ~ ')
    }
    if (value instanceof Date) {
      return DateUtil.format(value, pattern)
    }
    return String(getTitleByType('date'))
  }

  const { type, separator } = optionsOrFormat ?? {}
  // Multiple Date
  if (Array.isArray(value)) {
    if (value.length && value[0] && typeof value[0] === 'object' && value[0] !== null && 'value' in value[0]) {
      return (value as MultiTab[])
        .map((t) => (t.value ? DateUtil.format(t.value, type ?? 'date') : ''))
        .filter(Boolean)
        .join(separator || ' ~ ')
    }
    return value
      .map((item) => {
        if (item == null) return ''
        return DateUtil.format(item as Date, type ?? 'date')
      })
      .join(separator || ' ~ ')
  }

  // Date
  if (value instanceof Date) {
    let title = DateUtil.format(value, type ?? 'date')
    return title
  }

  return getTitleByType(type)
}

export default getTitle
