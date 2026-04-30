import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import InputNumber from './../Number'
import { InputTextRef, type InputTextProps } from './../Text'

// 内库使用-start
import MathUtil from './../../../utils/MathUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil } from 'lyrixi-mobile'
测试使用-end */

interface NumberBoxRef {
  element: HTMLDivElement | null
  inputElement: InputTextRef | null
  getElement: () => HTMLDivElement | null
  getInputElement: InputTextRef['getInputElement'] | undefined
  getInputRef: () => React.RefObject<InputTextRef | null>
}

interface NumberBoxProps {
  id?: string
  name?: string
  value?: string
  placeholder?: string
  formatter?: (value: string) => React.ReactNode
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  autoFocus?: boolean
  autoSelect?: boolean
  stepFocus?: boolean
  className?: string
  style?: React.CSSProperties
  plusClassName?: string
  plusStyle?: React.CSSProperties
  minusClassName?: string
  minusStyle?: React.CSSProperties
  leftIconNode?: React.ReactNode
  rightIconNode?: React.ReactNode
  clearRender?: InputTextProps['clearRender']
  children?: React.ReactNode
  precision?: number
  trim?: boolean
  min?: number
  max?: number
  maxLength?: number
  onClick?: (e: React.MouseEvent) => void
  onChange?: (val: string) => void
  onBlur?: (e: React.FocusEvent) => void
  onFocus?: (e: React.FocusEvent) => void
  onInput?: React.FormEventHandler<HTMLInputElement>
  onCompositionStart?: React.CompositionEventHandler<HTMLInputElement>
  onCompositionUpdate?: React.CompositionEventHandler<HTMLInputElement>
  onCompositionEnd?: React.CompositionEventHandler<HTMLInputElement>
}

// 数值框
const NumberBox = forwardRef<NumberBoxRef, NumberBoxProps>(
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
    const rootRef = useRef<HTMLDivElement>(null)

    const inputRef = useRef<InputTextRef>(null)


    useEffect(() => {
      let inputElement = _getInputElement()
      let val = (inputElement?.value ? inputElement.value : value) || ''
      updateState(val)
    }, [value])


    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        inputElement: inputRef?.current,
        getElement: () => {
          return rootRef.current
        },
        getInputElement: inputRef?.current?.getInputElement,
        getInputRef: () => {
          return inputRef
        }
      }
    })
 // eslint-disable-line

    // 获取文本框
    function _getInputElement(): HTMLInputElement | HTMLTextAreaElement | null {
      if (inputRef?.current?.getInputElement) {
        return inputRef.current.getInputElement()
      }
      return null
    }


    // 更新禁用状态
    function updateState(val: string) {
      let minus = rootRef.current?.querySelector?.('.lyrixi-numberbox-button-minus')
      let plus = rootRef.current?.querySelector?.('.lyrixi-numberbox-button-plus')
      if (min !== undefined && !isNaN(min) && !isNaN(Number(val)) && Number(val) <= Number(min)) {
        minus?.setAttribute('disabled', 'true')
      } else {
        minus?.removeAttribute('disabled')
      }
      if (max !== undefined && !isNaN(max) && !isNaN(Number(val)) && Number(val) >= Number(max)) {
        plus?.setAttribute('disabled', 'true')
      } else {
        plus?.removeAttribute('disabled')
      }
    }


    // 修改值回调
    function handleChange(val: string) {
      if (disabled) return
      let inputElement = _getInputElement()
      if (!inputElement) return

      // 非受控组件需要操作DOM
      if (value === undefined) {
        inputElement.value = val
        updateState(val)
      }
      if (onChange) onChange(val)
    }


    // 点击减
    function handleMinus(e: React.MouseEvent<HTMLDivElement>) {
      e.stopPropagation()
      if (disabled) return

      let inputElement = _getInputElement()
      if (!inputElement) return
      let val = inputRef?.current?.correctValue(MathUtil.strip(Number(inputElement.value || 0) - 1))
      // Callback
      handleChange(String(val ?? ''))
      if (stepFocus) {
        inputElement.focus()
      }
    }


    // 点击加
    function handlePlus(e: React.MouseEvent<HTMLDivElement>) {
      e.stopPropagation()
      if (disabled) return

      let inputElement = _getInputElement()
      if (!inputElement) return
      if (isNaN(Number(inputElement?.value))) return
      let val = inputRef?.current?.correctValue(MathUtil.strip(Number(inputElement.value || 0) + 1))
      // Callback
      handleChange(String(val ?? ''))
      if (stepFocus) {
        inputElement.focus()
      }
    }


    // render
    function getInputElement() {
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
          onClick={onClick as Parameters<typeof InputNumber>[0]['onClick']}
          onChange={handleChange}
          onBlur={onBlur as Parameters<typeof InputNumber>[0]['onBlur']}
          onFocus={onFocus as Parameters<typeof InputNumber>[0]['onFocus']}
        />
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
        {...((min !== undefined && max !== undefined && !isNaN(min) && !isNaN(max)
          ? Number(min) >= Number(max)
          : false) || disabled
          ? { disabled: true }
          : {})}
      >
        {/* Element: Minus Button */}
        <div
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
        {getInputElement()}

        {/* Element: Plus Button */}
        <div
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
