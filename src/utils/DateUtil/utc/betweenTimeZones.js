// 在两个时区间转换
function betweenTimeZones(utcDate, fromOffset, toOffset) {
  if (!(utcDate instanceof Date) || isNaN(utcDate)) {
    return null
  }

  if (typeof fromOffset !== 'number' || typeof toOffset !== 'number') {
    return utcDate
  }

  const offsetDiff = toOffset - fromOffset

  const result = new Date(utcDate.getTime())
  result.setMinutes(result.getMinutes() + offsetDiff)

  return result
}

export default betweenTimeZones
