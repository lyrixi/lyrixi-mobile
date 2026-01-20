import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import getStyle from './getStyle'
import Ellipsis from './Ellipsis'
import getHighlightNode from './getHighlightNode'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */


const Text = forwardRef(
  (
    {
      // Value & Display Value
      highlight,
      // Status
      ellipsis, // { rows: Number, expandable: Boolean, defaultExpanded: Boolean }
      // Style
      color,
      fontSize,
      fontWeight,
      style,
      className,
      // Element
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // color,fontSize,fontWeight转为className或者指定style
    let { style: newStyle, className: newClassName } = getStyle({
      // Style
      color,
      fontSize,
      fontWeight,
      style,
      className
    })

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })


    // 处理高亮
    const content = highlight ? getHighlightNode(children, highlight) : children

    return (
      <div
        ref={rootRef}
        // Style
        className={DOMUtil.classNames('lyrixi-text', newClassName)}
        style={newStyle}
      >
        {ellipsis?.rows ? <Ellipsis ellipsis={ellipsis}>{content}</Ellipsis> : content}
      </div>
    )
  }
)

export default Text
