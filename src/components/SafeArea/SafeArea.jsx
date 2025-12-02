import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 安全区域
const SafeArea = forwardRef(
  (
    {
      // Style
      type = 'height', // height | padding | margin | border | before | after
      position = 'bottom', // top | bottom
      style,
      className
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
        className={DOMUtil.classNames('lyrixi-safe-area', `lyrixi-${type}-${position}`, className)}
      ></div>
    )
  }
)

export default SafeArea
