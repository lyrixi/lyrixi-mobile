import React, { useImperativeHandle, forwardRef, useRef } from 'react'


import type { MessageHeaderProps, MessageHeaderRef } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Header = forwardRef<MessageHeaderRef, MessageHeaderProps>(
  (
    {
      // Elements
      children,
      // Style
      className,
      style
    },
    ref
  ) => {
    const rootRef = useRef<HTMLElement>(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <header
        style={style}
        className={DOMUtil.classNames('lyrixi-message-header', className)}
        ref={rootRef}
      >
        {children}
      </header>
    )
  }
)

export default Header
