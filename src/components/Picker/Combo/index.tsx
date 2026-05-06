import React, { forwardRef, useState, useRef, useImperativeHandle, type Ref } from 'react'
import Modal from './../Modal'
import type { ComboRef } from './../../Input/Select'
import type { ModalRef } from './../../Modal/Modal'

import type { PickerComboProps, PickerComboRef } from '../types'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-mobile'
测试使用-end */

// Picker
const PickerCombo = forwardRef<PickerComboRef, PickerComboProps>(function PickerCombo(
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
    // Combo: Style
    style,
    className,
    // Combo: Element
    leftIconNode,
    rightIconNode,
    clearRender,

    // Modal
    // Modal: Value & Display Value
    list,
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
    okNode,
    cancelNode,
    okVisible,
    cancelVisible,

    // Events
    onChange,
    onBeforeOpen
  },
  ref: Ref<PickerComboRef>
) {
  const [open, setOpen] = useState(false)
  const comboRef = useRef<ComboRef | null>(null)
  const modalRef = useRef<ModalRef | null>(null)

  useImperativeHandle(ref, () => {
    return {
      ...((typeof comboRef.current === 'object' && comboRef.current !== null
        ? comboRef.current
        : {}) as ComboRef),
      ...((typeof modalRef.current === 'object' && modalRef.current !== null ? modalRef.current : {}) as ModalRef),
      close: () => setOpen(false),
      open: () => setOpen(true)
    } as PickerComboRef
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
          list={list}
          // Modal: Status
          open={open}
          maskClosable={maskClosable}
          allowClear={allowClear}
          // Modal: Elements
          portal={portal}
          title={title}
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
        />
      </>
    )
  })

export default PickerCombo
