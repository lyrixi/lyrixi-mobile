import React, { useRef, forwardRef, useImperativeHandle } from 'react'

import type { MessageButtonProps, MessageButtonRef } from './types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Button = forwardRef<MessageButtonRef, MessageButtonProps>(
  (
    {
      // Style
      className,
      style,
      block,
      color,
      backgroundColor,
      // Elements
      children,
      // Events
      onClick
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <div
        style={{
          ...(color ? { color } : {}),
          ...(backgroundColor ? { backgroundColor } : {}),
          ...(block ? { width: '100%', display: 'block' } : {}),
          ...style
        }}
        className={DOMUtil.classNames('lyrixi-message-button', className)}
        onClick={onClick}
        ref={rootRef}
      >
        {children}
      </div>
    )
  }
)

type ButtonWithName = typeof Button & { componentName: string }
;(Button as ButtonWithName).componentName = 'ToolBar.Button'

export default Button as ButtonWithName
