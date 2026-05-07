import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Button from './../../Button'
import type { ButtonProps, ButtonRef } from './../../Button/types'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Button, type ButtonProps, type ButtonRef } from 'lyrixi-mobile'
测试使用-end */

const ToolBarButton = forwardRef<ButtonRef, ButtonProps>(function ToolBarButton(
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
    style,
    className,

    // Element
    children,

    // Events
    onClick
  },
  ref
) {
  const rootRef = useRef<ButtonRef | null>(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current?.element ?? null,
      getElement: () => rootRef.current?.getElement() ?? null
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
})

// Component Name, for compact
;(ToolBarButton as typeof ToolBarButton & { componentName?: string }).componentName =
  'ToolBar.Button'

export default ToolBarButton
