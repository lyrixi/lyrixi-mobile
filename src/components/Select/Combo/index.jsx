import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Input } from 'lyrixi-mobile'
测试使用-end */

const SelectCombo = forwardRef(
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
      leftIconNode,
      rightIconNode,
      clearRender,

      // Modal
      // Modal: Value & Display Value
      list,
      formatViewList,
      formatViewItem,
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
      headerRender,
      itemRender,
      layout,
      checkable,
      checkboxRender,

      // Events
      onOk,
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

    function handleChange(newValue) {
      onChange?.(newValue)
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
          leftIconNode={leftIconNode}
          rightIconNode={rightIconNode}
          clearRender={clearRender}
          // Events
          onChange={onChange}
          onClick={handleOpen}
        />
        <Modal
          ref={modalRef}
          // Value & Display Value
          value={value}
          list={list}
          formatViewList={formatViewList}
          formatViewItem={formatViewItem}
          // Status
          open={open}
          maskClosable={maskClosable}
          safeArea={safeArea}
          multiple={multiple}
          // Style
          modalStyle={modalStyle}
          modalClassName={DOMUtil.classNames('lyrixi-select-modal', modalClassName)}
          maskStyle={maskStyle}
          maskClassName={maskClassName}
          layout={layout}
          checkable={checkable}
          // Elements
          portal={portal}
          title={title}
          cancelNode={cancelNode}
          cancelVisible={cancelVisible}
          headerRender={headerRender}
          itemRender={itemRender}
          checkboxRender={checkboxRender}
          // Events
          onOk={onOk}
          onChange={handleChange}
          onClose={handleClose}
        />
      </>
    )
  }
)

export default SelectCombo
