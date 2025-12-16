import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'
import Div from './../../Letter/Base'
import FormContext from './../FormContext'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Row from '../../../Row'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Row } from 'lyrixi-mobile'
测试使用-end */

const FormMain = forwardRef(
  (
    {
      // Value & Display Value
      ellipsis,

      // Style
      style,
      className,
      span,

      // Element
      errorMessage,
      inputExtraNode,
      extraNode,
      children
    },
    ref
  ) => {
    // 获取全局配置
    const { layout, mainCol } = useContext(FormContext)

    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return rootRef.current
    })

    const { span: globalSpan, ellipsis: globalEllipsis } = mainCol || {}

    return (
      <Row.Col
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-form-item-main', className)}
        span={layout === 'horizontal' ? span || globalSpan || 16 : 24}
      >
        <div className="lyrixi-form-item-main-input">
          {/* Element: Children */}
          {ellipsis?.rows && typeof children === 'string' ? (
            <Div ellipsis={ellipsis || globalEllipsis}>{children}</Div>
          ) : (
            children
          )}
          {/* Element: Input extra */}
          {inputExtraNode && (
            <div className="lyrixi-form-item-main-input-extra">{inputExtraNode}</div>
          )}
        </div>
        {/* Value & Display Value: Error */}
        {errorMessage && <div className="lyrixi-form-item-main-error">{errorMessage}</div>}
        {/* Element: Main extra */}
        {extraNode && <div className="lyrixi-form-item-main-extra">{extraNode}</div>}
      </Row.Col>
    )
  }
)

export default FormMain
