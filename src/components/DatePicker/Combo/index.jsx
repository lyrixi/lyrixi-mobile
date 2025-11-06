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
      // Modal
      portal,
      comboStyle,
      comboClassName,
      comboLeftIcon,
      comboRightIcon,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,

      defaultPickerValue,
      onError,

      value,
      allowClear,
      multiple,
      onChange,
      type = 'date', // year | quarter | month | date | time | datetime | week
      min,
      max,
      hourStep,
      minuteStep,

      // Combo props
      onBeforeOpen,
      ...props
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
          {...props}
          style={comboStyle}
          className={comboClassName}
          leftIcon={comboLeftIcon}
          rightIcon={comboRightIcon}
          formatter={() => {
            return DateUtil.format(value, type)
          }}
          value={value}
          allowClear={allowClear}
          multiple={multiple}
          onChange={onChange}
          onClick={handleOpen}
        />
        <Modal
          ref={modalRef}
          open={open}
          onClose={handleClose}
          value={value}
          allowClear={allowClear}
          multiple={multiple}
          onChange={onChange}
          portal={portal}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
          className={modalClassName}
          style={modalStyle}
          title={title}
          hourStep={hourStep}
          minuteStep={minuteStep}
          defaultPickerValue={defaultPickerValue}
          onError={onError}
          type={type}
          min={min}
          max={max}
        />
      </>
    )
  }
)

export default DatePickerCombo
