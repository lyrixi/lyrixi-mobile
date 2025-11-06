import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const NavBar = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={DOMUtil.classNames('lyrixi-navbar', className)}>
      {children}
    </div>
  )
})

export default NavBar
