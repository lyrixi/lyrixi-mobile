import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import InputText from './InputText'
import InputNumber from './InputNumber'
import formatValue from './formatValue'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const InputOTP = forwardRef(
  (
    {
      // 值控制
      value = [],
      onChange,
      onComplete,

      // OTP配置
      maxLength = 6,
      type = 'number', // 'text' 或 'number'
      disabled = false,
      readOnly = false,

      // 样式配置
      className,
      style
    },
    ref
  ) => {
    // eslint-disable-next-line
    value = formatValue(value, maxLength)

    const rootRef = useRef(null)
    const inputRef = useRef([])

    // Expose
    useImperativeHandle(ref, () => ({
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      focus: focus,
      blur: blur
    }))

    // 获焦
    function focus(itemIndex) {
      inputRef.current?.focus?.(itemIndex || 0)
    }

    // 失焦
    function blur() {
      inputRef.current?.blur?.()
    }

    // 粘贴值, 更新数组值
    function textToValue(text) {
      if (typeof text === 'number') {
        // eslint-disable-next-line
        text = text.toString()
      }
      if (!text) return

      const newValue = Array(maxLength).fill('')
      for (let i = 0; i < Math.min(text.length, maxLength); i++) {
        newValue[i] = text[i]
      }

      if (onChange) {
        onChange(newValue)
      }

      if (newValue.join('').length === maxLength && onComplete) {
        onComplete(newValue)
      }

      // 最后一个有值的输入框获焦
      const lastIndex = Math.min(newValue.join('').length, maxLength) - 1
      focus(lastIndex)
    }

    // 修改项, 更新数组值
    function updateItem(itemIndex, newItemValue) {
      const newValue = [...value]
      newValue[itemIndex] = newItemValue

      if (onChange) {
        onChange(newValue)
      }

      if (newValue.join('').length === maxLength && onComplete) {
        onComplete(newValue)
      }
    }

    // 处理输入变化
    const handleChange = (itemIndex, newItemValue) => {
      console.log('handleChange', itemIndex, newItemValue)
      if (disabled || readOnly) return

      // 更新分割值和完整值
      updateItem(itemIndex, newItemValue)

      // 自动跳转到下一个输入框
      if (newItemValue) {
        focus(itemIndex + 1)
      }
    }

    // 处理键盘事件
    const handleKeyDown = (key, itemIndex) => {
      if (disabled || readOnly) return

      // 处理退格键
      if (key === 'Backspace') {
        // 当前项没有值时, 获焦上一个输入框
        if (!value[itemIndex] && itemIndex > 0) {
          focus(itemIndex - 1)
        }
      }

      // 处理方向键
      if (key === 'ArrowLeft' && itemIndex > 0) {
        focus(itemIndex - 1)
      }
      if (key === 'ArrowRight' && itemIndex < maxLength - 1) {
        focus(itemIndex + 1)
      }
    }

    // 处理粘贴
    const handlePaste = (e) => {
      if (disabled || readOnly) return
      e.preventDefault()

      const pastedText = e.clipboardData.getData('text')
      textToValue(pastedText)
    }

    const InputComponent = type === 'number' ? InputNumber : InputText
    return (
      <div
        ref={rootRef}
        className={DOMUtil.classNames(
          'lyrixi-input-otp',
          className,
          disabled ? 'lyrixi-input-disabled' : '',
          readOnly ? 'lyrixi-input-readOnly' : ''
        )}
        style={style}
      >
        <InputComponent
          values={value}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          ref={inputRef}
        />
      </div>
    )
  }
)

export default InputOTP
