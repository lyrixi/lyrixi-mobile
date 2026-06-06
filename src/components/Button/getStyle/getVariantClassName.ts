// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export default function getVariantClassName(variant: 'solid', color: 'default'): string {
  if (color === 'default') {
    switch (variant) {
      case 'solid':
        return DOMUtil.classNames(
          'lyrixi-color-default',
          'lyrixi-border-color-default',
          'lyrixi-bg-white',
          'lyrixi-border-width-default',
          'lyrixi-border-style-solid'
        )
      case 'text':
        return DOMUtil.classNames(
          'lyrixi-color-default',
          'lyrixi-border-color-default',
          'lyrixi-bg-transparent'
        )

      case 'outlined':
        return DOMUtil.classNames(
          'lyrixi-color-default',
          'lyrixi-border-color-default',
          'lyrixi-bg-transparent',
          'lyrixi-border-width-default',
          'lyrixi-border-style-solid'
        )
      case 'filled':
        return DOMUtil.classNames(
          'lyrixi-color-secondary',
          'lyrixi-border-color-default',
          'lyrixi-bg-default'
        )
      case 'dashed':
        return DOMUtil.classNames(
          'lyrixi-color-default',
          'lyrixi-border-color-default',
          'lyrixi-bg-transparent',
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
    case 'solid':
      return DOMUtil.classNames(
        'lyrixi-color-white',
        `lyrixi-border-color-${color}`,
        `lyrixi-bg-${color}`,
        'lyrixi-border-width-default',
        'lyrixi-border-style-solid'
      )
    case 'filled':
      return DOMUtil.classNames(
        `lyrixi-color-${color}`,
        `lyrixi-border-color-${color}`,
        `lyrixi-bg-${color}-lighten`
      )
    case 'text':
      return DOMUtil.classNames(
        `lyrixi-color-${color}`,
        `lyrixi-border-color-${color}`,
        'lyrixi-bg-transparent'
      )
    case 'outlined':
      return DOMUtil.classNames(
        `lyrixi-color-${color}`,
        `lyrixi-border-color-${color}`,
        'lyrixi-bg-transparent',
        'lyrixi-border-width-default',
        'lyrixi-border-style-solid'
      )
    case 'dashed':
      return DOMUtil.classNames(
        `lyrixi-color-${color}`,
        `lyrixi-border-color-${color}`,
        'lyrixi-bg-transparent',
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
