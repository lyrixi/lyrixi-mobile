import React, { forwardRef } from 'react'

import type { NavBarProps } from '../types'
import Left from './../Left'
import Right from './../Right'
import Title from './../Title'

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
      title,
      children,
      leftRender,
      rightRender
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
        {typeof leftRender === 'function' && <Left>{leftRender()}</Left>}
        {title ? <Title>{title}</Title> : children}
        {typeof rightRender === 'function' && <Right>{rightRender()}</Right>}
      </div>
    )
  }
)

export default NavBar
