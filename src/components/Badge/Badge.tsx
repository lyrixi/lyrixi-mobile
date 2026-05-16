import React, { forwardRef, useRef, useImperativeHandle, type ReactNode } from 'react'

import type { BadgeProps, BadgeRef } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 数值标
const Badge = forwardRef<BadgeRef, BadgeProps>(function Badge(
  {
    // Value & Display Value
    children = '0',

    // Style
    style,
    className,

    // Validate
    maxLength = 2,
    ellipsis = '+' // 有maxLength属性时ellipsis才生效
  },
  ref
) {
  // 节点
  const rootRef = useRef<HTMLSpanElement | null>(null)
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  // 标题
  let text: ReactNode = children
  if (maxLength && (children || children === 0) && (typeof children === 'string' || typeof children === 'number')) {
    const raw = String(children)
    if (!isNaN(Number(raw))) {
      text = raw.length > maxLength ? '99999'.substring(0, maxLength) + ellipsis : raw
    } else {
      text = raw.length > maxLength ? raw.substring(0, maxLength) + ellipsis : raw
    }
  }
  return (
    <span
      ref={rootRef}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-badge', className)}
    >
      {text}
    </span>
  )
})

export default Badge
