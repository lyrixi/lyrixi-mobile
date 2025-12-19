import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const SpinFade = (
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
      element: rootRef.current,
      getElement: () => {
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
      style={newStyle}
      className={DOMUtil.classNames('lyrixi-loading-spinfade', className)}
      ref={rootRef}
    >
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
    </div>
  )
}

export default forwardRef(SpinFade)
