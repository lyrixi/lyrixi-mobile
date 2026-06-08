import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { maxLengthFormatter, minMaxFormatter, precisionFormatter } from './../Text/utils'

import InputNode from './../Node'

import correctInputNumber from './correctInputNumber'

import type { InputNodeRef, InputNumberKeyboardProps, InputNumberKeyboardRef } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Keyboard from './../../Keyboard'
import MathUtil from '../../../utils/MathUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Keyboard, MathUtil } from 'lyrixi-mobile'
测试使用-end */

const NumberKeyboard = forwardRef<InputNumberKeyboardRef, InputNumberKeyboardProps>(
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
      precision,
      trim,
      min,
      max,
      maxLength,

      // Input: Status
      readOnly,
      disabled,
      allowClear,

      // Input: Style
      style,
      size,
      className,

      // Input: Elements
      leftIconRender,
      leftIconSvg,
      rightIconRender,
      rightIconSvg,
      clearRender,

      // Input: Events
      onChange,
      onClick,
      onFocus,
      onBlur
    },
    ref
  ) => {
    const inputRef = useRef<InputNodeRef | null>(null)
    const [keyboardOpen, setKeyboardOpen] = useState<boolean | undefined>(undefined)

    // Expose
    useImperativeHandle(
      ref,
      () =>
        ({
          ...(inputRef.current as object),
          focus: () => {
            setKeyboardOpen(true)
          },
          blur: () => {
            setKeyboardOpen(false)
          }
        } as InputNumberKeyboardRef)
    )

    // 处理输入框点击
    const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (readOnly) return
      setKeyboardOpen(true)
      onClick?.(e)
    }

    const handleChange = (newValue: string) => {
      // 不能校验最小值，因为min={0.1}时，无法删除
      let val = String(minMaxFormatter(newValue, { max }))
      val = String(precisionFormatter(val, { precision, trim: false }))
      val = maxLengthFormatter(val, { maxLength })
      // 输入.不触发onChange
      console.log('val', val, MathUtil.isNumber(val, ['-']))
      onChange?.(correctInputNumber(val))
    }

    const handleClose = () => {
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
          precision={precision}
          trim={trim}
          min={min}
          max={max}
          maxLength={maxLength}
          // Input: Status
          readOnly={readOnly}
          disabled={disabled}
          allowClear={allowClear}
          cursor={keyboardOpen} // 键盘打开时显示光标
          // Input: Style
          style={style}
          size={size}
          className={DOMUtil.classNames('lyrixi-input-numberkeyboard', className)}
          // Input: Elements
          leftIconRender={leftIconRender}
          leftIconSvg={leftIconSvg}
          rightIconRender={rightIconRender}
          rightIconSvg={rightIconSvg}
          clearRender={clearRender}
          // Input: Events
          onChange={(v) => handleChange(typeof v === 'string' ? v : '')}
          onClick={handleInputClick}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {/* Modal */}
        <Keyboard.Number
          // Modal: Value & Display Value
          value={value as string}
          dot={precision === 0 ? undefined : true}
          minus={min !== undefined && min >= 0 ? undefined : true}
          // Modal: Status
          open={keyboardOpen}
          // Modal: Elements
          okNode={ok}
          // Events
          onChange={handleChange}
          onClose={handleClose}
        />
      </>
    )
  }
)
export default NumberKeyboard
