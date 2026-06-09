// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

import type { ButtonVariant } from './../types/Button.Variant.types'
import type { ButtonColor } from './../types/Button.Color.types'

export default function getVariantClassName(variant: ButtonVariant, color: ButtonColor): string {
  if (color === 'default') {
    if (variant === 'solid')
      return DOMUtil.classNames(
        'lyrixi-color-default',
        'lyrixi-border-color-default',
        'lyrixi-bg-white',
        'lyrixi-border-width-default',
        'lyrixi-border-style-solid'
      )
    if (variant === 'text')
      return DOMUtil.classNames(
        'lyrixi-color-default',
        'lyrixi-border-color-default',
        'lyrixi-bg-transparent'
      )

    if (variant === 'outlined')
      return DOMUtil.classNames(
        'lyrixi-color-default',
        'lyrixi-border-color-default',
        'lyrixi-bg-transparent',
        'lyrixi-border-width-default',
        'lyrixi-border-style-solid'
      )
    if (variant === 'filled')
      return DOMUtil.classNames(
        'lyrixi-color-secondary',
        'lyrixi-border-color-default',
        'lyrixi-bg-default'
      )
    if (variant === 'dashed')
      return DOMUtil.classNames(
        'lyrixi-color-default',
        'lyrixi-border-color-default',
        'lyrixi-bg-transparent',
        'lyrixi-border-width-default',
        'lyrixi-border-style-dashed'
      )

    return DOMUtil.classNames(
      'lyrixi-color-default',
      'lyrixi-border-color-default',
      'lyrixi-bg-white',
      'lyrixi-border-width-default',
      'lyrixi-border-style-solid'
    )
  }

  if (variant === 'solid')
    return DOMUtil.classNames(
      'lyrixi-color-white',
      `lyrixi-border-color-${color}`,
      `lyrixi-bg-${color}`,
      'lyrixi-border-width-default',
      'lyrixi-border-style-solid'
    )
  if (variant === 'filled')
    return DOMUtil.classNames(
      `lyrixi-color-${color}`,
      `lyrixi-border-color-${color}`,
      `lyrixi-bg-${color}-lighten`
    )
  if (variant === 'text')
    return DOMUtil.classNames(
      `lyrixi-color-${color}`,
      `lyrixi-border-color-${color}`,
      'lyrixi-bg-transparent'
    )
  if (variant === 'outlined')
    return DOMUtil.classNames(
      `lyrixi-color-${color}`,
      `lyrixi-border-color-${color}`,
      'lyrixi-bg-transparent',
      'lyrixi-border-width-default',
      'lyrixi-border-style-solid'
    )
  if (variant === 'dashed')
    return DOMUtil.classNames(
      `lyrixi-color-${color}`,
      `lyrixi-border-color-${color}`,
      'lyrixi-bg-transparent',
      'lyrixi-border-width-default',
      'lyrixi-border-style-dashed'
    )
  return DOMUtil.classNames(
    `lyrixi-color-${color}`,
    `lyrixi-border-color-${color}`,
    'lyrixi-bg-transparent'
  )
}
