import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import InputNumber from './../Number'

// 内库使用-start
import MathUtil from './../../../utils/MathUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil } from 'lyrixi-mobile'
测试使用-end */

// 数值框
const NumberBox = forwardRef(
  (
    {
      id,
      name,

      // Value & Display Value
      value,
      placeholder,
      formatter,

      // Status
      readOnly,
      disabled,
      allowClear,
      autoFocus, // 渲染时自动获取焦点
      autoSelect, // 渲染时自动选中
      stepFocus, // 点击加减按钮获取焦点

      // Style
      className,
      style,
      plusClassName,
      plusStyle,
      minusClassName,
      minusStyle,

      // Element

      leftIconNode,
      rightIconNode,
      clearRender,
      children,

      // Validate
      precision, // 小数精度, 只有数值框才生效
      trim, // 小数位补0, true: 不补0; false: 补0;
      min,
      max,
      maxLength,

      // Events
      onClick,
      onChange,
      onBlur,
      onFocus,
      onInput,
      onCompositionStart, // 输入开始时
      onCompositionUpdate, // 输入进行中
      onCompositionEnd // 输入完成时
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const inputRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        inputDOM: inputRef?.current,
        getRootDOM: () => {
          return rootRef.current
        },
        getInputDOM: inputRef?.current?.getInputDOM,
        getInputRef: () => {
          return inputRef
        }
      }
    })

    useEffect(() => {
      let inputDOM = _getInputDOM()
      let val = (inputDOM?.value ? inputDOM.value : value) || ''
      updateState(val)
    }, [value]) // eslint-disable-line

    // 获取文本框
    function _getInputDOM() {
      if (inputRef?.current?.getInputDOM) {
        return inputRef.current.getInputDOM()
      }
      return null
    }

    // 更新禁用状态
    function updateState(val) {
      let minus = rootRef.current?.querySelector?.('.lyrixi-numberbox-button-minus')
      let plus = rootRef.current?.querySelector?.('.lyrixi-numberbox-button-plus')
      if (!isNaN(min) && !isNaN(val) && Number(val) <= Number(min)) {
        minus.setAttribute('disabled', 'true')
      } else {
        minus.removeAttribute('disabled')
      }
      if (!isNaN(max) && !isNaN(val) && Number(val) >= Number(max)) {
        plus.setAttribute('disabled', 'true')
      } else {
        plus.removeAttribute('disabled')
      }
    }

    // 修改值回调
    function handleChange(val) {
      if (disabled) return
      let inputDOM = _getInputDOM()
      if (!inputDOM) return

      // 非受控组件需要操作DOM
      if (value === undefined) {
        inputDOM.value = val
        updateState(val)
      }
      if (onChange) onChange(val)
    }

    // 点击减
    function handleMinus(e) {
      e.stopPropagation()
      if (disabled) return

      let inputDOM = _getInputDOM()
      if (!inputDOM) return
      let val = inputRef?.current?.correctValue(
        MathUtil.strip(Number(inputDOM.value || 0) - 1),
        'blur'
      )
      // Callback
      handleChange(val)
      if (stepFocus) {
        inputDOM.focus()
      }
    }

    // 点击加
    function handlePlus(e) {
      e.stopPropagation()
      if (disabled) return

      let inputDOM = _getInputDOM()
      if (!inputDOM) return
      if (isNaN(inputDOM?.value)) return
      let val = inputRef?.current?.correctValue(
        MathUtil.strip(Number(inputDOM.value || 0) + 1),
        'blur'
      )
      // Callback
      handleChange(val)
      if (stepFocus) {
        inputDOM.focus()
      }
    }

    // render
    function getInputDOM() {
      return (
        <InputNumber
          ref={inputRef}
          name={name}
          // Element
          type="number"
          className="lyrixi-numberbox-input"
          leftIconNode={leftIconNode}
          rightIconNode={rightIconNode}
          clearRender={clearRender}
          // Value & Display Value
          value={value}
          placeholder={placeholder}
          formatter={formatter}
          // Status
          readOnly={readOnly}
          disabled={disabled}
          allowClear={allowClear}
          autoFocus={autoFocus} // 渲染时自动获取焦点
          autoSelect={autoSelect} // 渲染时自动选中
          // Validate
          precision={precision}
          trim={trim}
          min={min}
          max={max}
          maxLength={maxLength}
          // Events
          onClick={onClick}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onInput={onInput}
          onCompositionStart={onCompositionStart} // 输入开始时
          onCompositionUpdate={onCompositionUpdate} // 输入进行中
          onCompositionEnd={onCompositionEnd} // 输入完成时
        >
          {children}
        </InputNumber>
      )
    }

    return (
      <div
        id={id}
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-numberbox', className)}
        // Status
        disabled={(!isNaN(min) && !isNaN(max) ? Number(min) >= Number(max) : false) || disabled}
      >
        {/* Element: Minus Button */}
        <div
          type="button"
          // Style
          style={minusStyle}
          className={DOMUtil.classNames(
            'lyrixi-numberbox-button',
            'lyrixi-numberbox-button-minus',
            minusClassName
          )}
          // Events
          onClick={handleMinus}
        >
          <i className="lyrixi-numberbox-button-minus-icon"></i>
        </div>

        {/* Element: Input */}
        {getInputDOM()}

        {/* Element: Plus Button */}
        <div
          type="button"
          // Style
          style={plusStyle}
          className={DOMUtil.classNames(
            'lyrixi-numberbox-button',
            'lyrixi-numberbox-button-plus',
            plusClassName
          )}
          // Events
          onClick={handlePlus}
        >
          <i className="lyrixi-numberbox-button-plus-icon"></i>
        </div>
      </div>
    )
  }
)

export default NumberBox
