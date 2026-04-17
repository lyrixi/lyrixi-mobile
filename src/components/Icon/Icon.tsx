import React, {
  useImperativeHandle,
  forwardRef,
  useRef,
  type CSSProperties,
  type ReactNode,
  type MouseEventHandler,
  type TouchEventHandler
} from 'react'
import getStyle from './getStyle'

export interface IconProps {
  disabled?: boolean
  color?: string
  backgroundColor?: string
  size?: string
  radius?: string
  style?: CSSProperties
  className?: string
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLElement>
  onTouchStart?: TouchEventHandler<HTMLElement>
}

export interface IconRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

const Icon = forwardRef<IconRef, IconProps>(function Icon(
  {
    disabled,
    color,
    backgroundColor,
    size = 'm',
    radius,
    style,
    className,
    children,
    onClick,
    onTouchStart
  },
  ref
) {
  const rootRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  const { style: newStyle, className: newClassName } = getStyle({
    color,
    backgroundColor,
    size,
    radius,
    style,
    className
  })

    return (
    <i
      ref={rootRef}
      {...({ disabled } as React.HTMLAttributes<HTMLElement>)}
      style={newStyle}
      className={newClassName}
      onClick={onClick}
      onTouchStart={onTouchStart}
    >
      {children}
    </i>
  )
})

export default Icon
