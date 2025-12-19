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

const Range = forwardRef(
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
    const rootRef = useRef(null)
    const inputRef = useRef(null)
    const tooltipRef = useRef(null)
    const handleRef = useRef(null)
    const railRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        inputElement: inputRef.current,
        getElement: () => rootRef.current,
        getInputElement: () => inputRef.current
      }
    })

    useEffect(() => {
      updateContainer()
      hideTooltip(tooltipRef.current)
      // eslint-disable-next-line
    }, [])

    function handleChange(e) {
      if (disabled || readOnly) return
      let newValue = e.currentTarget.value

      if (newValue) newValue = Number(newValue || 0)
      if (onChange) {
        onChange(newValue)
      }

      // 更新位置
      updateContainer(newValue)
    }

    // 显示tooltip
    function handleTouchStart() {
      updateContainer()
      showTooltip(tooltipRef.current)
    }

    function handleTouchEnd() {
      hideTooltip(tooltipRef.current)
    }

    function updateContainer(newValue) {
      let currentValue = newValue ?? value ?? 0
      let percent = getPercent({ min, max, value: currentValue })
      handleRef.current.style.left = `calc(${percent}% - 8px)`
      tooltipRef.current.style.left = `calc(${percent}% - 12px)`
      railRef.current.style.width = `${percent}%`
      tooltipRef.current.innerHTML = currentValue
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
