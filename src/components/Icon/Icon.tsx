import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import getStyle from './getStyle'
import type { IconProps, IconRef } from './types'

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
