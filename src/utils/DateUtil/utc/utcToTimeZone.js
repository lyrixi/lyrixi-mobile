// 将 UTC 转为指定时区
function utcToTimeZone(utcDate, offset) {
  // 检查参数
  if (!(utcDate instanceof Date) || isNaN(utcDate)) {
    return null
  }

  if (typeof offset !== 'number') {
    return utcDate
  }

  // 复制原 date，避免修改原始对象
  const result = new Date(utcDate.getTime())

  // 调整时间
  result.setMinutes(result.getMinutes() + offset)

  return result
}

export default utcToTimeZone
