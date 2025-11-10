import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'
import Div from './../../Letter/Base'
import FormContext from './../FormContext'
import getExtraNode from './getExtraNode'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
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
      error,
      inputExtra,
      extra,
      children
    },
    ref
  ) => {
    // 获取全局配置
    const { layout, mainCol } = useContext(FormContext)

    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    const { span: globalSpan, ellipsis: globalEllipsis } = mainCol || {}

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-form-item-main',
          className,
          layout === 'horizontal' ? `lyrixi-col lyrixi-col-${span || globalSpan || 16}` : ''
        )}
      >
        <div className="lyrixi-form-item-main-input">
          {/* Element: Children */}
          {ellipsis?.rows && typeof children === 'string' ? (
            <Div ellipsis={ellipsis || globalEllipsis}>{children}</Div>
          ) : (
            children
          )}
          {/* Element: Input extra */}
          {getExtraNode(inputExtra, { className: 'lyrixi-form-item-main-input-extra' })}
        </div>
        {/* Value & Display Value: Error */}
        {error && <div className="lyrixi-form-item-main-error">{error}</div>}
        {/* Element: Main extra */}
        {getExtraNode(extra, { className: 'lyrixi-form-item-main-extra' })}
      </div>
    )
  }
)

export default FormMain
