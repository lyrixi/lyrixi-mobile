import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

const Header = forwardRef(
  (
    {
      // Status
      safeArea,

      // Style
      className,
      style,

      // Elements
      children
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
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-page-header', className)}
      >
        {/* Element: Children */}
        {children}

        {/* Element: SafeArea */}
        {safeArea === true && <SafeArea />}
      </header>
    )
  }
)

export default Header
