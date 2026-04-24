import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

interface SwitchProps {
  checked?: boolean
  readOnly?: boolean
  disabled?: boolean
  size?: string
  style?: React.CSSProperties
  className?: string
  on?: React.ReactNode
  off?: React.ReactNode
  onChange?: (checked: boolean) => void
}

interface SwitchRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

// 开关控件
const Switch = forwardRef<SwitchRef, SwitchProps>(
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
    const rootRef = useRef<HTMLDivElement>(null)

    // 节点
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-switch',
          `lyrixi-${size}`,
          className,
          checked ? 'lyrixi-active' : '',
          readOnly ? 'lyrixi-readOnly' : '',
          disabled ? 'lyrixi-disabled' : (disabled === false ? '' : '')
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
