import type { CSSProperties } from 'react'

import type { ButtonGetStyleParams } from './getStyle.types'
import getVariantClassName from './getVariantClassName'

// 内库使用-start
import VariablesUtil from './../../../utils/VariablesUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { VariablesUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const sizes = {
  xs: { className: 'lyrixi-size-xs' },
  s: { className: 'lyrixi-size-s' },
  m: { className: 'lyrixi-size-m' },
  l: { className: 'lyrixi-size-l' },
  xl: { className: 'lyrixi-size-xl' },
  xxl: { className: 'lyrixi-size-xxl' }
}

export default function getStyle({
  direction,
  block,
  color,
  variant,
  size,
  sizeEqual,
  fontSize,
  radius,
  style,
  className
}: ButtonGetStyleParams): { style: CSSProperties; className: string } {
  const sizeClass =
    typeof size === 'string' && size in sizes ? sizes[size as keyof typeof sizes].className : ''
  const radiusClass =
    typeof radius === 'string' || typeof radius === 'number'
      ? VariablesUtil.getRadiusClass(String(radius))
      : ''
  const fontSizeClass =
    typeof fontSize === 'string' || typeof fontSize === 'number'
      ? VariablesUtil.getFontSizeClass(String(fontSize))
      : ''

  const newStyle = {
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
    getVariantClassName(variant, color),
    block && `lyrixi-button-block`,
    sizeClass,
    radiusClass,
    fontSizeClass,
    sizeEqual && `lyrixi-size-equal`,
    className
  )

  return { style: newStyle, className: newClassName }
}
