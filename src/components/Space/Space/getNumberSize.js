// 内库使用-start
import MathUtil from '../../../utils/MathUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil } from 'lyrixi-mobile'
测试使用-end */

const getNumberSize = (size, direction) => {
  const sizeValues = Array.isArray(size) ? size : [size, size]
  let sizeValue = sizeValues[0]
  if (direction === 'vertical') {
    sizeValue = sizeValues[1]
  }

  let sizeNumber = MathUtil.extractNumber(sizeValue)

  if (MathUtil.isNumber(sizeNumber)) {
    return sizeNumber
  }

  if (['xxs', 'xs', 's', 'm', 'l', 'xl'].includes(sizeValue)) {
    return `var(--lyrixi-space-${sizeValue})`
  }

  return `var(--lyrixi-space-m)`
}

export default getNumberSize
