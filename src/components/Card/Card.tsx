import React, { useImperativeHandle, forwardRef, useRef } from 'react'

import type { CardProps, CardRef } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

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
