import React, { forwardRef, useRef, useImperativeHandle, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-start */

interface MessageMainRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

interface MessageMainProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

// 下拉刷新容器
const Main = forwardRef<MessageMainRef, MessageMainProps>(
  (
    {
      children,
      // 其它属性
      className,
      style
    },
    ref
  ) => {
    const rootRef = useRef<HTMLElement>(null)

    // Expose api
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <main
        style={style}
        className={DOMUtil.classNames('lyrixi-message-main', className)}
        ref={rootRef}
      >
        {children}
      </main>
    )
  }
)

export default Main
