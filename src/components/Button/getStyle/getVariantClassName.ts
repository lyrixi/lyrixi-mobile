// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

import { ButtonColor } from '../types/Button.Color.types'
import { ButtonVariant } from '../types/Button.Variant.types'

export default function getVariantClassName(
  variant: `${ButtonVariant}` = ButtonVariant.solid,
  color: `${ButtonColor}` = ButtonColor.default
): string {
  if (color === ButtonColor.default) {
    switch (variant) {
      case ButtonVariant.solid:
        return DOMUtil.classNames(
          'lyrixi-color-default',
          'lyrixi-border-color-default',
          'lyrixi-bg-white',
          'lyrixi-border-width-default',
          'lyrixi-border-style-solid'
        )
      case ButtonVariant.text:
        return DOMUtil.classNames(
          'lyrixi-color-default',
          'lyrixi-border-color-default',
          'lyrixi-bg-transparent'
        )

      case ButtonVariant.outlined:
        return DOMUtil.classNames(
          'lyrixi-color-default',
          'lyrixi-border-color-default',
          'lyrixi-bg-transparent',
          'lyrixi-border-width-default',
          'lyrixi-border-style-solid'
        )
      case ButtonVariant.filled:
        return DOMUtil.classNames(
          'lyrixi-color-default',
          'lyrixi-border-color-default',
          'lyrixi-bg-default'
        )
      case ButtonVariant.dashed:
        return DOMUtil.classNames(
          'lyrixi-color-default',
          'lyrixi-border-color-default',
          'lyrixi-bg-white',
          'lyrixi-border-width-default',
          'lyrixi-border-style-dashed'
        )
      default:
        return DOMUtil.classNames(
          'lyrixi-color-default',
          'lyrixi-border-color-default',
          'lyrixi-bg-white',
          'lyrixi-border-width-default',
          'lyrixi-border-style-solid'
        )
    }
  }

  switch (variant) {
    case ButtonVariant.solid:
      return DOMUtil.classNames(
        'lyrixi-color-white',
        `lyrixi-border-color-${color}`,
        `lyrixi-bg-${color}`,
        'lyrixi-border-width-default',
        'lyrixi-border-style-solid'
      )
    case ButtonVariant.filled:
      return DOMUtil.classNames(
        `lyrixi-color-${color}`,
        `lyrixi-border-color-${color}`,
        `lyrixi-bg-${color}-lighten`
      )
    case ButtonVariant.text:
      return DOMUtil.classNames(
        `lyrixi-color-${color}`,
        `lyrixi-border-color-${color}`,
        'lyrixi-bg-transparent'
      )
    case ButtonVariant.outlined:
      return DOMUtil.classNames(
        `lyrixi-color-${color}`,
        `lyrixi-border-color-${color}`,
        'lyrixi-bg-transparent',
        'lyrixi-border-width-default',
        'lyrixi-border-style-solid'
      )
    case ButtonVariant.dashed:
      return DOMUtil.classNames(
        `lyrixi-color-${color}`,
        `lyrixi-border-color-${color}`,
        `lyrixi-bg-${color}-lighten`,
        'lyrixi-border-width-default',
        'lyrixi-border-style-dashed'
      )
    default:
      return DOMUtil.classNames(
        `lyrixi-color-${color}`,
        `lyrixi-border-color-${color}`,
        'lyrixi-bg-transparent'
      )
  }
}
