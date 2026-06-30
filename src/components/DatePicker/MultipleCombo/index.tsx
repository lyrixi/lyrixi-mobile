import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import MultipleModal from './../MultipleModal'
import getDisplayValue from './getDisplayValue'
import type { DatePickerMultipleValue } from './../types'
import type { DatePickerModalRef, DatePickerMultipleComboProps } from './../types'

// 内库使用-start
import type { InputSelectProps, InputSelectRef as InputComboSelectRef } from './../../Input/types'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-mobile'
测试使用-end */

// DatePicker
const MultipleCombo = forwardRef<unknown, DatePickerMultipleComboProps>(function DatePickerMultipleCombo(
  {
    // Combo
    // Combo: Value & Display Value
    value,
    placeholder,
    formatter,
    autoSize,
    separator,
    // Combo: Status
    readOnly,
    disabled,
    allowClear,
    // Combo: Style
    style,
    className,
    // Combo: Elements
    leftIconRender,
    leftIconSvg,
    rightIconRender,
    rightIconSvg,
    clearRender,

    // Modal
    // Modal: Value & Display Value
    type = 'date',
    min,
    max,
    hourStep,
    minuteStep,
    // Modal: Status
    maskClosable,
    // Modal: Style
    safeArea,
    modalStyle,
    modalClassName,
    maskStyle,
    maskClassName,
    // Modal: Elements
    portal,
    titleRender,
    okNode,
    cancelNode,
    okVisible,
    cancelVisible,

    // Events
    onChange,
    onBeforeOpen,
    onOk
  },
  ref
) {
  const [open, setOpen] = useState(false)
  const comboRef = useRef<InputComboSelectRef | null>(null)
  const modalRef = useRef<DatePickerModalRef | null>(null)

  useImperativeHandle(ref, () => {
    return {
      ...(typeof comboRef.current === 'object' && comboRef.current !== null
        ? (comboRef.current as unknown as Record<string, unknown>)
        : {}),
      ...(typeof modalRef.current === 'object' && modalRef.current !== null
        ? (modalRef.current as unknown as Record<string, unknown>)
        : {}),
      close: () => setOpen(false),
      open: () => setOpen(true)
    }
  })

  async function handleOpen() {
    if (typeof onBeforeOpen === 'function') {
      let goOn = await onBeforeOpen()
      if (goOn === false) return
    }
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  const handleInputChange: InputSelectProps['onChange'] = (v, options) => {
    onChange?.(v as DatePickerMultipleValue, options as { action: string })
  }

  const handleFormatter: InputSelectProps['formatter'] = (_v, options) => {
    const display = formatter
      ? formatter(undefined, options)
      : getDisplayValue({
          type: type,
          value: value,
          separator: separator
        })
    return display ?? ''
  }

  return (
    <>
      <Input.Select
        ref={comboRef}
        // Combo: Value & Display Value
        value={value}
        placeholder={placeholder}
        formatter={handleFormatter}
        autoSize={autoSize}
        separator={separator}
        // Combo: Status
        readOnly={readOnly}
        disabled={disabled}
        allowClear={allowClear}
        // Combo: Style
        style={style}
        className={className}
        // Combo: Elements
        leftIconRender={leftIconRender}
          leftIconSvg={leftIconSvg}
        rightIconRender={rightIconRender}
          rightIconSvg={rightIconSvg}
        clearRender={clearRender}
        // Events
        onChange={handleInputChange}
        onClick={handleOpen}
      />
      <MultipleModal
        ref={modalRef}
        // Modal: Value & Display Value
        value={value}
        type={type}
        min={min}
        max={max}
        hourStep={hourStep}
        minuteStep={minuteStep}
        // Modal: Status
        open={open}
        maskClosable={maskClosable}
        allowClear={allowClear}
        // Modal: Elements
        portal={portal}
        titleRender={titleRender}
        okNode={okNode}
        cancelNode={cancelNode}
        okVisible={okVisible}
        cancelVisible={cancelVisible}
        // Modal: Style
        safeArea={safeArea}
        modalStyle={modalStyle}
        modalClassName={modalClassName}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Events
        onClose={handleClose}
        onChange={onChange}
        onOk={onOk}
      />
    </>
  )
})

export default MultipleCombo
