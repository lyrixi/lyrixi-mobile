import type { CSSProperties } from 'react'

import type { IconStyleInput } from './types'

// 内库使用-start
import MathUtil from './../../utils/MathUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil, DOMUtil } from 'lyrixi-mobile'
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
      ? (MathUtil.variableSize(size, undefined) as string | undefined) || size
      : size
  const resolvedRadius =
    radius !== null && radius !== undefined && radius !== ''
      ? (MathUtil.variableSize(radius, undefined) as string | undefined) || radius
      : radius

  const isColorClass = !!(color && DOMUtil.variables.colors.includes(color))
  const isBackgroundColorClass = !!(
    backgroundColor && DOMUtil.variables.colors.includes(backgroundColor)
  )
  const isSizeClass = !!(resolvedSize && DOMUtil.variables.sizes.includes(resolvedSize))
  const isRadiusClass = !!(resolvedRadius && DOMUtil.variables.sizes.includes(resolvedRadius))

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
