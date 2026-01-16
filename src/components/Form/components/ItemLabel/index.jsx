import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'
import ItemsContext from './../ItemsContext'
import Div from './../../Letter/Base'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Toast from './../../../Toast'
import Row from '../../../Row'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Toast, Row } from 'lyrixi-mobile'
测试使用-end */

const FormLabel = forwardRef(
  (
    {
      // Value & Display Value
      ellipsis,

      // Style
      style,
      className,
      span,

      // Validate
      required,

      // Element
      help,
      children
    },
    ref
  ) => {
    // 获取全局配置
    const { layout, labelCol } = useContext(ItemsContext)

    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return rootRef.current
    })

    const { span: globalSpan, ellipsis: globalEllipsis } = labelCol || {}

    const isEmpty = !children && !help

    return (
      <Row.Col
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-form-item-label',
          className,
          isEmpty ? 'lyrixi-hide' : ''
        )}
        span={layout === 'horizontal' ? span || globalSpan || 8 : 24}
      >
        {/* Element: Children */}
        {children && (
          <Div className="lyrixi-form-item-label-text" ellipsis={ellipsis || globalEllipsis}>
            {children}
          </Div>
        )}

        {/* Value & Display Value: Help */}
        {help && (
          <i
            className="lyrixi-form-item-help"
            onClick={() => {
              Toast.show({ content: help })
            }}
          ></i>
        )}

        {/* Value & Display Value: Required */}
        {required && <span className="lyrixi-form-item-required">*</span>}
      </Row.Col>
    )
  }
)

export default FormLabel
