import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const FooterBar = forwardRef(
  (
    {
      // Style
      className,
      style,

      // Element
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose tools
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <footer
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-footerbar', className)}
      >
        {children}
      </footer>
    )
  }
)

export default FooterBar
