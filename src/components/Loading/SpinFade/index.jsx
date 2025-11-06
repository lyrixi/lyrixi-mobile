import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const SpinFade = (
  {
    // 其它属性
    className,
    ...props
  },
  ref
) => {
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => {
        return rootRef.current
      }
    }
  })
  return (
    <div
      {...props}
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

export default forwardRef(SpinFade)
