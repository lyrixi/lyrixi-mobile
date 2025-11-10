import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import FormContext from './../FormContext'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// layout: horizontal | vertical | inline
const Form = forwardRef(
  ({ layout = 'horizontal', labelCol, mainCol, scrollerDOM, children, className, style }, ref) => {
    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <FormContext.Provider value={{ layout, labelCol, mainCol, scrollerDOM: scrollerDOM }}>
        <div
          ref={rootRef}
          className={DOMUtil.classNames('lyrixi-form-items', className)}
          style={style}
        >
          {children}
        </div>
      </FormContext.Provider>
    )
  }
)

export default Form
