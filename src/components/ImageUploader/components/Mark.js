import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

// 照片遮罩
function Mask({ labels, style, className }, ref) {
  return (
    <div
      ref={ref}
      style={style}
      className={DOMUtil.classNames('lyrixi-image-item-mark', className)}
    >
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
