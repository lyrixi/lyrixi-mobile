import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 通告栏
const NoticeBar = forwardRef(
  (
    {
      // Elements
      title,
      description,
      iconNode,
      iconRender,

      // Status
      type, // success,info,warning,error
      closable,

      // Style
      style,
      className
    },
    ref
  ) => {
    // 节点
    const rootRef = useRef(null)
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
        className={DOMUtil.classNames('lyrixi-noticebar', className)}
      ></div>
    )
  }
)

export default NoticeBar
