import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export type SafeAreaType = 'height' | 'padding' | 'margin' | 'border' | 'before' | 'after'
export type SafeAreaPosition = 'top' | 'bottom'

export interface SafeAreaProps {
  type?: SafeAreaType
  position?: SafeAreaPosition
  style?: CSSProperties
  className?: string
}

export interface SafeAreaRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

const SafeArea = forwardRef<SafeAreaRef, SafeAreaProps>(function SafeArea(
  { type = 'height', position = 'bottom', style, className },
  ref
) {
  const rootRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  const mergedClassName = (DOMUtil.classNames as (...args: unknown[]) => string)(
    'lyrixi-safe-area',
    `lyrixi-${type}-${position}`,
    className
  )

  return <div ref={rootRef} style={style} className={mergedClassName} />
})

export default SafeArea
