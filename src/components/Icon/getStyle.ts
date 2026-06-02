import type { CSSProperties } from 'react'

import type { IconStyleInput } from './types'

// 内库使用-start
import VariablesUtil from './../../utils/VariablesUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { VariablesUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const sizes = {
  xxs: { className: 'lyrixi-size-xxs' },
  xs: { className: 'lyrixi-size-xs' },
  s: { className: 'lyrixi-size-s' },
  m: { className: 'lyrixi-size-m' },
  l: { className: 'lyrixi-size-l' },
  xl: { className: 'lyrixi-size-xl' },
  xxl: { className: 'lyrixi-size-xxl' },
  xxxl: { className: 'lyrixi-size-xxxl' }
}

function getStyle({
  color,
  backgroundColor,
  size,
  radius,
  style,
  className
}: IconStyleInput): { style: CSSProperties; className: string } {
  const colorClass = color ? VariablesUtil.getColorClass(color) : ''
  const backgroundColorClass = backgroundColor ? VariablesUtil.getBgColorClass(backgroundColor) : ''
  const sizeClass =
    typeof size === 'string' && size in sizes ? sizes[size as keyof typeof sizes].className : ''
  const radiusClass = radius ? VariablesUtil.getRadiusClass(radius) : ''

  const newStyle: CSSProperties = {
    ...(!colorClass && color ? { color } : {}),
    ...(!backgroundColorClass && backgroundColor ? { backgroundColor } : {}),
    ...(!sizeClass && size ? { width: size, height: size } : {}),
    ...(!radiusClass && radius ? { borderRadius: radius } : {}),
    ...style
  }

  const newClassName = (DOMUtil.classNames as (...args: unknown[]) => string)(
    'lyrixi-icon',
    colorClass && `${colorClass} lyrixi-border-color-${color}`,
    backgroundColorClass,
    sizeClass,
    radiusClass,
    className
  )

  return { style: newStyle, className: newClassName }
}

export default getStyle
