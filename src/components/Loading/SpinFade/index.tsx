import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

interface SpinFadeProps {
  color?: string
  size?: string | number
  style?: React.CSSProperties
  className?: string
}

interface SpinFadeRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

const SpinFade = forwardRef<SpinFadeRef, SpinFadeProps>(
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

    const newStyle: React.CSSProperties = style ? { ...style } : {}
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
