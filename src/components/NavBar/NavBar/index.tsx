import React, { forwardRef } from 'react'

import type { NavBarProps } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const NavBar = forwardRef<HTMLDivElement, NavBarProps>(
  (
    {
      // Style
      style,
      className,

      // Elements
      children
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-navbar', className)}
      >
        {/* Elements: Children */}
        {children}
      </div>
    )
  }
)

export default NavBar
