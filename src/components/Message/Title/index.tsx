import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

interface MessageTitleRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

interface MessageTitleProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

const ConfirmTitle = forwardRef<MessageTitleRef, MessageTitleProps>(
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
        className={DOMUtil.classNames('lyrixi-message-title', className)}
        ref={rootRef}
      >
        {children}
      </div>
    )
  }
)

export default ConfirmTitle
