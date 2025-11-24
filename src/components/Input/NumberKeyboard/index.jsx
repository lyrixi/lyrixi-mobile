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
      leftIconNode,
      rightIconNode,
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
      console.log('val', val, MathUtil.isNumber(val, ['-']))
      onChange && onChange(correctInputNumber(val))
    }

    const handleClose = () => {
      if (readOnly) return
      setKeyboardOpen(false)
    }

    return (
      <>
        {/* Input */}
        <InputNode
          ref={inputRef}
          id={id}
          type="number"
          // Input: Value & Display Value
          value={value}
          placeholder={placeholder}
          formatter={formatter}
          // Input: Status
          readOnly={readOnly}
          disabled={disabled}
          allowClear={allowClear}
          cursor={keyboardOpen} // 键盘打开时显示光标
          // Input: Style
          style={style}
          className={DOMUtil.classNames('lyrixi-input-numberkeyboard', className)}
          // Input: Element
          leftIconNode={leftIconNode}
          rightIconNode={rightIconNode}
          clearRender={clearRender}
          // Input: Validate
          precision={precision}
          trim={trim}
          min={min}
          max={max}
          maxLength={maxLength}
          // Events
          onChange={onChange}
          onClick={handleInputClick}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {/* Modal */}
        <Keyboard.Number
          // Modal: Element
          ok={ok}
          // Input: Value & Display Value
          value={value}
          // Modal: Status
          open={keyboardOpen}
          dot={precision === 0 ? null : true}
          minus={min >= 0 ? null : true}
          // Events
          onChange={handleChange}
          onClose={handleClose}
        />
      </>
    )
  }
)

export default NumberKeyboard
