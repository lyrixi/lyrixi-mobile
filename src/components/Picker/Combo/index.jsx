import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-mobile'
测试使用-end */

// Picker
const PickerCombo = forwardRef(
  (
    {
      // Combo
      // Combo: Value & Display Value
      value,
      placeholder,
      formatter,
      autoSize,
      separator,
      mode,
      // Combo: Status
      readOnly,
      disabled,
      allowClear,
      multiple,
      // Combo: Style
      style,
      className,
      // Combo: Element
      leftIcon,
      rightIcon,
      clearRender,

      // Modal
      // Modal: Value & Display Value
      list,
      defaultPickerValue,
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
      title,

      // Events
      onChange,
      onBeforeOpen
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
          formatter={formatter}
          autoSize={autoSize}
          separator={separator}
          mode={mode}
          multiple={multiple}
          // Combo: Status
          readOnly={readOnly}
          disabled={disabled}
          allowClear={allowClear}
          // Combo: Style
          style={style}
          className={className}
          // Combo: Element
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          clearRender={clearRender}
          // Events
          onChange={onChange}
          onClick={handleOpen}
        />
        <Modal
          ref={modalRef}
          // Modal: Value & Display Value
          value={value}
          list={list}
          defaultPickerValue={defaultPickerValue}
          // Modal: Status
          open={open}
          maskClosable={maskClosable}
          allowClear={allowClear}
          multiple={multiple}
          // Modal: Elements
          portal={portal}
          title={title}
          // Modal: Style
          safeArea={safeArea}
          modalStyle={modalStyle}
          modalClassName={modalClassName}
          maskStyle={maskStyle}
          maskClassName={maskClassName}
          // Events
          onClose={handleClose}
          onChange={onChange}
        />
      </>
    )
  }
)

export default PickerCombo
