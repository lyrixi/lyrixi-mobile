import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import getPercent from './getPercent'
import showTooltip from './showTooltip'
import hideTooltip from './hideTooltip'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

interface RangeRef {
  element: HTMLDivElement | null
  inputElement: HTMLInputElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLInputElement | null
}

interface RangeProps {
  id?: string
  name?: string
  value?: number
  readOnly?: boolean
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}

const Range = forwardRef<RangeRef, RangeProps>(
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
      className,
      style,

      // Validate
      min = 0,
      max = 100,
      step = 1,

      // Events
      onChange
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)

    const inputRef = useRef<HTMLInputElement>(null)

    const tooltipRef = useRef<HTMLDivElement>(null)

    const handleRef = useRef<HTMLDivElement>(null)

    const railRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
      updateContainer()
      if (tooltipRef.current) hideTooltip(tooltipRef.current)
      // eslint-disable-next-line
    }, [])


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

      // 更新位置
      updateContainer(newValue as number)
    }


    // 显示tooltip
    function handleTouchStart() {
      updateContainer()
      if (tooltipRef.current) showTooltip(tooltipRef.current)
    }


    function handleTouchEnd() {
      if (tooltipRef.current) hideTooltip(tooltipRef.current)
    }


    function updateContainer(newValue?: number) {
      let currentValue = newValue ?? value ?? 0
      let percent = getPercent({ min, max, value: currentValue })
      if (handleRef.current) handleRef.current.style.left = `calc(${percent}% - 8px)`
      if (tooltipRef.current) tooltipRef.current.style.left = `calc(${percent}% - 12px)`
      if (railRef.current) railRef.current.style.width = `${percent}%`
      if (tooltipRef.current) tooltipRef.current.innerHTML = String(currentValue)
    }


    return (
      <div
        ref={rootRef}
        id={id}
        // Style
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-input-range',
          className,
          readOnly ? 'lyrixi-input-readOnly' : '',
          disabled ? 'lyrixi-input-disabled' : ''
        )}
        // Events
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Element: Input */}
        <input
          ref={inputRef}
          name={name}
          type="range"
          className="lyrixi-input-range-input"
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

        {/* Element: Rail */}
        <div className="lyrixi-input-range-rail">
          <div className="lyrixi-input-range-rail-active" ref={railRef}></div>
        </div>

        {/* Element: Handle */}
        <div ref={handleRef} className="lyrixi-input-range-handle">
          <div className="lyrixi-input-range-handle-icon"></div>
        </div>

        {/* Element: Tooltip */}
        <div ref={tooltipRef} className="lyrixi-input-range-tooltip">
          {value}
        </div>
      </div>
    )
  }
)

export default Range
