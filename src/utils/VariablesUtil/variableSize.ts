// 内库使用-start
import MathUtil from './../MathUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil } from 'lyrixi-mobile'
测试使用-end */

import variables from './variables'
import type { DesignTokenMap } from './variables'

const variableTypeKeys = ['font-size', 'font-weight', 'radius', 'height'] as const
type VariableType = (typeof variableTypeKeys)[number]

const tokenMapByType: Record<VariableType, DesignTokenMap> = {
  'font-size': variables.fontSizes,
  'font-weight': variables.fontWeights,
  radius: variables.radius,
  height: variables.heights
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
  if (type && variableTypeKeys.includes(type as VariableType)) {
    const map = tokenMapByType[type as VariableType]
    if (variables.hasDesignToken(size, map)) {
      return variables.getValue(size, map)
    }
  }

  // 默认返回空字符串
  return ''
}

export default variableSize
