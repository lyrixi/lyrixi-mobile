// 内库使用-start
import MathUtil from './../MathUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil } from 'lyrixi-mobile'
测试使用-end */

import isSizeVariable from './isSizeVariable'

/**
 * 获取尺寸变量, 与variables.less中的变量一致
 * @param {Number|String} size
 * @param {String} type 'space' | 'font-size' | 'font-weight' | 'radius', 不传则不使用变量
 * @returns {String} 间距大小
 */
function variableSize(size: number | string, type?: string) {
  // 如果是数字，则直接返回
  let sizeNumber = MathUtil.extractNumber(size)
  if (MathUtil.isNumber(sizeNumber)) {
    return MathUtil.isNumber(size) ? `${size}px` : size
  }

  // 如果是间距变量, 则返回变量
  if (type && isSizeVariable(size)) {
    return `var(--lyrixi-${type}-${String(size)})`
  }

  // 默认返回空字符串
  return ''
}

export default variableSize
