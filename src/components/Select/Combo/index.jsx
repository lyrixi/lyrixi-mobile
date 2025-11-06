import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import NavBarModal from './../../../components/Modal/NavBarModal'
import Main from './../Main'

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
      // Modal
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,

      value,
      allowClear,
      multiple,
      onChange,

      list,

      // List config
      itemRender,
      layout,
      checkable,
      checkboxRender,

      // Combo props
      onBeforeOpen,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState(value)
    const comboRef = useRef(null)
    const modalRef = useRef(null)
    const mainRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...comboRef.current,
        ...modalRef.current,
        ...mainRef.current,
        close: () => setOpen(false),
        open: () => setOpen(true)
      }
    })

    // 同步外部value到内部currentValue
    React.useEffect(() => {
      setCurrentValue(value)
    }, [value])

    async function handleOpen() {
      if (typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }
      setCurrentValue(value)
      setOpen(true)
    }

    function handleClose() {
      setOpen(false)
    }

    async function handleOk() {
      if (onChange) {
        let goOn = await onChange(currentValue)
        if (goOn === false) return
      }
      setOpen(false)
    }

    function handleChange(newValue) {
      setCurrentValue(newValue)
      // 单选时立即关闭
      if (multiple === false) {
        if (onChange) {
          onChange(newValue)
        }
        setOpen(false)
      }
    }

    return (
      <>
        <Input.Select
          ref={comboRef}
          {...props}
          value={value}
          allowClear={allowClear}
          multiple={multiple}
          onChange={onChange}
          onClick={handleOpen}
        />
        <NavBarModal
          ref={modalRef}
          open={open}
          onClose={handleClose}
          onOk={handleOk}
          portal={portal}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
          modalClassName={DOMUtil.classNames('lyrixi-select-modal', modalClassName)}
          modalStyle={modalStyle}
          title={title}
          ok={multiple !== false}
        >
          <Main
            ref={mainRef}
            open={open}
            value={currentValue}
            allowClear={allowClear}
            multiple={multiple}
            onChange={handleChange}
            list={list}
            itemRender={itemRender}
            layout={layout}
            checkable={checkable}
            checkboxRender={checkboxRender}
          />
        </NavBarModal>
      </>
    )
  }
)

export default SelectCombo
