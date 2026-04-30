import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import type { RowProps, RowRef } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export type { RowProps, RowRef } from './types'

const Row = forwardRef<RowRef, RowProps>(function Row({ style, className, children }, ref) {
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
      className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-row', className)}
    >
      {children}
    </div>
  )
})

export default Row
