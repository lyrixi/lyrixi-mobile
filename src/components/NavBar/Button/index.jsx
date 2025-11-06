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
      // Icon
      icon,
      iconPosition,
      iconColor,
      iconBackgroundColor,
      iconSize = 16,
      iconPadding,
      iconRadius,

      // Button
      color = 'secondary',
      backgroundColor,
      size = 22,
      padding = 8,
      style,
      className,
      children,

      // Events
      onClick
    },
    ref
  ) => {
    return (
      <Button
        // Icon
        icon={icon}
        iconPosition={iconPosition}
        iconColor={iconColor}
        iconBackgroundColor={iconBackgroundColor}
        iconSize={iconSize}
        iconPadding={iconPadding}
        iconRadius={iconRadius}
        // Button
        color={color}
        backgroundColor={backgroundColor}
        size={size}
        padding={padding}
        radius=""
        border="null"
        style={style}
        className={DOMUtil.classNames('lyrixi-navbar-button', className)}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </Button>
    )
  }
)

export default NavBarButton
