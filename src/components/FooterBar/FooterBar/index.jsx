import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Footer = forwardRef(
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

    // Expose tools
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <footer
        style={style}
        className={DOMUtil.classNames('lyrixi-footerbar', className)}
        ref={rootRef}
      >
        {children}
      </footer>
    )
  }
)

export default Footer
