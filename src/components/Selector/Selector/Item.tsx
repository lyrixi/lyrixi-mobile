import React, { forwardRef, useRef, useImperativeHandle, type CSSProperties, type ReactNode, type MouseEvent } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export interface SelectorItemProps {
  children?: ReactNode
  disabled?: boolean
  checked?: boolean
  className?: string
  style?: CSSProperties
  onChange?: (checked: boolean) => void
}

export type SelectorItemRef = {
  element: HTMLDivElement | null
  inputElement: HTMLInputElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLInputElement | null
}

// 按钮选择
const Item = forwardRef<SelectorItemRef, SelectorItemProps>(
  function SelectorItem(
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
  ) {
    // 节点
    const rootRef = useRef<HTMLDivElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
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
    function handleClick(e: MouseEvent<HTMLDivElement>) {
      if (disabled) return
      onChange?.(e.currentTarget.getAttribute('data-checked') !== 'true')
    }

    return (
      <div
        ref={rootRef}
        // Status
        data-disabled={disabled ? 'true' : 'false'}
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
