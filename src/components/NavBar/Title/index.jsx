import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const NavBarTitle = forwardRef(
  (
    {
      children,
      // 其它属性
      className,
      style
    },
    ref
  ) => {
    const rootRef = useRef(null)

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
