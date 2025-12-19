import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 按钮选择
const Item = forwardRef(
  (
    {
      // Value & Display Value
      children,

      // Status
      disabled = false,
      checked = false,

      // Style
      className,
      style,

      // Events
      onChange
    },
    ref
  ) => {
    // 节点
    const rootRef = useRef(null)
    const inputRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        inputElement: inputRef.current,
        getElement: () => {
          return rootRef.current
        },
        getInputElement: () => {
          return inputRef.current
        }
      }
    })

    // 点击回调
    function handleClick(e) {
      if (disabled) return
      if (onChange) onChange(e.currentTarget.getAttribute('data-checked') !== 'true')
    }

    return (
      <div
        ref={rootRef}
        // Status
        disabled={disabled}
        data-checked={checked}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-selector-item', className)}
        // Events
        onClick={handleClick}
      >
        {/* Element: Name */}
        <div className="lyrixi-selector-item-name">{children}</div>

        {/* Element: Checked Mark */}
        <div className="lyrixi-selector-item-checked-mark">
          <i className="lyrixi-selector-item-checked-mark-icon"></i>
        </div>
      </div>
    )
  }
)

export default Item
