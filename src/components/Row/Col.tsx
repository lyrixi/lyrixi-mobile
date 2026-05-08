import React, { useRef, forwardRef, useImperativeHandle } from 'react'

import type { RowColProps, RowColRef } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end


const Col = forwardRef<RowColRef, RowColProps>(function Col({ span, style, className, children }, ref) {
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

export type { RowColProps, RowColRef } from './types'
export default Col
