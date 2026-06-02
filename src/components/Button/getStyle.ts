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
  const sizeClass =
    size !== null && size !== undefined && size !== '' ? VariablesUtil.getHeightClass(size) : ''
  const radiusClass =
    radius !== null && radius !== undefined && radius !== ''
      ? VariablesUtil.getRadiusClass(radius)
      : ''
  const fontSizeClass =
    fontSize !== null && fontSize !== undefined && fontSize !== ''
      ? VariablesUtil.getFontSizeClass(fontSize)
      : ''

  const newStyle = {
    ...(!colorClass && color ? { color } : {}),
    ...(!borderColorClass && borderColor ? { borderColor } : {}),
    ...(!backgroundColorClass && backgroundColor ? { backgroundColor } : {}),
    ...(!sizeClass && size
      ? { height: size as string | number, width: sizeEqual ? (size as string | number) : 'auto' }
      : {}),
    ...(!radiusClass && radius ? { borderRadius: radius as string | number } : {}),
    ...(!fontSizeClass && fontSize ? { fontSize: fontSize as string | number } : {}),
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
    fontSizeClass,
    sizeEqual && `lyrixi-size-equal`,
    className
  )

  return { style: newStyle, className: newClassName }
}
