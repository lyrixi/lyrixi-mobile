import type { CSSProperties } from 'react'

import type { ButtonGetStyleParams } from './getStyle.types'

// 内库使用-start
import VariablesUtil from './../../utils/VariablesUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { VariablesUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

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
}: ButtonGetStyleParams): { style: CSSProperties; className: string } {
  let fontSizeResolved: string | number | undefined
  if (fontSize !== null && fontSize !== undefined && (typeof fontSize === 'string' || typeof fontSize === 'number')) {
    fontSizeResolved = (VariablesUtil.variableSize(fontSize, '') as string) || fontSize
  } else {
    fontSizeResolved = undefined
  }

  let sizeResolved: string | number | readonly string[] | unknown = size
  if (
    sizeResolved !== null &&
    sizeResolved !== undefined &&
    (typeof sizeResolved === 'string' || typeof sizeResolved === 'number')
  ) {
    sizeResolved = (VariablesUtil.variableSize(sizeResolved, '') as string) || sizeResolved
  }

  let radiusResolved: string | number | unknown = radius
  if (radius !== null && radius !== undefined && (typeof radius === 'string' || typeof radius === 'number')) {
    radiusResolved = (VariablesUtil.variableSize(radius, '') as string) || radius
  }

  const isColorClass = VariablesUtil.isColorVariable(color)
  const isBorderColorClass = VariablesUtil.isColorVariable(borderColor)
  const isBackgroundColorClass = VariablesUtil.isColorVariable(backgroundColor)
  const isSizeClass = VariablesUtil.isSizeVariable(sizeResolved)
  const isRadiusClass = VariablesUtil.isSizeVariable(radiusResolved)
  const isFontSizeClass = VariablesUtil.isSizeVariable(fontSizeResolved)

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
