import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const Header = forwardRef(
  (
    {
      safeArea,
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
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <header
        style={style}
        className={DOMUtil.classNames('lyrixi-page-header', className)}
        ref={rootRef}
      >
        {children}
      </header>
    )
  }
)

export default Header
