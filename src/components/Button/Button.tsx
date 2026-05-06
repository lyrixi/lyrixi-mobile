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
    id,
    direction = 'horizontal',
    block,
    color = 'default',
    backgroundColor = 'white',
    borderColor = 'default',
    border = 'solid',
    size,
    sizeEqual,
    fontSize,
    radius,
    style,
    className,
    disabled,
    children,
    onClick
  },
  ref
) {
  const rootRef = useRef<HTMLDivElement>(null)
  const compactContext = Flex.Compact.useContext()

  const { style: newStyle, className: newClassName } = getStyle({
    color,
    borderColor,
    backgroundColor,
    size: (size || compactContext?.size || 'm') as string | number | readonly string[],
    sizeEqual,
    fontSize,
    radius,
    border,
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

type ButtonWithName = typeof Button & { componentName: string }
;(Button as ButtonWithName).componentName = 'Button'

export type { ButtonProps, ButtonRef } from './types'
export default Button as ButtonWithName
