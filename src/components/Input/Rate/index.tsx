import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

interface RateRef {
  element: HTMLDivElement | null
  inputElement: HTMLInputElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLInputElement | null
}

interface RateIconParams {
  className: string
  style?: React.CSSProperties
}

interface RateProps {
  id?: string
  name?: string
  value?: number
  readOnly?: boolean
  disabled?: boolean
  style?: React.CSSProperties
  className?: string
  iconRender?: (params: RateIconParams) => React.ReactNode
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}

// 评分组件
const Rate = forwardRef<RateRef, RateProps>(
  (
    {
      id,
      name,

      // Value & Display Value
      value = 0,

      // Status
      readOnly,
      disabled,

      // Style
      style,
      className,

      // Elements
      iconRender,

      // Validate
      min = 0,
      max = 5,
      step = 0.5,

      // Events
      onChange
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        inputElement: inputRef.current,
        getElement: () => rootRef.current,
        getInputElement: () => inputRef.current
      }
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (disabled || readOnly) return
      let newValue: string | number = e.currentTarget.value

      if (newValue) newValue = Number(newValue || 0)
      if (onChange) {
        onChange(newValue as number)
      }
    }

    function getItemActiveWidth(itemValue: number): string {
      // 当前项位于整数位
      if (itemValue <= value) {
        return '100%'
      }
      // 当前项位于小数位
      if (itemValue === Math.ceil(value)) {
        return `${(value - Math.floor(value)) * 100}%`
      }
      // 当前项超出
      return '0%'
    }

    // 获取图标节点
    function renderIcon(index: number, isActive: boolean = false): React.ReactNode {
      if (typeof iconRender === 'function') {
        return iconRender({
          className: isActive
            ? 'lyrixi-input-rate-item-icon-active'
            : 'lyrixi-input-rate-item-icon',
          style: isActive ? { width: getItemActiveWidth(index + 1) } : undefined
        })
      }

      // 默认图标
      return (
        <div
          className={
            isActive
              ? 'lyrixi-input-rate-item-icon-active lyrixi-default'
              : 'lyrixi-input-rate-item-icon lyrixi-default'
          }
          style={isActive ? { width: getItemActiveWidth(index + 1) } : undefined}
        ></div>
      )
    }

    return (
      <div
        ref={rootRef}
        id={id}
        // Style
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-input-rate',
          className,
          readOnly ? 'lyrixi-input-readOnly' : '',
          disabled ? 'lyrixi-input-disabled' : ''
        )}
      >
        {/* Element: Range Input */}
        <input
          ref={inputRef}
          name={name}
          type="range"
          className="lyrixi-input-rate-input"
          // Value & Display Value
          value={value}
          // Status
          readOnly={readOnly}
          disabled={disabled}
          // Validate
          min={min}
          max={max}
          step={step}
          // Events
          onChange={handleChange}
        />

        {/* Element: Icon & Active Icon */}
        {new Array(max).fill(1).map((item, index) => {
          const IconNode = renderIcon(index, false)
          const ActiveIconNode = renderIcon(index, true)

          return (
            <div className="lyrixi-input-rate-item" key={index}>
              {IconNode}
              {ActiveIconNode}
            </div>
          )
        })}
      </div>
    )
  }
)

export default Rate
