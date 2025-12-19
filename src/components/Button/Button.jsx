import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import getStyle from './getStyle'

// 内库使用-start
import Flex from './../Flex'
// 内库使用-end

/* 测试使用-start
import { Flex } from 'lyrixi-mobile'
测试使用-end */

const Button = forwardRef(
  (
    {
      id,
      // Button: Style
      direction = 'horizontal', // 方向: horizontal, vertical
      block, // 是否为块级元素
      color = 'default', // 颜色: default, transparent, primary, link, warning, danger, success
      backgroundColor = 'white', // 背景颜色: default, transparent, white, primary, link, warning, danger, success
      borderColor = 'default', // 边框颜色: default, transparent, primary, link, warning, danger, success
      border = 'solid', // 边框: none, dotted, dashed, solid
      size, // 高度尺寸: xxs, xs, s, m, l, xl, 传数组则为[高度,宽度]
      sizeEqual, // 是否为等宽高
      fontSize, // 字体大小: xxs, xs, s, m, l, xl
      radius, // 圆角: xxs, xs, s, m, l, xl
      style,
      className,

      // Button: Status
      disabled,

      // Button: Elements
      children,

      // Events
      onClick
    },
    ref
  ) => {
    const rootRef = useRef(null)
    // 获取紧凑组件的上下文
    const compactContext = Flex.Compact.useContext()

    let { style: newStyle, className: newClassName } = getStyle({
      // Style
      color,
      borderColor,
      backgroundColor,
      size: size || compactContext?.size || 'm',
      sizeEqual,
      fontSize,
      radius,
      border,
      direction,
      block: block || compactContext?.block || false,
      style,
      className
    })

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <div
        ref={rootRef}
        id={id}
        // Style
        style={newStyle}
        className={newClassName}
        onClick={onClick}
        disabled={disabled}
      >
        {/* Element: Children */}
        {children}
      </div>
    )
  }
)

// Component Name, for compact
Button.componentName = 'Button'

export default Button
