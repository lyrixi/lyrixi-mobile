import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
测试使用-end */

const Footer = forwardRef(
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

    // Expose tools
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <footer
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-page-footer', className)}
      >
        {/* Element: Children */}
        {children}

        {/* Element: SafeArea */}
        {safeArea === true && <SafeArea />}
      </footer>
    )
  }
)

export default Footer
