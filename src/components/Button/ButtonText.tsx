import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import type { ButtonTextProps, ButtonTextRef } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export type { ButtonTextProps, ButtonTextRef } from './types'

const ButtonText = forwardRef<ButtonTextRef, ButtonTextProps>(function ButtonText(
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
      className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-button-text', className)}
    >
      {children}
    </div>
  )
})

export default ButtonText
