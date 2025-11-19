import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import ListModal from './../Modal'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-mobile'
测试使用-end */

// List
const ListCombo = forwardRef(
  (
    {
      // Value & Display Value
      value,
      list,
      loadData,
      placeholder,
      formatter,
      separator,
      mode,

      // Status
      readOnly,
      disabled,
      allowClear,
      multiple = false,
      maskClosable,
      pagination,
      disableTopRefresh,
      disableBottomRefresh,
      checkable = true,
      autoSize,

      // Style
      style,
      className,
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Elements
      leftIconNode,
      rightIconNode,
      clearRender,
      portal,
      title,
      okNode,
      cancelNode,
      okVisible,
      cancelVisible,
      itemRender,
      itemLayout,

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
          leftIconNode={leftIconNode}
          rightIconNode={rightIconNode}
          clearRender={clearRender}
          // Events
          onChange={onChange}
          onClick={handleOpen}
        />
        <ListModal
          ref={modalRef}
          // Modal: Value & Display Value
          value={value}
          list={list}
          loadData={loadData}
          // Modal: Status
          open={open}
          maskClosable={maskClosable}
          allowClear={allowClear}
          multiple={multiple}
          pagination={pagination}
          disableTopRefresh={disableTopRefresh}
          disableBottomRefresh={disableBottomRefresh}
          checkable={checkable}
          // Modal: Elements
          portal={portal}
          title={title}
          okNode={okNode}
          cancelNode={cancelNode}
          okVisible={okVisible}
          cancelVisible={cancelVisible}
          itemRender={itemRender}
          itemLayout={itemLayout}
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

export default ListCombo
