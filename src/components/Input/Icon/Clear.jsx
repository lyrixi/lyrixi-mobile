import React, { forwardRef } from 'react'

// 内库使用-start
import Icon from './../../Icon'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Icon } from 'lyrixi-mobile'
测试使用-end */

const IconClear = forwardRef(
  (
    {
      // Status
      disabled,

      // Style
      color, // 颜色: default, transparent, primary, link, warning, danger, success
      backgroundColor, // 背景颜色: default, transparent, white, primary, link, warning, danger, success
      size = 'm', // 尺寸: xxs, xs, s, m, l, xl
      padding, // 内边距: 数值
      radius, // 圆角: xxs, xs, s, m, l, xl
      style,
      className,

      // Element ClassName
      icon
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
        padding={padding}
        radius={radius}
        style={style}
        className={DOMUtil.classNames('lyrixi-input-icon', 'lyrixi-right-icon', className)}
        // Element ClassName
        icon={icon || 'lyrixi-input-icon-clear'}
      />
    )
  }
)

export default IconClear
