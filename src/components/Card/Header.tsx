import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export interface CardHeaderProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface CardHeaderRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

const Header = forwardRef<CardHeaderRef, CardHeaderProps>(function Header(
  { style, className, children },
  ref
) {
  const rootRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  return (
    <div
      ref={rootRef}
      style={style}
      className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-card-header', className)}
    >
      {children}
    </div>
  )
})

export default Header
