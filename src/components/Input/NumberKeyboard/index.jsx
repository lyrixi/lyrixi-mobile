import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { maxLengthFormatter, minMaxFormatter, precisionFormatter } from './../Text/utils'

import InputNode from './../Node'
import correctInputNumber from './correctInputNumber'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Keyboard from './../../Keyboard'
import MathUtil from '../../../utils/MathUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Keyboard, MathUtil } from 'lyrixi-mobile'
测试使用-end */

const NumberKeyboard = forwardRef(
  (
    {
      // Modal
      // Modal: Elements
      ok = null,

      // Input
      id,

      // Input: Value & Display Value
      value,
      placeholder,
      formatter,

      // Input: Status
      readOnly,
      disabled,
      allowClear,

      // Input: Style
      style,
      className,

      // Input: Element
      leftIcon,
      rightIcon,
      clearRender,

      // Input: Validate
      precision,
      trim,
      min,
      max,
      maxLength,

      // Input: Events
      onChange,
      onClick,
      onFocus,
      onBlur
    },
    ref
  ) => {
    const inputRef = useRef(null)
    const [keyboardOpen, setKeyboardOpen] = useState(null)

    // Expose
    useImperativeHandle(ref, () => ({
      ...inputRef.current,
      focus: () => {
        setKeyboardOpen(true)
      },
      blur: () => {
        setKeyboardOpen(false)
      }
    }))

    // 处理输入框点击
    const handleInputClick = (e) => {
      setKeyboardOpen(true)
      onClick && onClick(e)
    }

    const handleChange = (newValue) => {
      // 不能校验最小值，因为min={0.1}时，无法删除
      let val = minMaxFormatter(newValue, { max })
      val = precisionFormatter(val, { precision, trim: false })
      val = maxLengthFormatter(val, { maxLength })
      // 输入.不触发onChange
      console.log('val', val, MathUtil.isNumber(val))
      onChange && onChange(correctInputNumber(val))
    }

    const handleClose = () => {
      if (readOnly) return
      setKeyboardOpen(false)
    }

    return (
      <>
        {/* 输入框 */}
        <InputNode
          ref={inputRef}
          id={id}
          style={style}
          className={DOMUtil.classNames('lyrixi-input-numberkeyboard', className)}
          type="number"
          // 值控制
          value={value}
          onChange={onChange}
          onClick={handleInputClick}
          onFocus={onFocus}
          onBlur={onBlur}
          // 数值校验
          min={min}
          max={max}
          maxLength={maxLength}
          trim={trim}
          precision={precision}
          // 输入框配置
          placeholder={placeholder}
          formatter={formatter}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          clearRender={clearRender}
          allowClear={allowClear}
          disabled={disabled}
          readOnly={readOnly}
          cursor={keyboardOpen} // 键盘打开时显示光标
          {...props}
        />

        {/* 数字键盘 */}
        <Keyboard.Number
          ok={ok}
          value={value}
          onChange={handleChange}
          open={keyboardOpen}
          onClose={handleClose}
          dot={precision === 0 ? null : true}
          minus={min >= 0 ? null : true}
        />
      </>
    )
  }
)

export default NumberKeyboard
