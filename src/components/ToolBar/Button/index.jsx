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
      color,
      backgroundColor,
      shape,
      border,
      radius,
      size,
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
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <Button
        ref={rootRef}
        // Style
        color={color}
        backgroundColor={backgroundColor}
        border={border}
        size={size || 's'}
        radius={radius || 's'}
        shape={shape}
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
