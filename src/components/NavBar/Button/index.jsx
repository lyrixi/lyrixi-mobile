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
      padding,
      // Button: Style
      color = 'secondary',
      borderColor,
      backgroundColor,
      size = 22,
      fontSize,
      radius,
      square,
      border = 'none',
      style,
      className,

      // Button: Status
      disabled,

      // Button: Elements
      children,

      // Icon: Style
      iconClassName,
      iconPosition,
      iconColor,
      iconBackgroundColor,
      iconSize = 16,
      iconPadding,
      iconRadius,

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
        square={square}
        border={border}
        style={{
          ...style,
          padding: padding
        }}
        className={DOMUtil.classNames('lyrixi-navbar-button', className)}
        // Button: Status
        disabled={disabled}
        // Icon: Style
        iconClassName={iconClassName}
        iconPosition={iconPosition}
        iconColor={iconColor}
        iconBackgroundColor={iconBackgroundColor}
        iconSize={iconSize}
        iconPadding={iconPadding}
        iconRadius={iconRadius}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </Button>
    )
  }
)

export default NavBarButton
