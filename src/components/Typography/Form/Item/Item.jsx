import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'
import FormContext from './../FormContext'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Row from './../../../Row'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Row } from 'lyrixi-mobile'
测试使用-end */

const FormItem = forwardRef(
  (
    {
      id,
      name,
      // Value & Display Value

      // Style
      style,
      className,
      layout,

      // Element
      children
    },
    ref
  ) => {
    const { layout: globalLayout } = useContext(FormContext)
    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return rootRef.current
    })

    let layoutClass = ''
    if (layout || globalLayout) {
      layoutClass = `lyrixi-form-item-layout-${layout || globalLayout}`
    }

    return (
      <Row
        ref={rootRef}
        // Value & Display Value
        id={`${name ? `lyrixi-form-item-${name}` : id || ''}`}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-form-item', className, layoutClass)}
      >
        {/* Element: Children */}
        {children}
      </Row>
    )
  }
)

export default FormItem
