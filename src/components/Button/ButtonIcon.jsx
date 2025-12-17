import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Icon from './../Icon'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Icon } from 'lyrixi-mobile'
测试使用-end */

const ButtonIcon = forwardRef(
  (
    {
      // Style
      color,
      backgroundColor,
      size = 'm',
      padding,
      radius,
      style,
      className,

      // Elements
      children
    },
    ref
  ) => {
    return (
      <Icon
        ref={ref}
        color={color}
        backgroundColor={backgroundColor}
        size={size}
        padding={padding}
        radius={radius}
        style={style}
        className={DOMUtil.classNames('lyrixi-button-icon', className)}
      >
        {children}
      </Icon>
    )
  }
)

export default ButtonIcon
