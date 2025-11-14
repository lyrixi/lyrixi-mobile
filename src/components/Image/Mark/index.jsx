import React, { forwardRef } from 'react'
import DOMUtil from './../../../utils/DOMUtil'

// 照片标识
function Mark(
  {
    // Elements
    labels,

    // Style
    style,
    className
  },
  ref
) {
  return (
    <div
      ref={ref}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-image-item-mark', className)}
    >
      {Array.isArray(labels) && labels.length
        ? labels.map((label, index) => {
            return (
              <div className="lyrixi-image-item-mark-label" key={index}>
                {label}
              </div>
            )
          })
        : null}
    </div>
  )
}

export default forwardRef(Mark)
