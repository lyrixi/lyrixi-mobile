import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import getStyle from './getStyle'

const Icon = forwardRef(
  (
    {
      // Status
      disabled,

      // Style
      color, // 颜色: default, transparent, primary, link, warning, danger, success
      backgroundColor, // 背景颜色: default, transparent, white, primary, link, warning, danger, success
      size = 'm', // 尺寸: xxs, xs, s, m, l, xl
      padding, // 内边距: 数值
      radius, // 圆角: xxs, xs, s, m, l, xl
      style,
      className,

      // Element
      iconClassName,
      children,

      // Events
      onClick,
      onTouchStart
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

    const { style: newStyle, className: newClassName } = getStyle({
      // Style
      color,
      backgroundColor,
      size,
      radius,
      padding,
      style,
      // ClassName
      iconClassName,
      className
    })

    return (
      <i
        ref={rootRef}
        // Status
        disabled={disabled}
        // Style
        style={newStyle}
        className={newClassName}
        // Events
        onClick={onClick}
        onTouchStart={onTouchStart}
      >
        {/* Element: Children */}
        {children}
      </i>
    )
  }
)

export default Icon
