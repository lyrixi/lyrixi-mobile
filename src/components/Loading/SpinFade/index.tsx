import React, { forwardRef, useRef, useImperativeHandle, type CSSProperties } from 'react'

import type { LoadingSpinFadeProps, LoadingSpinFadeRef } from './../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const SpinFade = forwardRef<LoadingSpinFadeRef, LoadingSpinFadeProps>(
  ({ color, size, style, className }, ref) => {
    const rootRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => {
          return rootRef.current
        }
      }
    })

    const newStyle: CSSProperties = style ? { ...style } : {}
    if (color) {
      newStyle.color = color
    }
    if (size) {
      newStyle.width = size
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
)

export default SpinFade
