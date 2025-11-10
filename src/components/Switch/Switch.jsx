import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 开关控件
const Switch = forwardRef(
  (
    {
      // Value & Display Value
      checked,

      // Status
      readOnly,
      disabled,

      // Style
      size = 'm',
      style,
      className,

      // Element
      on,
      off,

      // Events
      onChange
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // 节点
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-switch',
          size,
          className,
          checked ? 'lyrixi-active' : '',
          readOnly ? 'lyrixi-readOnly' : '',
          disabled ? 'lyrixi-disabled' : disabled
        )}
        // Events
        onClick={(e) => {
          if (onChange) onChange(!checked)
          e.stopPropagation()
        }}
      >
        {/* Element: Handle */}
        <div className="lyrixi-switch-handle"></div>

        {/* Element: Inner */}
        <div className="lyrixi-switch-inner">
          <div className="lyrixi-switch-on">{on}</div>
          <div className="lyrixi-switch-off">{off}</div>
        </div>
      </div>
    )
  }
)

export default Switch
