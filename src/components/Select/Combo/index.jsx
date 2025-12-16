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
      itemRender,
      layout,
      checkable,
      checkboxRender,

      // Events
      onChange,
      onBeforeOpen
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
        <NavBarModal
          ref={modalRef}
          // Modal: Status
          open={open}
          maskClosable={maskClosable}
          // Modal: Style
          safeArea={safeArea}
          modalStyle={modalStyle}
          modalClassName={DOMUtil.classNames('lyrixi-select-modal', modalClassName)}
          maskStyle={maskStyle}
          maskClassName={maskClassName}
          // Modal: Elements
          portal={portal}
          title={title}
          cancelNode={cancelNode}
          cancelVisible={cancelVisible}
          // Events
          onClose={handleClose}
          onOk={handleOk}
        >
          <Main
            ref={mainRef}
            open={open}
            value={currentValue}
            allowClear={allowClear}
            multiple={multiple}
            onChange={handleChange}
            list={list}
            formatViewList={formatViewList}
            formatViewItem={formatViewItem}
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
