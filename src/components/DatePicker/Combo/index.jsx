import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'

import Modal from './../Modal'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Input } from 'lyrixi-mobile'
测试使用-end */

// DatePicker
const DatePickerCombo = forwardRef(
  (
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
      // Combo: Element
      leftIconNode,
      rightIconNode,
      clearRender,

      // Modal
      // Modal: Value & Display Value
      type = 'date', // year | quarter | month | date | time | datetime | week
      min,
      max,
      defaultPickerValue,
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
  ) => {
    const [open, setOpen] = useState(false)
    const comboRef = useRef(null)
    const modalRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...comboRef.current,
        ...modalRef.current,
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

    return (
      <>
        <Input.Select
          ref={comboRef}
          // Combo: Value & Display Value
          value={value}
          placeholder={placeholder}
          formatter={formatter || (() => DateUtil.format(value, type))}
          autoSize={autoSize}
          separator={separator}
          // Combo: Status
          readOnly={readOnly}
          disabled={disabled}
          allowClear={allowClear}
          // Combo: Style
          style={style}
          className={className}
          // Combo: Element
          leftIconNode={leftIconNode}
          rightIconNode={rightIconNode}
          clearRender={clearRender}
          // Events
          onChange={onChange}
          onClick={handleOpen}
        />
        <Modal
          ref={modalRef}
          // Modal: Value & Display Value
          value={value}
          type={type}
          min={min}
          max={max}
          defaultPickerValue={defaultPickerValue}
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
  }
)

export default DatePickerCombo
