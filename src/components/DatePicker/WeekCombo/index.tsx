import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import getDateDefaultValue from './../utils/getDateDefaultValue'
import WeekModal from './../WeekModal'
import type { DatePickerComboProps, DatePickerModalProps, DatePickerModalRef } from './../datePickerTypes'
import type { ComboRef as BasicComboWrapperRef } from './../../Combo'
import type { ComboRef as InputComboSelectRef, ComboProps } from './../../Input/Select'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
import Combo from './../../Combo'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Combo, Input } from 'lyrixi-mobile'
测试使用-end */

// 获取周
const WeekCombo = forwardRef<unknown, DatePickerComboProps>(function DatePickerWeekCombo(
  {
    // Combo
    // Combo: Value & Display Value
    value,
    placeholder,
    formatter,
    autoSize,
    separator,
    // Combo: Status
    readOnly,
    disabled,
    allowClear,
    // Combo: Style
    style,
    className,
    // Combo: Element
    comboRender,
    children,
    leftIconNode,
    rightIconNode,
    clearRender,

    // Modal
    // Modal: Value & Display Value
    type: _ignoredType,
    min,
    max,
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
    titleRender,
    okNode,
    cancelNode,
    okVisible,
    cancelVisible,

    // Events
    onChange,
    onBeforeOpen,
    onOk
  },
  ref
) {
  const [open, setOpen] = useState(false)
  void _ignoredType
  const comboRef = useRef<BasicComboWrapperRef | InputComboSelectRef | null>(null)
  const modalRef = useRef<DatePickerModalRef | null>(null)

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

  const modalValue: Date = value instanceof Date ? value : getDateDefaultValue({ min, max })

  // 获取 Combo 节点
  function renderCombo() {
    if (typeof comboRender === 'function') {
      return comboRender({
        comboRef: comboRef as React.RefObject<unknown>,
        open: open,
        onClick: handleOpen
      })
    }

    // comboChildren
    if (children) {
      return (
        <Combo ref={comboRef as React.Ref<BasicComboWrapperRef>} style={style} className={className} onClick={handleOpen}>
          {children}
        </Combo>
      )
    }

    // 默认使用 Input.Select
    return (
      <Input.Select
        ref={comboRef as React.Ref<InputComboSelectRef>}
        // Combo: Value & Display Value
        value={value}
        placeholder={placeholder}
        formatter={formatter || ((v: unknown) => DateUtil.format(v as Date, 'week'))}
        autoSize={autoSize}
        separator={separator}
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
        onChange={onChange as ComboProps['onChange']}
        onClick={handleOpen}
      />
    )
  }

  return (
    <>
      {renderCombo()}
      <WeekModal
        ref={modalRef}
        // Modal: Value & Display Value
        value={value == null || !(value instanceof Date) ? modalValue : (value as Date)}
        type="week"
        min={min}
        max={max}
        // Modal: Status
        open={open}
        maskClosable={maskClosable}
        allowClear={allowClear}
        // Modal: Elements
        portal={portal}
        titleRender={titleRender}
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
        onChange={onChange as DatePickerModalProps['onChange']}
        onOk={onOk}
      />
    </>
  )
})

export default WeekCombo
