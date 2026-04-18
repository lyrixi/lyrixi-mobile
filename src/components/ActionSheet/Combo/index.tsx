import React, { useEffect, forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'

// 内库使用-start
import Input from './../../Input'
import Combo from './../../Combo'
// 内库使用-end

/* 测试使用-start
import { Input, Combo } from 'lyrixi-mobile'
测试使用-end */

// 卡片选择
const ActionSheetCombo = (
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
    // Combo: Elements
    comboRender,
    children,
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
    cancelNode,
    cancelVisible,
    itemRender,

    // Events
    onBeforeOpen,
    onOpen,
    onClose,
    onClick,
    onChange
  },
  ref
) => {
  const [open, setOpen] = useState(null)
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

  useEffect(() => {
    if (open === null) return
    if (open) {
      onOpen?.()
    } else {
      onClose?.()
    }
    // eslint-disable-next-line
  }, [open])

  async function handleOpen() {
    if (typeof onBeforeOpen === 'function') {
      let goOn = await onBeforeOpen()
      if (goOn === false) return
    }

    // 如果没有 list，则不打开
    if (!Array.isArray(list) || !list.length) {
      return
    }
    onClick && onClick()
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleChange(newValue) {
    if (onChange) {
      onChange(newValue)
    }
    setOpen(false)
  }

  // 获取 Combo 节点
  function getComboNode() {
    if (typeof comboRender === 'function') {
      return comboRender({
        comboRef,
        open: open,
        onClick: handleOpen
      })
    }

    // comboChildren
    if (children) {
      return (
        <Combo ref={comboRef} style={style} className={className} onClick={handleOpen}>
          {children}
        </Combo>
      )
    }

    // 默认使用 Input.Select
    return (
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
    )
  }

  return (
    <>
      {getComboNode()}
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
        cancelNode={cancelNode}
        cancelVisible={cancelVisible}
        itemRender={itemRender}
        // Modal: Style
        safeArea={safeArea}
        modalStyle={modalStyle}
        modalClassName={modalClassName}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Events
        onClose={handleClose}
        onChange={handleChange}
      />
    </>
  )
}

export default forwardRef(ActionSheetCombo)
