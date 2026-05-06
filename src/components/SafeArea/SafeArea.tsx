import React, { useImperativeHandle, forwardRef, useRef } from 'react'

import type { SafeAreaProps, SafeAreaRef } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */


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

export type { SafeAreaProps, SafeAreaRef, SafeAreaPosition, SafeAreaType } from './types'
export default SafeArea
