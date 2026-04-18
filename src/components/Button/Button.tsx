import React, { useRef, forwardRef, useImperativeHandle, type CSSProperties, type MouseEventHandler, type ReactNode } from 'react'
import getStyle from './getStyle'

// 内库使用-start
import Flex from './../Flex'
// 内库使用-end

/* 测试使用-start
import { Flex } from 'lyrixi-mobile'
测试使用-end */

export interface ButtonProps {
  id?: string
  direction?: 'horizontal' | 'vertical' | string
  block?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
  size?: string | number | readonly string[]
  sizeEqual?: boolean
  fontSize?: string | number
  radius?: string | number
  style?: CSSProperties
  className?: string
  disabled?: boolean
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface ButtonRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

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
      // 非标准：div 上保留 disabled 以兼容旧用法与样式
      {...({ disabled } as { disabled?: boolean })}
    >
      {children}
    </div>
  )
})

type ButtonWithName = typeof Button & { componentName: string }
;(Button as ButtonWithName).componentName = 'Button'

export default Button as ButtonWithName
