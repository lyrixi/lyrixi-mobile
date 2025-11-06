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
    type = 'text',
    id,
    style: externalStyle,
    className,

    // 值控制
    value,
    onChange,
    onClick,
    onFocus,
    onBlur,

    // 数值校验
    min,
    max,
    maxLength,
    trim,
    precision,

    // 输入框配置
    formatter,
    placeholder,
    leftIcon,
    rightIcon,
    clearRender,
    allowClear,
    disabled,
    readOnly,

    // 光标控制属性, null: 不控制, false: 不显示, true: 显示
    cursor = null
  },
  ref
) => {
  let displayValue = typeof formatter === 'function' ? formatter(value) : null

  // InputStyle
  const { style, inputStyle } = splitInputStyle(externalStyle)

  // DOM
  const rootRef = useRef(null)
  const inputRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      inputDOM: inputRef.current,
      getRootDOM: () => {
        return rootRef.current
      },
      getInputDOM: () => {
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
      id={id}
      style={style}
      className={DOMUtil.classNames(
        `lyrixi-input`,
        className,
        displayValue ? 'lyrixi-has-formatter' : '',
        disabled ? 'lyrixi-disabled' : '',
        readOnly ? 'readonly' : ''
      )}
      onClick={(e) => {
        if (disabled) return
        onClick && onClick(e)
      }}
      ref={rootRef}
    >
      {/* Left */}
      {leftIcon}

      {/* Main */}
      <div
        className={DOMUtil.classNames(
          'lyrixi-input-node',
          disabled ? 'lyrixi-disabled' : '',
          readOnly ? 'lyrixi-readOnly' : ''
        )}
      >
        <div
          ref={inputRef}
          className={DOMUtil.classNames(
            'lyrixi-input-text',
            // 无值且没有聚焦时, 显示placeholder
            !value && placeholder && !cursor ? 'lyrixi-placeholder' : '',
            cursor ? 'lyrixi-focus' : ''
          )}
          style={inputStyle}
        >
          {typeof value === 'object' || !value || cursor ? placeholder : value}
        </div>

        {/* Blur display displayValue */}
        {displayValue ? <div className={`lyrixi-input-formatter`}>{displayValue}</div> : null}
      </div>

      {/* Clear Icon */}
      {disabled || !allowClear
        ? null
        : getClearNode({
            clearRender,
            allowClear,
            value,
            onClear: handleClear
          })}

      {/* Right */}
      {rightIcon}
    </div>
  )
}

export default forwardRef(InputNode)
