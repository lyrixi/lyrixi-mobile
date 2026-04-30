import type { CSSProperties } from 'react'
import type { GetStyleParams } from './types'

// 内库使用-start
import MathUtil from './../../utils/MathUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export type { GetStyleParams } from './types'

export default function getStyle({
  direction,
  block,
  color,
  backgroundColor,
  borderColor,
  border,
  size,
  sizeEqual,
  fontSize,
  radius,
  style,
  className
}: GetStyleParams): { style: CSSProperties; className: string } {
  let fontSizeResolved: string | number | undefined
  if (fontSize !== null && fontSize !== undefined && (typeof fontSize === 'string' || typeof fontSize === 'number')) {
    fontSizeResolved = (MathUtil.variableSize(fontSize, '') as string) || fontSize
  } else {
    fontSizeResolved = undefined
  }

  let sizeResolved: string | number | readonly string[] | unknown = size
  if (
    sizeResolved !== null &&
    sizeResolved !== undefined &&
    (typeof sizeResolved === 'string' || typeof sizeResolved === 'number')
  ) {
    sizeResolved = (MathUtil.variableSize(sizeResolved, '') as string) || sizeResolved
  }

  let radiusResolved: string | number | unknown = radius
  if (radius !== null && radius !== undefined && (typeof radius === 'string' || typeof radius === 'number')) {
    radiusResolved = (MathUtil.variableSize(radius, '') as string) || radius
  }

  const isColorClass = DOMUtil.variables.colors.includes(color as string)
  const isBorderColorClass = DOMUtil.variables.colors.includes(borderColor as string)
  const isBackgroundColorClass = DOMUtil.variables.colors.includes(backgroundColor as string)
  const isSizeClass = DOMUtil.variables.sizes.includes(sizeResolved as string)
  const isRadiusClass = DOMUtil.variables.sizes.includes(radiusResolved as string)
  const isFontSizeClass = DOMUtil.variables.sizes.includes(fontSizeResolved as string)

  const newStyle = {
    ...(!isColorClass && color ? { color } : {}),
    ...(!isBorderColorClass && borderColor ? { borderColor } : {}),
    ...(!isBackgroundColorClass && backgroundColor ? { backgroundColor } : {}),
    ...(!isSizeClass && sizeResolved
      ? { height: sizeResolved as string | number, width: sizeEqual ? sizeResolved : 'auto' }
      : {}),
    ...(!isRadiusClass && radiusResolved ? { borderRadius: radiusResolved as string | number } : {}),
    ...(!isFontSizeClass && fontSizeResolved ? { fontSize: fontSizeResolved } : {}),
    ...style
  } as CSSProperties

  const newClassName = (DOMUtil.classNames as (...args: unknown[]) => string)(
    'lyrixi-button',
    direction === 'vertical' && `lyrixi-flex-vertical`,
    isColorClass && color && `lyrixi-color-${color}`,
    isBorderColorClass && borderColor && `lyrixi-border-color-${borderColor}`,
    isBackgroundColorClass && backgroundColor && `lyrixi-bg-${backgroundColor}`,
    border !== 'none' && `lyrixi-border-width-default`,
    border && `lyrixi-border-style-${border}`,
    block && `lyrixi-button-block`,
    isSizeClass && sizeResolved && `lyrixi-size-${sizeResolved}`,
    isRadiusClass && radiusResolved && `lyrixi-radius-${radiusResolved}`,
    sizeEqual && `lyrixi-size-equal`,
    className
  )

  return { style: newStyle, className: newClassName }
}
