import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import DOMUtil from './../../../utils/DOMUtil'

const Typography = forwardRef(
  (
    {
      // Style
      style,
      className,

      // Element
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-typography', className)}
      >
        {/* Element: Children */}
        {children}
      </div>
    )
  }
)

export default Typography
