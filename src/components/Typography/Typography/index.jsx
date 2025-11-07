import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import DOMUtil from './../../../utils/DOMUtil'

const Typography = forwardRef(
  (
    {
      children, // 其它属性
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
      <div {...props} className={DOMUtil.classNames('lyrixi-typography', className)} ref={rootRef}>
        {children}
      </div>
    )
  }
)

export default Typography
