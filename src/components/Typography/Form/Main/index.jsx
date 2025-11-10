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
      span,
      ellipsis,
      inputExtra,
      extra,
      error,
      children, // 其它属性
      className,
      style
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
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-form-item-main',
          className,
          layout === 'horizontal' ? `lyrixi-col lyrixi-col-${span || globalSpan || 16}` : ''
        )}
        ref={rootRef}
      >
        <div className="lyrixi-form-item-main-input">
          {/* Children */}
          {ellipsis?.rows && typeof children === 'string' ? (
            <Div ellipsis={ellipsis || globalEllipsis}>{children}</Div>
          ) : (
            children
          )}
          {/* Input extra */}
          {getExtraNode(inputExtra, { className: 'lyrixi-form-item-main-input-extra' })}
        </div>
        {/* Error */}
        {error && <div className="lyrixi-form-item-main-error">{error}</div>}
        {/* Main extra */}
        {getExtraNode(extra, { className: 'lyrixi-form-item-main-extra' })}
      </div>
    )
  }
)

export default FormMain
