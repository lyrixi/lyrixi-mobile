import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'
import type { ComboRef } from './../../Input/Select'

import type { SelectComboProps } from './../types'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-mobile'
测试使用-end */

const SelectCombo = forwardRef<Record<string, unknown>, SelectComboProps>(function SelectCombo(
  {
    value,
    placeholder,
    formatter,
    autoSize,
    separator,
    mode,
    readOnly,
    disabled,
    allowClear,
    multiple,
    style,
    className,
    leftIconNode,
    rightIconNode,
    clearRender,
    list,
    formatViewList,
    formatViewItem,
    maskClosable,
    checkable,
    safeArea,
    modalStyle,
    modalClassName,
    maskStyle,
    maskClassName,
    checkboxVariant,
    checkboxPosition,
    itemStyle,
    itemClassName,
    itemLayout,
    portal,
    title,
    cancelNode,
    cancelVisible,
    headerRender,
    itemRender,
    onOk,
    onChange,
    onBeforeOpen
  },
  ref
) {
  const [open, setOpen] = useState(false)
  const comboRef = useRef<ComboRef | null>(null)
  const modalRef = useRef<Record<string, unknown> | null>(null)

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
  }

  function handleChange(newValue: unknown) {
    onChange?.(newValue)
    setOpen(false)
  }

  return (
    <>
      <Input.Select
        ref={comboRef}
        value={value}
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
        onChange={onChange}
        onClick={handleOpen}
      />
      <Modal
        ref={modalRef}
        value={value}
        list={list}
        formatViewList={formatViewList}
        formatViewItem={formatViewItem}
        open={open}
        maskClosable={maskClosable}
        safeArea={safeArea}
        multiple={multiple}
        checkable={checkable}
        modalStyle={modalStyle}
        modalClassName={modalClassName}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        itemStyle={itemStyle}
        itemClassName={itemClassName}
        itemLayout={itemLayout}
        checkboxVariant={checkboxVariant}
        checkboxPosition={checkboxPosition}
        portal={portal}
        title={title}
        cancelNode={cancelNode}
        cancelVisible={cancelVisible}
        headerRender={headerRender}
        itemRender={itemRender}
        onOk={onOk}
        onChange={handleChange}
        onClose={handleClose}
      />
    </>
  )
})

export default SelectCombo
