import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import Icon from './Icon'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 复选框
const Checkbox = forwardRef(
  (
    {
      // Value & Display Value
      checked,

      // Status
      readOnly,
      disabled,

      // Style
      variant,
      style,
      className,

      // Element
      children,
      iconRender,
      iconPosition = 'left',

      // Events
      onChange
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
        return iconRender({ checked })
      }
      return <Icon variant={variant} checked={checked} />
    }
    const IconNode = getIconNode()

    return (
      <div
        ref={rootRef}
        // Status
        disabled={disabled}
        readOnly={readOnly}
        // Style
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-checkbox',
          className,
          checked ? 'lyrixi-checked' : ''
        )}
        // Events
        onClick={handleClick}
      >
        {/* Element: Icon Left */}
        {iconPosition !== 'right' && IconNode}

        {/* Element: Children */}
        {children && <span className="lyrixi-checkbox-content">{children}</span>}

        {/* Element: Icon Right */}
        {iconPosition === 'right' && IconNode}
      </div>
    )
  }
)

export default Checkbox
