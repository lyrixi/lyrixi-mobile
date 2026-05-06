import React, { useRef, forwardRef, useImperativeHandle } from 'react'

import type { ColProps, ColRef } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

export type { ColProps, ColRef } from './types'

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
