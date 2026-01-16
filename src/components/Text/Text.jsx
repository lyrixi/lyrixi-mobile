import React, { forwardRef } from 'react'
import getStyle from './getStyle'
import Base from './Base'

const Text = forwardRef(
  (
    {
      // Value & Display Value
      highlight,
      ellipsis,
      // Style
      color,
      fontSize,
      fontWeight,
      style,
      className,
      // Element
      children
    },
    ref
  ) => {
    let { style: newStyle, className: newClassName } = getStyle({
      // Style
      color,
      fontSize,
      fontWeight,
      style,
      className
    })

    return (
      <Base
        ref={ref}
        // Value & Display Value
        highlight={highlight}
        ellipsis={ellipsis}
        // Style
        style={newStyle}
        className={newClassName}
      >
        {children}
      </Base>
    )
  }
)

export default Text
