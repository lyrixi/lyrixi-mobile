import React, { forwardRef } from 'react'

import type { ToolBarProps } from './../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const ToolBar = forwardRef<HTMLDivElement, ToolBarProps>(function ToolBar(
  {
    // Style
    variant, // 变体: filled, default
    className,
    style,

    // Elements
    children
  },
  ref
) {
    return (
      <div
        ref={ref}
        // Style
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-toolbar',
          `lyrixi-toolbar-${variant || 'default'}`,
          className
        )}
      >
        {/* Elements: Children */}
        {children}
      </div>
    )
})
export default ToolBar
