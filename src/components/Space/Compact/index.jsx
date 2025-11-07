import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import CompactWrapper from './CompactWrapper'

const Compact = forwardRef(
  (
    {
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
        className={DOMUtil.classNames('lyrixi-space-compact', className)}
        ref={rootRef}
      >
        <CompactWrapper
          targetsBaseClass={{
            Button: 'button',
            'ToolBar.Button': 'toolbar-button',
            'ToolBar.Dropdown': 'toolbar-button',
            'ToolBar.DateRange': 'toolbar-button',
            'ToolBar.List': 'toolbar-button',
            'ToolBar.Filter': 'toolbar-button'
          }}
        >
          {children}
        </CompactWrapper>
      </div>
    )
  }
)

export default Compact
