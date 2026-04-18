import React, { useRef, forwardRef, useImperativeHandle, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

export interface ColProps {
  span?: number | string
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface ColRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

const Col = forwardRef<ColRef, ColProps>(function Col({ span, style, className, children }, ref) {
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
      className={(DOMUtil.classNames as (...args: unknown[]) => string)(
        'lyrixi-col',
        `lyrixi-col-${span ?? 0}`,
        className
      )}
    >
      {children}
    </div>
  )
})

export default Col
