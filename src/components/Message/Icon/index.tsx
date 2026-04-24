import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

interface MessageIconRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

interface MessageIconProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

const ConfirmIcon = forwardRef<MessageIconRef, MessageIconProps>(
  (
    {
      children,
      // 其它属性
      className,
      style
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
        style={style}
        className={DOMUtil.classNames('lyrixi-message-icon', className)}
        ref={rootRef}
      >
        {children}
      </div>
    )
  }
)

export default ConfirmIcon
