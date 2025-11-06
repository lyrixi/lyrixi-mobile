// 内库使用-start
import MathUtil from '../../../utils/MathUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil } from 'lyrixi-mobile'
测试使用-end */

/**
 * 纠正输入的数字
 * 如果数值不正确，通过截取末位的方式纠正
 * 若截取末位仍不正确则清空
 * @param {string} val - 输入的值
 * @returns {string} - 纠正后的值
 */
function correctInputNumber(val) {
  // 如果是合法数字，直接返回
  if (MathUtil.isNumber(val)) {
    return val
  }

  // 如果不是合法数字，尝试截取末位
  if (val && val.length > 0) {
    const correctedVal = val.slice(0, -1)
    // 检查截取后是否为合法数字
    if (MathUtil.isNumber(correctedVal)) {
      return correctedVal
    }
  }

  // 截取末位仍不正确，则清空
  return ''
}

export default correctInputNumber
