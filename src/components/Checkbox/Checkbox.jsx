import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 复选框
const Checkbox = forwardRef(
  (
    {
      iconRender,
      iconPosition = 'left',

      checked,

      readOnly,
      disabled,

      children,
      onChange,

      // 其它属性
      className,
      ...props
    },
    ref
  ) => {
    // Expose
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => {
          return rootRef.current
        }
      }
    })

    // 点击回调
    function handleClick() {
      if (disabled || readOnly) return
      if (onChange) onChange(!checked)
    }

    // 获取图标节点
    function getIconNode() {
      if (typeof iconRender === 'function') {
        return iconRender({ checked, className: 'checkbox-icon' })
      }
      return <span className="lyrixi-checkbox-icon lyrixi-default" />
    }
    const IconNode = getIconNode()

    return (
      <div
        {...props}
        onClick={handleClick}
        disabled={disabled}
        readOnly={readOnly}
        className={DOMUtil.classNames(
          'lyrixi-checkbox',
          className,
          checked ? 'lyrixi-checked' : ''
        )}
        ref={rootRef}
      >
        {iconPosition !== 'right' && IconNode}
        {children && <span className="lyrixi-checkbox-content">{children}</span>}
        {iconPosition === 'right' && IconNode}
      </div>
    )
  }
)

export default Checkbox
