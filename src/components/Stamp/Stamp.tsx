import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import getStyle from './getStyle'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */


// 印章控件
const Stamp = ({
  shape = 'round', // 类型: round, rect
  style,
  className,
  color, // 颜色
  children,
}, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  const { style: newStyle, className: newClassName } = getStyle({
    // Style
    color,
    style
  })

  return (
    <div
      ref={rootRef}
      className={DOMUtil.classNames('lyrixi-stamp', `lyrixi-stamp-${shape}`, className, newClassName)}
      style={newStyle}
    >
      <div className="lyrixi-stamp-inner">{children}</div>
    </div>
  )
}

export default forwardRef(Stamp)
