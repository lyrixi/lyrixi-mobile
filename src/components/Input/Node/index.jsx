import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'
import { splitInputStyle, correctValue as _correctValue } from './../Text/utils'
import getClearNode from './../Text/getClearNode'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 内部显示div
const InputNode = (
  {
    id,
    type = 'text', // 类型: text | number

    // Value & Display Value
    value,
    placeholder,
    formatter,

    // Status
    readOnly,
    disabled,
    allowClear,
    cursor = null, // 文字末尾光标是否显示, null: 不控制, false: 不显示, true: 显示

    // Style
    style: externalStyle,
    className,

    // Element
    leftIconNode,
    rightIconNode,
    clearRender,

    // Validate
    precision,
    trim,
    min,
    max,
    maxLength,

    // Events
    onChange,
    onClick,
    onFocus,
    onBlur
  },
  ref
) => {
  let displayValue = typeof formatter === 'function' ? formatter(value) : null

  // InputStyle
  const { style, inputStyle } = splitInputStyle(externalStyle)

  // Elements
  const rootRef = useRef(null)
  const inputRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      inputElement: inputRef.current,
      getElement: () => {
        return rootRef.current
      },
      getInputElement: () => {
        return inputRef.current
      },
      correctValue: correctValue,
      focus: () => {
        console.log('Input.Node please config setCursor to display cursor')
      },
      blur: () => {
        console.log('Input.Node please config setCursor to hide cursor')
      }
    }
  })

  // Initialize
  useEffect(() => {
    if (!value) return

    // 矫正为正确的值
    let val = correctValue(value)
    // eslint-disable-next-line
    if (val != value) {
      onChange(val)
    }
    // eslint-disable-next-line
  }, [])

  // onFocus & onBlur
  useEffect(() => {
    if (typeof cursor !== 'boolean') return

    if (cursor) {
      onFocus &&
        onFocus({
          target: inputRef.current,
          currentTarget: inputRef.current
        })
    } else {
      handleBlur()
    }
    // eslint-disable-next-line
  }, [cursor])

  function handleBlur() {
    if (readOnly || disabled) {
      return
    }

    let val = value

    // trim
    if (trim && val && typeof val === 'string' && val.trim() !== val) {
      val = val.trim()
    }

    // 数值框失焦时需要矫正数值
    if (type === 'number') {
      // 正常输入：矫正最大最小值、小数点、最大长度
      if (val && !isNaN(val)) {
        // 纠正数字
        val = correctValue(val)
      }
      // 输入错误或真的为空：用于解决ios可以输入字母中文等问题
      else {
        val = ''
      }
    }

    // 修改完回调
    if (val !== value) {
      if (onChange) onChange(val, { action: 'blur' })
    }

    if (onBlur)
      onBlur({
        target: inputRef.current,
        currentTarget: inputRef.current
      })
  }

  // 矫正最大长度和小数位截取
  function correctValue(val) {
    return _correctValue(val, { type, min, max, maxLength, trim, precision })
  }

  // 点击清除
  async function handleClear(e) {
    e && e?.stopPropagation?.()

    // Callback
    typeof onChange === 'function' && onChange('', { action: 'clickClear' })
  }

  return (
    <div
      ref={rootRef}
      // Element
      id={id}
      // Style
      style={style}
      className={DOMUtil.classNames(
        `lyrixi-input`,
        className,
        displayValue ? 'lyrixi-has-formatter' : '',
        disabled ? 'lyrixi-input-disabled' : '',
        readOnly ? 'lyrixi-input-readOnly' : ''
      )}
      // Events
      onClick={(e) => {
        if (disabled) return
        onClick && onClick(e)
      }}
    >
      {/* Element: Left Icon */}
      {leftIconNode}

      {/* Element: Main */}
      <div
        className={DOMUtil.classNames(
          'lyrixi-input-node',
          disabled ? 'lyrixi-input-disabled' : '',
          readOnly ? 'lyrixi-input-readOnly' : ''
        )}
      >
        {/* Element: Input Text */}
        <div
          ref={inputRef}
          // Style
          style={inputStyle}
          className={DOMUtil.classNames(
            'lyrixi-input-text',
            // 无值且没有聚焦时, 显示placeholder
            !value && placeholder && !cursor ? 'lyrixi-input-placeholder' : '',
            cursor ? 'lyrixi-input-focus' : ''
          )}
        >
          {typeof value === 'object' || !value || cursor ? placeholder : value}
        </div>

        {/* Value & Display Value: Formatter Display */}
        {displayValue ? <div className="lyrixi-input-formatter">{displayValue}</div> : null}
      </div>

      {/* Element: Clear Icon */}
      {disabled || !allowClear
        ? null
        : getClearNode({
            clearRender,
            allowClear,
            value,
            onClear: handleClear
          })}

      {/* Element: Right Icon */}
      {rightIconNode}
    </div>
  )
}

export default forwardRef(InputNode)
