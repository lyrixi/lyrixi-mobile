import React, { forwardRef, useRef, useImperativeHandle } from 'react'

import type { InputRateProps, InputRateRef } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 评分组件
const Rate = forwardRef<InputRateRef, InputRateProps>(
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
    const numericValue = typeof value === 'number' ? value : Number(value ?? 0)
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        inputElement: inputRef.current,
        getElement: () => rootRef.current,
        getInputElement: () => inputRef.current
      } as InputRateRef
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
      if (itemValue <= numericValue) {
        return '100%'
      }
      // 当前项位于小数位
      if (itemValue === Math.ceil(numericValue)) {
        return `${(numericValue - Math.floor(numericValue)) * 100}%`
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
          value={numericValue}
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
