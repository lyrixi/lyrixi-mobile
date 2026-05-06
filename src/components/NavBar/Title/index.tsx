import React, { useImperativeHandle, forwardRef, useRef } from 'react'

import type { NavBarTitleProps, NavBarTitleRef } from './types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const NavBarTitle = forwardRef<NavBarTitleRef, NavBarTitleProps>(
  (
    {
      children,
      // 其它属性
      className,
      style
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <div
        style={style}
        className={DOMUtil.classNames('lyrixi-navbar-title', className)}
        ref={rootRef}
      >
        {children}
      </div>
    )
  }
)

export default NavBarTitle

export type { NavBarTitleProps, NavBarTitleRef } from './types'

