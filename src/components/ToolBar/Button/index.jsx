import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Button } from 'lyrixi-mobile'
测试使用-end */

const ToolBarButton = forwardRef(
  (
    {
      // Style
      direction,
      block,
      color,
      backgroundColor,
      borderColor,
      border = 'none',
      size,
      sizeEqual,
      fontSize,
      radius = 'm',
      className,
      style,

      // Element
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
      <Button
        ref={rootRef}
        // Style
        color={color}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        border={border}
        direction={direction}
        size={size}
        radius={radius}
        sizeEqual={sizeEqual}
        fontSize={fontSize}
        className={DOMUtil.classNames('lyrixi-toolbar-button', className)}
        style={style}
        // Events
        onClick={onClick}
      >
        {/* Element: Children */}
        {children}
      </Button>
    )
  }
)

// Component Name, for compact
ToolBarButton.componentName = 'ToolBar.Button'

export default ToolBarButton
