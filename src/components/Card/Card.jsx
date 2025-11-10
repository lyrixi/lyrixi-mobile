import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Card = forwardRef(
  (
    {
      // Style
      style,
      className,

      // Element
      title,
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-card', className)}
      >
        {/* Element: Title */}
        {title && (
          <div className="lyrixi-card-header">
            <div>{title}</div>
          </div>
        )}

        {/* Element: Children */}
        {children}
      </div>
    )
  }
)

export default Card
