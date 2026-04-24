import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

interface NavBarTitleRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

interface NavBarTitleProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

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
