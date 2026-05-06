import ObjectUtil from './../../../utils/ObjectUtil'
import type { SpaceDatesResult } from './types'

// 在现有时间集合中，增加超过timeSpace的时间
function getSpaceDates(date: Date, dates: Date[], timeSpace: number): SpaceDatesResult {
  if (date instanceof Date === false) {
    return {
      isOverTime: false,
      dates: dates
    }
  }

  if (ObjectUtil.isEmpty(dates)) {
    return {
      isOverTime: true,
      dates: [date]
    }
  }

  const isOverTime = dates.some((existingDate) => {
    return Math.abs(date.getTime() - new Date(existingDate).getTime()) > timeSpace
  })

  if (isOverTime) {
    return {
      isOverTime: true,
      dates: [...dates, date]
    }
  }

  return {
    isOverTime: false,
    dates
  }
}

export default getSpaceDates
