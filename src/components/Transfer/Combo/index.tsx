import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'
import type { InputSelectComboRef } from './../../Input/Select/types'

import type { TransferComboProps, TransferItem } from './../types'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-mobile'
测试使用-end */

// Transfer
const TransferCombo = forwardRef<unknown, TransferComboProps>(function TransferCombo(
  {
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

    // Modal: Value & Display Value
    list,
    titles,
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
    onOk,
    onClose: userOnClose,

    // Events
    onChange,
    onBeforeOpen
  },
  ref
) {
  const [open, setOpen] = useState(false)
  const comboRef = useRef<InputSelectComboRef | null>(null)
  const modalRef = useRef<unknown>(null)

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
      const goOn = await onBeforeOpen()
      if (goOn === false) return
    }
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
    userOnClose?.()
  }

  function handleInputChange(v: unknown) {
    onChange?.(v as TransferItem[])
  }

  return (
    <>
      <Input.Select
        ref={comboRef}
        value={value as unknown}
        placeholder={placeholder}
        formatter={formatter}
        autoSize={autoSize}
        separator={separator}
        mode={mode}
        readOnly={readOnly}
        disabled={disabled}
        allowClear={allowClear}
        style={style}
        className={className}
        leftIconNode={leftIconNode}
        rightIconNode={rightIconNode}
        clearRender={clearRender}
        onChange={onChange ? handleInputChange : undefined}
        onClick={handleOpen}
      />
      <Modal
        ref={modalRef}
        value={value}
        list={list}
        titles={titles}
        open={open}
        maskClosable={maskClosable}
        allowClear={allowClear}
        portal={portal}
        title={title}
        okNode={okNode}
        cancelNode={cancelNode}
        okVisible={okVisible}
        cancelVisible={cancelVisible}
        safeArea={safeArea}
        modalStyle={modalStyle}
        modalClassName={modalClassName}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        onClose={handleClose}
        onChange={onChange}
        onOk={onOk}
      />
    </>
  )
})

export default TransferCombo
