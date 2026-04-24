import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import Icon from './Icon'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export interface CheckboxRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface CheckboxProps {
  checked?: boolean
  readOnly?: boolean
  disabled?: boolean
  variant?: string
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
  iconRender?: (props: { checked?: boolean }) => React.ReactNode
  iconPosition?: 'left' | 'right'
  onChange?: (checked: boolean) => void
}

// 复选框
const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  (
    {
      checked,
      readOnly,
      disabled,
      variant,
      style,
      className,
      children,
      iconRender,
      iconPosition = 'left',
      onChange
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => {
          return rootRef.current
        }
      }
    })

    function handleClick() {
      if (disabled || readOnly) return
      if (onChange) onChange(!checked)
    }

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
        disabled={disabled}
        readOnly={readOnly}
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-checkbox',
          className,
          checked ? 'lyrixi-checked' : ''
        )}
        onClick={handleClick}
      >
        {iconPosition !== 'right' && IconNode}
        {children && <span className="lyrixi-checkbox-content">{children}</span>}
        {iconPosition === 'right' && IconNode}
      </div>
    )
  }
)

export default Checkbox
