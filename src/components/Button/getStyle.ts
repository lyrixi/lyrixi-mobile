// 内库使用-start
import MathUtil from './../../utils/MathUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

import type { CSSProperties } from 'react'

export interface GetStyleParams {
  direction?: string
  block?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
  size?: string | number | readonly string[] | unknown
  sizeEqual?: boolean
  fontSize?: string | number | unknown
  radius?: string | number | unknown
  style?: CSSProperties
  className?: string
}

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
  let fontSizeResolved: string | number | undefined = fontSize as string | number | undefined
  fontSizeResolved = (MathUtil.variableSize(fontSizeResolved, undefined) as string | number | undefined) || fontSizeResolved
  let sizeResolved: string | number | readonly string[] | unknown = size
  sizeResolved = MathUtil.variableSize(sizeResolved, undefined) || sizeResolved
  let radiusResolved: string | number | unknown = radius
  radiusResolved = MathUtil.variableSize(radiusResolved, undefined) || radiusResolved

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
