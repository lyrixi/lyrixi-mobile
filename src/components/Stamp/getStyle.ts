import type { CSSProperties } from 'react'
import type { StampStyleInput } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export type { StampStyleInput } from './types'

function getStyle({ color, style }: StampStyleInput) {
  // 判断颜色是否在枚举值中
  const isColorClass =
    color !== null && color !== undefined && color !== '' && DOMUtil.variables.colors.includes(color)

  // 构建自定义样式
  const newStyle: CSSProperties = {
    ...(!isColorClass ? {
      color: color,
      // 如果不考虑兼容性问题, 可以使用自定义样式:
      '--lyrixi-stamp-color': color,
    } as CSSProperties : {}),
    ...style
  }

  const newClassName = isColorClass ? `lyrixi-${color}` : undefined

  return { style: newStyle, className: newClassName }
}

export default getStyle
