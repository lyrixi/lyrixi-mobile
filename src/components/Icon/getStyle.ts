import type { CSSProperties } from 'react'

import type { IconStyleInput } from './types'
import { IconSizeClasses } from './types/Icon.Size.types'

// 内库使用-start
import VariablesUtil from './../../utils/VariablesUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { VariablesUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

function getStyle({ color, backgroundColor, size, radius, style, className }: IconStyleInput): {
  style: CSSProperties
  className: string
} {
  const colorValue = color ? VariablesUtil.getColorClass(color) : ''
  const backgroundColorValue = backgroundColor ? VariablesUtil.getBgColorValue(backgroundColor) : ''

  const sizeClass =
    typeof size === 'string' && size in IconSizeClasses
      ? IconSizeClasses[size as keyof typeof IconSizeClasses].className
      : ''
  const radiusClass = radius ? VariablesUtil.getRadiusClass(radius) : ''

  const newStyle: CSSProperties = {
    ...(colorValue ? { color: colorValue } : {}),
    ...(backgroundColorValue ? { backgroundColor: backgroundColorValue } : {}),
    ...(!sizeClass && size ? { width: size, height: size } : {}),
    ...(!radiusClass && radius ? { borderRadius: radius } : {}),
    ...style
  }

  const newClassName = (DOMUtil.classNames as (...args: unknown[]) => string)(
    'lyrixi-icon',
    sizeClass,
    radiusClass,
    className
  )

  return { style: newStyle, className: newClassName }
}

export default getStyle
