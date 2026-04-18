import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties, type MouseEventHandler, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export interface CardProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface CardRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

const Card = forwardRef<CardRef, CardProps>(function Card({ style, className, children, onClick }, ref) {
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
      className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-card', className)}
      onClick={onClick}
    >
      {children}
    </div>
  )
})

export default Card
