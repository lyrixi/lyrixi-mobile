import React, { useState, useImperativeHandle, forwardRef, useRef, useEffect } from 'react'
import getStyle from './getStyle'
import Ellipsis from './Ellipsis'

// 内库使用-start
import LocaleUtil from './../../utils/LocaleUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, DOMUtil } from 'lyrixi-mobile'
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


    return (
      <div
        ref={rootRef}
        // Style
        className={DOMUtil.classNames('lyrixi-text', newClassName)}
        style={newStyle}
      >
        {ellipsis?.rows ? <Ellipsis ellipsis={ellipsis}>{children}</Ellipsis> : children}
      </div>
    )
  }
)

export default Text
