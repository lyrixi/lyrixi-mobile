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
  const resolvedSize =
    size !== null && size !== undefined && size !== ''
      ? (VariablesUtil.variableSize(size, undefined) as string | undefined) || size
      : size
  const resolvedRadius =
    radius !== null && radius !== undefined && radius !== ''
      ? (VariablesUtil.variableSize(radius, undefined) as string | undefined) || radius
      : radius

  const isColorClass = !!(color && VariablesUtil.isColorVariable(color))
  const isBackgroundColorClass = !!(
    backgroundColor && VariablesUtil.isColorVariable(backgroundColor)
  )
  const isSizeClass = !!(resolvedSize && VariablesUtil.isSizeVariable(resolvedSize))
  const isRadiusClass = !!(resolvedRadius && VariablesUtil.isSizeVariable(resolvedRadius))

  const newStyle: CSSProperties = {
    ...(!isColorClass && color ? { color } : {}),
    ...(!isBackgroundColorClass && backgroundColor ? { backgroundColor } : {}),
    ...(!isSizeClass && resolvedSize ? { width: resolvedSize, height: resolvedSize } : {}),
    ...(!isRadiusClass && resolvedRadius ? { borderRadius: resolvedRadius } : {}),
    ...style
  }

  const newClassName = (DOMUtil.classNames as (...args: unknown[]) => string)(
    'lyrixi-icon',
    isColorClass && color && `lyrixi-color-${color} lyrixi-border-color-${color}`,
    isBackgroundColorClass && backgroundColor && `lyrixi-bg-${backgroundColor}`,
    isSizeClass && resolvedSize && `lyrixi-icon-size-${resolvedSize}`,
    isRadiusClass && resolvedRadius && `lyrixi-radius-${resolvedRadius}`,
    className
  )

  return { style: newStyle, className: newClassName }
}

export default getStyle
