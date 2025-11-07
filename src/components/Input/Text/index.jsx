import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import {
  splitInputStyle,
  maxLengthFormatter,
  minMaxFormatter,
  precisionFormatter,
  correctValue as _correctValue
} from './utils'
import getClearNode from './getClearNode'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import MathUtil from '../../../utils/MathUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, MathUtil } from 'lyrixi-mobile'
测试使用-end */

const InputText = (
  {
    // 容器
    id,
    type = 'text', // 类型: text | number | tel | password | search | autoFit
    style: externalStyle,
    className,
    readOnly,
    disabled,
    // 文本框
    name,
    value = '',
    inputMode,
    enterKeyHint,
    autoComplete,
    autoCorrect,
    spellCheck,
    formatter, // 指定输入框展示值的格式
    // 小数精度, 只有数值框才生效
    precision,
    // [Number框]小数位补0, true: 不补0; false: 补0。 [Text框]影响左右空格;
    trim,
    max,
    min,
    placeholder,
    maxLength,
    // 自动获取焦点
    autoFocus, // 渲染时自动获取焦点
    autoSelect, // 渲染时自动选中
    // 左右图标
    leftIcon,
    rightIcon,
    // 自定义渲染文本框
    inputRender,
    // 清除按键
    clearRender,
    allowClear,
    // events
    onClick,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onPressEnter,

    // 扩展属性
    ...props
  },
  ref
) => {
  // 输入框展示值
  const displayValue = typeof formatter === 'function' ? formatter(value) : null

  // DOM
  const rootRef = useRef(null)
  const inputRef = useRef(null)

  // InputStyle
  const { style, inputStyle } = splitInputStyle(externalStyle)

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
      focus: focus
    }
  })

  useEffect(() => {
    if (!inputRef.current) return
    // 自动获取焦点
    if (autoFocus) {
      focus()
    }

    if (!value) return

    let val = ''

    // 矫正为正确的值
    val = correctValue(value)

    // 矫正后的值和矫正前的值不一致, 需要强制修改文本框内的值
    if (val !== value) {
      onChange(val)
    }
  }, []) // eslint-disable-line

  // 矫正最大长度和小数位截取
  function correctValue(val) {
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
    else if (inputRef.current.value.length && inputRef.current.setSelectionRange) {
      const length = inputRef.current.value.length
      try {
        inputRef.current.setSelectionRange(length, length)
      } catch (e) {
        console.log(e)
      }
    }
  }

  // 获取焦点时, 如果readOnly或者disabled时, 需要立即失去焦点, 解决ios会出现底栏的问题
  function handleFocus(e) {
    if (readOnly || disabled) {
      e.target.blur()
      return
    }
    if (onFocus) onFocus(e)
  }

  // 修改值
  async function handleChange(e) {
    let target = e.target
    let val = target.value
    // 此处不宜用target?.validity?.badInput矫正数值, 因为ios上.也返回空

    // 矫正maxLength和小数点位数(不能矫正其它框，因为矫正将无法输入中文)
    if (val && type === 'number') {
      // 不能校验最小值，因为min={0.1}时，无法删除
      val = minMaxFormatter(val, { max })
      val = precisionFormatter(val, { precision, trim: false })
      val = MathUtil.extractNumber(val)
      val = maxLengthFormatter(val, { maxLength })
      if (target.value !== val) {
        target.value = val
      }
    }

    // 触发onChange: 使用defaultValue时, 删除到点时会直接把点清空
    if (onChange) onChange(val, { action: 'change' })
  }

  // 数值框失去焦点, 校验最大值和最小值
  function handleBlur(e) {
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
      if (val && !isNaN(val)) {
        // 纠正数字
        val = correctValue(val)
      }
      // 输入错误或真的为空：用于解决ios可以输入字母中文等问题
      else {
        val = ''
      }

      target.value = val
    }

    // 修改完回调
    if (val !== value) {
      if (onChange) onChange(val, { action: 'blur' })
    }

    if (!inputRef.current?.preventBlur) {
      if (onBlur) onBlur(e)
    }
  }

  // 点击清除(blur生效)
  async function handleClear(e) {
    e && e?.stopPropagation?.()

    // 删除阻止blur
    delete inputRef?.current?.preventBlur

    // 获取焦点
    focus()

    // Callback
    typeof onChange === 'function' && onChange('', { action: 'clickClear' })
  }

  function handleKeyDown(e) {
    onKeyDown && onKeyDown(e)
    if (typeof onPressEnter !== 'function') return
    // 监听 Enter 键（keyCode 13 或 'Enter'）
    if (e.key === 'Enter' || e.keyCode === 13) {
      // 阻止默认行为（防止表单提交导致的页面刷新）
      e.preventDefault()

      // 失焦收起键盘（移动端）
      e.target.blur()

      // 执行搜索
      onPressEnter(e)
    }
  }

  // render
  function getInputNode() {
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
        value,
        maxLength,
        readOnly,
        disabled,
        placeholder,
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown
      })
    }

    // autoFit类型
    if (type === 'autoFit') {
      return (
        <div className="lyrixi-input-autofit">
          <textarea
            ref={inputRef}
            name={name}
            inputMode={inputMode}
            enterKeyHint={enterKeyHint}
            autoComplete={autoComplete}
            autoCorrect={autoCorrect}
            spellCheck={spellCheck}
            autoFocus={autoFocus}
            value={value}
            maxLength={maxLength}
            readOnly={readOnly}
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            style={inputStyle}
            className="lyrixi-input-autofit-textarea"
          ></textarea>
          <pre className="lyrixi-input-autofit-pre" style={inputStyle}>
            <span>{value}</span>
          </pre>
        </div>
      )
    }
    // textarea类型
    if (type === 'textarea') {
      // 如果值绑定属性,则只有通过父组件的prop来改变值
      return (
        <textarea
          ref={inputRef}
          name={name}
          inputMode={inputMode}
          enterKeyHint={enterKeyHint}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          spellCheck={spellCheck}
          autoFocus={autoFocus}
          value={value}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          className="lyrixi-input-textarea"
          style={inputStyle}
        ></textarea>
      )
    }

    // 其它类型
    return (
      <input
        ref={inputRef}
        name={name}
        type={type} // number类型需要text，否则focus无法设置光标到末尾
        inputMode={inputMode}
        enterKeyHint={enterKeyHint}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        spellCheck={spellCheck}
        autoFocus={autoFocus}
        value={value}
        min={typeof min === 'number' ? min : ''}
        max={typeof max === 'number' ? max : ''}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        style={inputStyle}
        className="lyrixi-input-text"
      />
    )
  }

  return (
    <div
      {...props}
      id={id}
      style={style}
      className={DOMUtil.classNames(
        `lyrixi-input`,
        className,
        displayValue ? 'lyrixi-has-formatter' : '',
        disabled ? 'lyrixi-disabled' : '',
        readOnly ? 'lyrixi-readOnly' : ''
      )}
      onClick={onClick}
      ref={rootRef}
    >
      {/* Left */}
      {leftIcon}

      <div
        className={DOMUtil.classNames(
          'lyrixi-input-node',
          disabled ? 'lyrixi-disabled' : '',
          readOnly ? 'lyrixi-readOnly' : ''
        )}
      >
        {/* Main */}
        {getInputNode()}

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
        : getClearNode({
            clearRender,
            allowClear,
            value,
            onClear: handleClear,
            onTouchStart: (e) => {
              inputRef.current.preventBlur = true
            }
          })}

      {/* Right */}
      {rightIcon}
    </div>
  )
}

export default forwardRef(InputText)
