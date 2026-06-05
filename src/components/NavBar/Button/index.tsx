import React, { forwardRef } from 'react'

import type { NavBarButtonProps } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Button from './../../Button'
import type { ButtonRef } from './../../Button/types'
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
      variant = 'text',
      color,
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
        variant={variant}
        color={color}
        size={size}
        fontSize={fontSize}
        radius={radius}
        sizeEqual={sizeEqual}
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
