import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import {
  splitInputStyle,
  maxLengthFormatter,
  minMaxFormatter,
  precisionFormatter,
  correctValue as _correctValue
} from './utils'
import renderClear from './renderClear'

import type { InputTextElement, InputTextProps, InputTextRef } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const InputText = (
  {
    id,
    name,
    type = 'text', // 类型: text | number | tel | password | search | textarea | autoSize

    // Value & Display Value
    value = '',
    placeholder,
    formatter,

    // Status
    readOnly,
    disabled,
    allowClear,
    autoFocus,
    autoSelect,
    enableCompositionEnd = false, // true：仅输入法落字（compositionend）后触发 onChange，用 e.target.composing 控制

    // Style
    style: externalStyle,
    className,

    // Element
    inputRender,
    leftIconNode,
    rightIconNode,
    clearRender,

    // Validate
    precision, // 小数精度, 只有数值框才生效
    trim, // [Number框]小数位补0, true: 不补0; false: 补0。 [Text框]影响左右空格;
    max,
    min,
    maxLength,

    // input属性
    inputMode,
    enterKeyHint,
    autoComplete,
    autoCorrect,
    spellCheck,

    // Events
    onClick,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onPressEnter
  }: InputTextProps,
  ref: React.Ref<InputTextRef>
) => {
  const textValue = String(value ?? '')

  // 输入框展示值
  const displayValue = typeof formatter === 'function' ? formatter(value ?? '') : null

  // Elements
  const rootRef = useRef<HTMLDivElement>(null)

  const inputRef = useRef<InputTextElement | null>(null)

  // InputStyle
  const { style, inputStyle } = splitInputStyle(externalStyle)

  useEffect(() => {
    if (!inputRef.current) return
    // 自动获取焦点
    if (autoFocus) {
      focus()
    }

    if (!textValue) return

    let val = ''

    // 矫正为正确的值
    val = String(correctValue(value ?? ''))

    // 矫正后的值和矫正前的值不一致, 需要强制修改文本框内的值
    if (val && textValue && String(val) !== textValue) {
      onChange && onChange(val, { action: 'load' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // enableCompositionEnd 时为非受控，父组件 value 变化（如表单重置）时需同步到 input
  useEffect(() => {
    if (!enableCompositionEnd || !inputRef.current) return
    if (inputRef.current.composing) return
    if (inputRef.current.value !== textValue) {
      inputRef.current.value = textValue
    }
    // eslint-disable-next-line
  }, [value, enableCompositionEnd])

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
      focus: focus,
      blur: () => {
        inputRef.current?.blur?.()
      }
    } as InputTextRef
  })

  // 矫正最大长度和小数位截取
  function correctValue(val: string | number): string | number {
    return _correctValue(val, { type, min, max, maxLength, trim, precision })
  }

  // 获取焦点
  function focus() {
    if (disabled || readOnly || !inputRef.current) return
    inputRef.current.focus()
    // 只有获取焦点以后才能选中
    if (autoSelect) {
      inputRef.current.select()
    }
    // 设置光标位置到文本末尾(number框不支持)
    else if (
      inputRef.current.value.length &&
      (inputRef.current as HTMLInputElement).setSelectionRange
    ) {
      const length = inputRef.current.value.length
      try {
        ;(inputRef.current as HTMLInputElement).setSelectionRange(length, length)
      } catch (e) {
        console.log(e)
      }
    }
  }

  // 获取焦点时, 如果readOnly或者disabled时, 需要立即失去焦点, 解决ios会出现底栏的问题
  function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (readOnly || disabled) {
      e.target.blur()
      return
    }
    if (onFocus) onFocus(e)
  }

  // 修改值
  async function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = e.target as InputTextElement
    // enableCompositionEnd 时，组合中不触发 onChange（由 handleCompositionEnd 落字后触发）
    if (enableCompositionEnd && target?.composing) {
      return
    }
    if (target.value === textValue) {
      return
    }

    let val = target.value
    // 此处不宜用target?.validity?.badInput矫正数值, 因为ios上.也返回空

    // 矫正maxLength和小数点位数(不能矫正其它框，因为矫正将无法输入中文)
    if (val && type === 'number') {
      // 不能校验最小值，因为min={0.1}时，无法删除
      val = String(minMaxFormatter(val, { max }))
      val = String(precisionFormatter(val, { precision, trim: false }))
      val = String(maxLengthFormatter(val, { maxLength }))
      if (target.value !== val) {
        target.value = val
      }
    }

    // 触发onChange: 使用defaultValue时, 删除到点时会直接把点清空
    if (onChange) onChange(val, { action: 'change' })
  }

  // enableCompositionEnd输入完成触发onChange: 输入法开始组合（如拼音未选字）
  function handleCompositionStart(
    e: React.CompositionEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    ;(e.target as InputTextElement).composing = true
  }

  // enableCompositionEnd输入完成触发onChange: 输入法结束组合（选字/回车落字后）, 再触发 onChange
  function handleCompositionEnd(e: React.CompositionEvent<HTMLInputElement | HTMLTextAreaElement>) {
    ;(e.target as InputTextElement).composing = false
    handleChange(e as unknown as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
  }

  // 数值框失去焦点, 校验最大值和最小值
  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (readOnly || disabled) {
      return
    }
    let target = e.target
    let val = target.value

    // trim
    if (trim && val && typeof val === 'string' && val.trim() !== val) {
      val = val.trim()
    }

    // 数值框失焦时需要矫正数值
    if (type === 'number') {
      // 正常输入：矫正最大最小值、小数点、最大长度
      if (val && !isNaN(Number(val))) {
        // 纠正数字
        val = String(correctValue(val))
      }
      // 输入错误或真的为空：用于解决ios可以输入字母中文等问题
      else {
        val = ''
      }

      target.value = val
    }

    // 修改完回调
    if (val !== textValue) {
      if (onChange) onChange(val, { action: 'blur' })
    }

    const inputEl = inputRef.current
    if (!inputEl?.preventBlur) {
      if (onBlur) onBlur(e)
    }
  }

  // 点击清除(blur生效)
  async function handleClear(e?: React.MouseEvent | React.TouchEvent) {
    e && (e as React.SyntheticEvent)?.stopPropagation?.()

    // 删除阻止blur
    if (inputRef.current) {
      delete inputRef.current.preventBlur
    }

    // 获取焦点
    focus()

    // Callback
    typeof onChange === 'function' && onChange('', { action: 'clickClear' })
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    onKeyDown && onKeyDown(e)
    if (typeof onPressEnter !== 'function') return
    // 监听 Enter 键（keyCode 13 或 'Enter'）
    if (e.key === 'Enter' || e.keyCode === 13) {
      // 阻止默认行为（防止表单提交导致的页面刷新）
      e.preventDefault()

      // 失焦收起键盘（移动端）
      e.currentTarget.blur()

      // 执行搜索
      onPressEnter(e)
    }
  }

  // render
  function renderInput() {
    if (typeof inputRender === 'function') {
      return inputRender({
        inputRef,
        id,
        name,
        inputMode,
        enterKeyHint,
        autoComplete,
        autoCorrect,
        spellCheck,
        autoFocus,
        ...(enableCompositionEnd ? { defaultValue: textValue } : { value: textValue }),
        maxLength,
        readOnly,
        disabled,
        placeholder,
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        onCompositionStart: enableCompositionEnd ? handleCompositionStart : undefined,
        onCompositionEnd: enableCompositionEnd ? handleCompositionEnd : undefined
      })
    }

    // autoSize类型
    if (type === 'autoSize') {
      return (
        <div className="lyrixi-input-autoSize">
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            name={name}
            // Value & Display Value
            {...(enableCompositionEnd ? { defaultValue: textValue } : { value: textValue })}
            placeholder={placeholder}
            // Status
            readOnly={readOnly}
            disabled={disabled}
            autoFocus={autoFocus}
            // Style
            style={inputStyle}
            className="lyrixi-input-autoSize-textarea"
            // Validate
            maxLength={maxLength}
            // Other
            inputMode={inputMode}
            enterKeyHint={enterKeyHint}
            autoComplete={autoComplete}
            autoCorrect={autoCorrect}
            spellCheck={spellCheck}
            // Events
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            onCompositionStart={enableCompositionEnd ? handleCompositionStart : undefined}
            onCompositionEnd={enableCompositionEnd ? handleCompositionEnd : undefined}
          ></textarea>
          <pre className="lyrixi-input-autoSize-pre" style={inputStyle}>
            <span>{textValue}</span>
          </pre>
        </div>
      )
    }
    // textarea类型
    if (type === 'textarea') {
      // 如果值绑定属性,则只有通过父组件的prop来改变值
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          name={name}
          // Value & Display Value
          {...(enableCompositionEnd ? { defaultValue: textValue } : { value: textValue })}
          placeholder={placeholder}
          // Status
          readOnly={readOnly}
          disabled={disabled}
          autoFocus={autoFocus}
          // Style
          style={inputStyle}
          className="lyrixi-input-textarea"
          // Validate
          maxLength={maxLength}
          // Other
          inputMode={inputMode}
          enterKeyHint={enterKeyHint}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          spellCheck={spellCheck}
          // Events
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          onCompositionStart={enableCompositionEnd ? handleCompositionStart : undefined}
          onCompositionEnd={enableCompositionEnd ? handleCompositionEnd : undefined}
        ></textarea>
      )
    }

    // 其它类型
    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        name={name}
        type={type} // number类型需要text，否则focus无法设置光标到末尾
        // Value & Display Value
        {...(enableCompositionEnd ? { defaultValue: textValue } : { value: textValue })}
        placeholder={placeholder}
        // Status
        readOnly={readOnly}
        disabled={disabled}
        autoFocus={autoFocus}
        // Style
        style={inputStyle}
        className="lyrixi-input-text"
        // Validate
        min={typeof min === 'number' ? min : ''}
        max={typeof max === 'number' ? max : ''}
        maxLength={maxLength}
        // Other
        inputMode={inputMode}
        enterKeyHint={enterKeyHint}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        spellCheck={spellCheck}
        // Events
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onCompositionStart={enableCompositionEnd ? handleCompositionStart : undefined}
        onCompositionEnd={enableCompositionEnd ? handleCompositionEnd : undefined}
      />
    )
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
      onClick={onClick}
    >
      {/* Left */}
      {leftIconNode}

      <div
        className={DOMUtil.classNames(
          'lyrixi-input-node',
          disabled ? 'lyrixi-input-disabled' : '',
          readOnly ? 'lyrixi-input-readOnly' : ''
        )}
      >
        {/* Main */}
        {renderInput()}

        {/* Blur display value */}
        {displayValue ? (
          <div
            className="lyrixi-input-formatter"
            style={inputStyle}
            // Click to focus text
            onClick={() => {
              focus()
            }}
          >
            {displayValue}
          </div>
        ) : null}
      </div>

      {/* Clear Icon */}
      {disabled || !allowClear
        ? null
        : renderClear({
            clearRender,
            allowClear,
            value: textValue,
            onClear: handleClear,
            onTouchStart: () => {
              if (inputRef.current) {
                inputRef.current.preventBlur = true
              }
            }
          })}

      {/* Right */}
      {rightIconNode}
    </div>
  )
}
export default forwardRef<InputTextRef, InputTextProps>(InputText)
