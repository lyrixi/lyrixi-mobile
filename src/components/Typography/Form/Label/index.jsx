import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'
import FormContext from './../FormContext'
import Div from './../../Letter/Base'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Toast from './../../../Toast'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Toast } from 'lyrixi-mobile'
测试使用-end */

const FormLabel = forwardRef(
  ({ help, span, ellipsis, required, children, style, className }, ref) => {
    // 获取全局配置
    const { layout, labelCol } = useContext(FormContext)

    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    const { span: globalSpan, ellipsis: globalEllipsis } = labelCol || {}

    const isEmpty = !children && !help

    return (
      <div
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-form-item-label',
          className,
          isEmpty ? 'lyrixi-hide' : '',
          layout === 'lyrixi-horizontal' ? `lyrixi-col col-${span || globalSpan || 8}` : ''
        )}
        ref={rootRef}
      >
        {children && (
          <Div className="lyrixi-form-item-label-text" ellipsis={ellipsis || globalEllipsis}>
            {children}
          </Div>
        )}

        {help && (
          <i
            className="lyrixi-form-item-help"
            onClick={() => {
              Toast.show({ content: help })
            }}
          ></i>
        )}
        {required && <span className="lyrixi-form-item-required">*</span>}
      </div>
    )
  }
)

export default FormLabel
