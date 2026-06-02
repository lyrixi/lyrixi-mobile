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

  const colorClass =
    color !== null && color !== undefined && color !== '' ? VariablesUtil.getColorClass(color) : ''
  const borderColorClass =
    borderColor !== null && borderColor !== undefined && borderColor !== ''
      ? VariablesUtil.getBorderColorClass(borderColor)
      : ''
  const backgroundColorClass =
    backgroundColor !== null && backgroundColor !== undefined && backgroundColor !== ''
      ? VariablesUtil.getBgColorClass(backgroundColor)
      : ''
  const sizeClass = sizeResolved ? VariablesUtil.getHeightClass(sizeResolved) : ''
  const radiusClass = radiusResolved ? VariablesUtil.getRadiusClass(radiusResolved) : ''
  const fontSizeClass = fontSizeResolved ? VariablesUtil.getFontSizeClass(fontSizeResolved) : ''

  const newStyle = {
    ...(!colorClass && color ? { color } : {}),
    ...(!borderColorClass && borderColor ? { borderColor } : {}),
    ...(!backgroundColorClass && backgroundColor ? { backgroundColor } : {}),
    ...(!sizeClass && sizeResolved
      ? { height: sizeResolved as string | number, width: sizeEqual ? sizeResolved : 'auto' }
      : {}),
    ...(!radiusClass && radiusResolved ? { borderRadius: radiusResolved as string | number } : {}),
    ...(!fontSizeClass && fontSizeResolved ? { fontSize: fontSizeResolved } : {}),
    ...style
  } as CSSProperties

  const newClassName = (DOMUtil.classNames as (...args: unknown[]) => string)(
    'lyrixi-button',
    direction === 'vertical' && `lyrixi-flex-vertical`,
    colorClass,
    borderColorClass,
    backgroundColorClass,
    border !== 'none' && `lyrixi-border-width-default`,
    border && `lyrixi-border-style-${border}`,
    block && `lyrixi-button-block`,
    sizeClass,
    radiusClass,
    sizeEqual && `lyrixi-size-equal`,
    className
  )

  return { style: newStyle, className: newClassName }
}
