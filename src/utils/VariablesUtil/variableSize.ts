// 内库使用-start
import MathUtil from './../MathUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil } from 'lyrixi-mobile'
测试使用-end */

import variables from './variables'

const variableTypeKeys = ['font-size', 'font-weight', 'radius', 'height'] as const
type VariableType = (typeof variableTypeKeys)[number]

function isDesignToken(size: unknown, type: VariableType): boolean {
  const value = String(size)
  switch (type) {
    case 'font-size':
      return variables.fontSizes.includes(value)
    case 'font-weight':
      return variables.fontWeights.includes(value)
    case 'radius':
      return variables.radius.includes(value)
    case 'height':
      return variables.heights.includes(value)
    default:
      return false
  }
}

/**
 * 获取尺寸变量, 与variables.less中的变量一致
 * @param {Number|String} size
 * @param {String} type 'font-size' | 'font-weight' | 'radius' | 'height', 不传则不使用变量
 * @returns {String} 间距大小
 */
function variableSize(size: number | string, type?: string) {
  // 如果是数字，则直接返回
  let sizeNumber = MathUtil.extractNumber(size)
  if (MathUtil.isNumber(sizeNumber)) {
    return MathUtil.isNumber(size) ? `${size}px` : size
  }

  // 如果是设计 token, 则返回变量
  if (type && variableTypeKeys.includes(type as VariableType) && isDesignToken(size, type as VariableType)) {
    return `var(--lyrixi-${type}-${String(size)})`
  }

  // 默认返回空字符串
  return ''
}

export default variableSize
