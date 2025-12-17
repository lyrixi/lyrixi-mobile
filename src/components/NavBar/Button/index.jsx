import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Button } from 'lyrixi-mobile'
测试使用-end */

const NavBarButton = forwardRef(
  (
    {
      // Button: Style
      color = 'secondary',
      borderColor,
      backgroundColor = 'transparent',
      size = 22,
      fontSize,
      radius,
      sizeEqual,
      border = 'none',
      style,
      className,

      // Button: Status
      disabled,

      // Button: Elements
      children,

      // Events
      onClick
    },
    ref
  ) => {
    return (
      <Button
        // Button: Style
        color={color}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        size={size}
        fontSize={fontSize}
        radius={radius}
        sizeEqual={sizeEqual}
        border={border}
        style={style}
        className={DOMUtil.classNames('lyrixi-navbar-button', className)}
        // Button: Status
        disabled={disabled}
        // Button: Events
        onClick={onClick}
        ref={ref}
      >
        {children}
      </Button>
    )
  }
)

export default NavBarButton
