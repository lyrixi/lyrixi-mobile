import React, { forwardRef, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

interface NavBarProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

const NavBar = forwardRef<HTMLDivElement, NavBarProps>(
  (
    {
      // Style
      style,
      className,

      // Element
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
        {/* Element: Children */}
        {children}
      </div>
    )
  }
)

export default NavBar
