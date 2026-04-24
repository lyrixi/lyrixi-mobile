import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

interface OuroborosProps {
  color?: string
  size?: string | number
  style?: React.CSSProperties
  className?: string
}

interface OuroborosRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

const Ouroboros = forwardRef<OuroborosRef, OuroborosProps>(
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
)

export default Ouroboros
