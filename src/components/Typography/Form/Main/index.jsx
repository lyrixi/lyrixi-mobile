import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'
import Div from './../../Letter/Base'
import FormContext from './../FormContext'
import getExtraNode from './getExtraNode'

const FormMain = forwardRef(
  ({ span, ellipsis, inputExtra, extra, error, children, ...props }, ref) => {
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

    const { span: globalSpan, ellipsis: globalEllipsis, ...mainColProps } = mainCol || {}

    return (
      <div
        {...mainColProps}
        {...props}
        className={`lyrixi-form-item-main${props.className ? ' ' + props.className : ''}${
          layout === 'horizontal' ? ` col col-${span || globalSpan || 16}` : ''
        }`}
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
