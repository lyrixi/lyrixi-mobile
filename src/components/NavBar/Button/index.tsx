import React, { forwardRef } from 'react'

import type { NavBarButtonProps } from './types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Button, { type ButtonRef } from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Button } from 'lyrixi-mobile'
测试使用-end */

const NavBarButton = forwardRef<ButtonRef, NavBarButtonProps>(
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

export type { NavBarButtonProps } from './types'

