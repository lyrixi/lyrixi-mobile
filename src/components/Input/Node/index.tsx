import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'
import { splitInputStyle, correctValue as _correctValue } from './../Text/utils'
import renderClear from './../Text/renderClear'

import type { InputNodeProps, InputNodeRef } from '../types'
import getClearedValue from './getClearedValue'
import getStringValue from './getStringValue'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
import MathUtil from './../../../utils/MathUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, MathUtil, DOMUtil } from 'lyrixi-mobile'
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

    // Elements
    leftIconNode,
    rightIconNode,
    clearRender,

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
  }: InputNodeProps,
  ref: React.Ref<InputNodeRef>
) => {
  const displayValue = typeof formatter === 'function' ? formatter(value ?? null) : null

  // InputStyle
  const { style, inputStyle } = splitInputStyle(externalStyle)

  // Elements
  const rootRef = useRef<HTMLDivElement>(null)

  const inputRef = useRef<HTMLDivElement>(null)

  // Initialize：数值类型做 correctValue 矫正
  useEffect(() => {
    if (!MathUtil.isNumber(value) || type !== 'number') return

    const val = correctValue(String(value))
    if (val !== String(value)) {
      onChange?.(val, { action: 'load' })
    }
    // eslint-disable-next-line
  }, [])

  // onFocus & onBlur
  useEffect(() => {
    if (typeof cursor !== 'boolean') return

    if (cursor) {
      onFocus?.({
        target: inputRef.current,
        currentTarget: inputRef.current
      } as React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>)
    } else {
      handleBlur()
    }
    // eslint-disable-next-line
  }, [cursor])

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
    } as InputNodeRef
  })

  function handleBlur() {
    if (readOnly || disabled) {
      return
    }

    if (typeof value !== 'string') {
      if (onBlur) {
        onBlur({
          target: inputRef.current,
          currentTarget: inputRef.current
        } as React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>)
      }
      return
    }

    let val = value
    if (typeof val === 'string' && trim && val.trim() !== val) {
      val = val.trim()
    }

    if (type === 'number') {
      if (MathUtil.isNumber(val)) {
        val = String(correctValue(String(val)))
      } else {
        val = ''
      }
    }

    if (val !== value) {
      onChange?.(val, { action: 'blur' })
    }

    if (onBlur) {
      onBlur({
        target: inputRef.current,
        currentTarget: inputRef.current
      } as React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>)
    }
  }

  function correctValue(val: string): string {
    return _correctValue(val, { type, min, max, maxLength, trim, precision })
  }

  async function handleClear(e?: React.MouseEvent | React.TouchEvent) {
    e && (e as React.SyntheticEvent)?.stopPropagation?.()

    onChange?.(getClearedValue(value), { action: 'clickClear' })
  }

  const stringValue = getStringValue(value)

  return (
    <div
      ref={rootRef}
      id={id}
      style={style}
      className={DOMUtil.classNames(
        `lyrixi-input`,
        className,
        displayValue ? 'lyrixi-has-formatter' : '',
        disabled ? 'lyrixi-input-disabled' : '',
        readOnly ? 'lyrixi-input-readOnly' : ''
      )}
      onClick={(e) => {
        if (disabled) return
        onClick?.(e)
      }}
    >
      {leftIconNode}

      <div
        className={DOMUtil.classNames(
          'lyrixi-input-node',
          disabled ? 'lyrixi-input-disabled' : '',
          readOnly ? 'lyrixi-input-readOnly' : ''
        )}
      >
        <div
          ref={inputRef}
          style={inputStyle}
          className={DOMUtil.classNames('lyrixi-input-text', cursor ? 'lyrixi-input-focus' : '')}
        >
          {stringValue ? (
            stringValue
          ) : (
            <div className="lyrixi-input-placeholder">{placeholder}</div>
          )}
        </div>

        {displayValue ? <div className="lyrixi-input-formatter">{displayValue}</div> : null}
      </div>

      {disabled || !allowClear
        ? null
        : renderClear({
            clearRender,
            allowClear,
            clearable: ObjectUtil.isEmpty(value),
            onClear: handleClear
          })}

      {rightIconNode}
    </div>
  )
}
export default forwardRef<InputNodeRef, InputNodeProps>(InputNode)
