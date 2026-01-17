import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import ItemsContext from './../ItemsContext'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// layout: horizontal | vertical | inline
const Form = forwardRef(
  (
    {
      // Value & Display Value

      // Style
      style,
      className,
      layout = 'horizontal',
      labelSpan,
      labelEllipsis,
      mainSpan,
      mainEllipsis,

      // Element
      scrollerElement,
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <ItemsContext.Provider
        value={{ layout, labelSpan, labelEllipsis, mainSpan, mainEllipsis, scrollerElement: scrollerElement }}
      >
        <div
          ref={rootRef}
          // Style
          style={style}
          className={DOMUtil.classNames('lyrixi-form-items', className)}
        >
          {/* Element: Children */}
          {children}
        </div>
      </ItemsContext.Provider>
    )
  }
)

export default Form
