// 矫正最大长度与小数位
function maxLengthFormatter(val: string | number, { maxLength }: { maxLength?: number }): string {
  let strVal = typeof val === 'number' ? String(val) : val

  // 最大长度
  if (maxLength && strVal && strVal.length > maxLength) {
    // eslint-disable-next-line
    strVal = strVal.substring(0, maxLength)
  }
  return strVal
}

export default maxLengthFormatter
