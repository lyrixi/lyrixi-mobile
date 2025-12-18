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
      direction,
      block,
      color = 'secondary',
      backgroundColor = 'transparent',
      borderColor,
      border = 'none',
      size = 22,
      sizeEqual,
      fontSize,
      radius,
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
        direction={direction}
        block={block}
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
