import React, { forwardRef, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

export interface ToolBarProps {
  variant?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const ToolBar = forwardRef<HTMLDivElement, ToolBarProps>(function ToolBar(
  {
    // Style
    variant, // 变体: filled, default
    className,
    style,

    // Element
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
        {/* Element: Children */}
        {children}
      </div>
    )
})

export default ToolBar
