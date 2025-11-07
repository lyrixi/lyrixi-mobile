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
      title,
      children,
      // 其它属性
      className,
      ...props
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
      <div {...props} className={DOMUtil.classNames('lyrixi-card', className)} ref={rootRef}>
        {title && (
          <div className="lyrixi-card-header">
            <div>{title}</div>
          </div>
        )}
        {children}
      </div>
    )
  }
)

export default Card
