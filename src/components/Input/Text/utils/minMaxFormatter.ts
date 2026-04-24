// 矫正最大值和最小值
function minMaxFormatter(val: string | number, { min, max }: { min?: number; max?: number }): string | number {
  if (val && !isNaN(Number(val)) && val !== '') {
    if (typeof max === 'number') {
      // eslint-disable-next-line
      if (Number(val) > max) val = max
    }
    if (typeof min === 'number') {
      // eslint-disable-next-line
      if (Number(val) < min) val = min
    }
  }
  return val
}

export default minMaxFormatter
