import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const Ouroboros = (
  {
    // Style
    color,
    size,
    style,
    className
  },
  ref
) => {
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => {
        return rootRef.current
      }
    }
  })

  const newStyle = style || {}
  if (color) {
    newStyle.color = color
  }
  if (size) {
    newStyle.width = size
  }
  if (size) {
    newStyle.height = size
  }

  return (
    <div
      className={DOMUtil.classNames('lyrixi-loading-ouroboros', className)}
      style={newStyle}
      ref={rootRef}
    >
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  )
}

export default forwardRef(Ouroboros)
