import type { CSSProperties } from 'react'

import type { IconStyleInput } from './types'

// 内库使用-start
import VariablesUtil from './../../utils/VariablesUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { VariablesUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

function getStyle({
  color,
  backgroundColor,
  size,
  radius,
  style,
  className
}: IconStyleInput): { style: CSSProperties; className: string } {
  const isColorClass = !!(color && VariablesUtil.isColorVariable(color))
  const isBackgroundColorClass = !!(
    backgroundColor && VariablesUtil.isColorVariable(backgroundColor)
  )
  const isSizeClass = !!(size && VariablesUtil.isSizeVariable(size))
  const isRadiusClass = !!(radius && VariablesUtil.isSizeVariable(radius))

  const newStyle: CSSProperties = {
    ...(!isColorClass && color ? { color } : {}),
    ...(!isBackgroundColorClass && backgroundColor ? { backgroundColor } : {}),
    ...(!isSizeClass && size ? { width: size, height: size } : {}),
    ...(!isRadiusClass && radius ? { borderRadius: radius } : {}),
    ...style
  }

  const newClassName = (DOMUtil.classNames as (...args: unknown[]) => string)(
    'lyrixi-icon',
    isColorClass && color && `lyrixi-color-${color} lyrixi-border-color-${color}`,
    isBackgroundColorClass && backgroundColor && `lyrixi-bg-${backgroundColor}`,
    isSizeClass && size && `lyrixi-icon-size-${size}`,
    isRadiusClass && radius && `lyrixi-radius-${radius}`,
    className
  )

  return { style: newStyle, className: newClassName }
}

export default getStyle
