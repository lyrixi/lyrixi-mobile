import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import getStyle from './getStyle'
import type { IconProps, IconRef } from './types'

const Icon = forwardRef<IconRef, IconProps>(function Icon(
  {
    // Value & Display Value
    svg: Svg,
    // Status
    disabled,
    // Value & Display Value
    color,
    backgroundColor,
    size = 'm',
    radius,
    // Style
    style,
    className,
    // Events
    onClick,
    onTouchStart
  },
  ref
) {
  const rootRef = useRef<HTMLElement | null>(null)

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
    <span
      ref={rootRef}
      role="img"
      {...({ disabled } as React.HTMLAttributes<HTMLElement>)}
      style={newStyle}
      className={newClassName}
      onClick={onClick}
      onTouchStart={onTouchStart}
    >
      <Svg className="lyrixi-icon-svg" aria-hidden focusable="false" />
    </span>
  )
})

export default Icon
