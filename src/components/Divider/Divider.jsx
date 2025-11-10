import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Divider = forwardRef(
  (
    {
      // Style
      style,
      className,

      // Element
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // 节点
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-divider', className)}
      >
        {/* Element: Children */}
        {children}
      </div>
    )
  }
)

export default Divider
