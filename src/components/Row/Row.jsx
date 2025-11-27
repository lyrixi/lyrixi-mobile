import React, { useRef, useImperativeHandle, forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Row = forwardRef(
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
    // Expose
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => {
          return rootRef.current
        }
      }
    })

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-row', className)}
      >
        {/* Element: Children */}
        {children}
      </div>
    )
  }
)

export default Row
