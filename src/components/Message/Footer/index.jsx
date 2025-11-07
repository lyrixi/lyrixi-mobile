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
      layout = 'horizontal',
      children,
      // 其它属性
      className,
      ...props
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
        {...props}
        data-layout={layout}
        className={DOMUtil.classNames('lyrixi-message-footer', className)}
        ref={rootRef}
      >
        {children}
      </footer>
    )
  }
)

export default Footer
