import React, { forwardRef } from 'react'

// 内库使用-start
import Icon, { IconRef, IconProps } from './../../Icon'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Icon } from 'lyrixi-mobile'
测试使用-end */

interface IconRightArrowProps extends Omit<IconProps, 'className'> {
  padding?: number
  iconClassName?: string
}

const IconRightArrow = forwardRef<IconRef, IconRightArrowProps>(
  (
    {
      // Status
      disabled,

      // Style
      color, // 颜色: default, transparent, primary, info, warning, danger, success
      backgroundColor, // 背景颜色: default, transparent, white, primary, info, warning, danger, success
      size = 'm', // 尺寸: xxs, xs, s, m, l, xl
      radius, // 圆角: xxs, xs, s, m, l, xl
      style,

      // Element ClassName
      iconClassName,

      // Events
      onClick
    },
    ref
  ) => {
    return (
      <Icon
        ref={ref}
        // Status
        disabled={disabled}
        // Style
        color={color}
        backgroundColor={backgroundColor}
        size={size}
        radius={radius}
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-input-icon',
          'lyrixi-right-icon',
          iconClassName || 'lyrixi-input-icon-right-arrow'
        )}
        // Events
        onClick={onClick}
      />
    )
  }
)

export default IconRightArrow
