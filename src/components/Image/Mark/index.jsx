import React, { forwardRef } from 'react'
import DOMUtil from './../../../utils/DOMUtil'

// 照片标识
function Mark({ labels, style, className, ...props }, ref) {
  return (
    <div ref={ref} {...props} className={DOMUtil.classNames('lyrixi-image-item-mark', className)}>
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
