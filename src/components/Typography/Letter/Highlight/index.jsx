import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

const Highlight = forwardRef(
  (
    {
      highlight,
      children, // 其它属性
      className,
      ...props
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
      <div
        {...props}
        className={DOMUtil.classNames('lyrixi-typography-highlight', className)}
        ref={rootRef}
      >
        {children}
      </div>
    )
  }
)

export default Highlight
