import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-mobile'
测试使用-end */

// 卡片选择
const ActionSheetCombo = (
  {
    // Components
    title,
    comboRender,
    comboChildren,
    itemRender,

    // Modal
    portal,
    comboStyle,
    comboClassName,
    comboLeftIcon,
    comboRightIcon,
    modalStyle,
    modalClassName,
    maskStyle,
    maskClassName,

    // Value
    value,
    allowClear,
    list,

    // Events
    onBeforeOpen,
    onChange,
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

    // 如果有 comboChildren，渲染 comboChildren
    if (comboChildren) {
      return (
        <div ref={comboRef} onClick={handleOpen}>
          {comboChildren}
        </div>
      )
    }

    // 默认使用 Input.Select
    return (
      <Input.Select
        ref={comboRef}
        {...props}
        style={comboStyle}
        className={comboClassName}
        leftIcon={comboLeftIcon}
        rightIcon={comboRightIcon}
        value={value}
        allowClear={allowClear}
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
        open={open}
        portal={portal}
        // Value
        value={value}
        list={list}
        allowClear={allowClear}
        // Components
        itemRender={itemRender}
        // Style
        title={title}
        maskClassName={maskClassName}
        maskStyle={maskStyle}
        className={modalClassName}
        style={modalStyle}
        // Events
        onClose={handleClose}
        onChange={handleChange}
      />
    </>
  )
}

export default forwardRef(ActionSheetCombo)
