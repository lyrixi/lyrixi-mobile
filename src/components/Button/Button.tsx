import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import getStyle from './getStyle'

import type { ButtonProps, ButtonRef } from './types'

// 内库使用-start
import Flex from './../Flex'
// 内库使用-end

/* 测试使用-start
import { Flex } from 'lyrixi-mobile'
测试使用-end */

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(
  {
    // Value & Display Value
    id,
    direction = 'horizontal',
    block,
    variant = 'solid',
    color = 'default',
    size,
    sizeEqual,
    fontSize,
    radius,
    // Status
    disabled,
    // Style
    style,
    className,
    // Elements
    children,
    // Events
    onClick
  },
  ref
) {
  const rootRef = useRef<HTMLDivElement>(null)
  const compactContext = Flex.Compact.useContext()

  const { style: newStyle, className: newClassName } = getStyle({
    variant,
    color,
    size: (size || compactContext?.size || 'm') as string | number | readonly string[],
    sizeEqual,
    fontSize,
    radius,
    direction,
    block: block || compactContext?.block || false,
    style,
    className
  })

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  return (
    <div
      ref={rootRef}
      id={id}
      style={newStyle}
      className={newClassName}
      onClick={onClick}
      {...({ disabled } as { disabled?: boolean })}
    >
      {children}
    </div>
  )
})

export default Button
