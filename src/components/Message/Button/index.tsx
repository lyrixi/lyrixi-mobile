import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Button = forwardRef(
  (
    {
      // Style
      className,
      style,
      // Elements
      children,
      // Events
      onClick
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
        className={DOMUtil.classNames('lyrixi-message-button', className)}
        onClick={onClick}
        ref={rootRef}
      >
        {children}
      </div>
    )
  }
)

// Component Name, for compact
Button.componentName = 'ToolBar.Button'

export default Button
