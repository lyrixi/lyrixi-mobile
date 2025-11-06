import React, { forwardRef } from 'react'

// 照片遮罩
function Mask({ labels, style, className, ...props }, ref) {
  return (
    <div ref={ref} {...props} className={`lyrixi-image-item-mark${className ? ' ' + className : ''}`}>
      {Array.isArray(labels) && labels.length
        ? labels.map((label, index) => {
            return (
              <div className="lyrixi-image-item-mark-label" key={index}>
                <span>{label}</span>
              </div>
            )
          })
        : null}
    </div>
  )
}

export default forwardRef(Mask)
