import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import { getRangeDefaultValue, getDefaultRanges } from './../utils'
import getDisplayValue from './getDisplayValue'
import formatValue from './../RangeMain/formatValue'
import RangeModal from './../RangeModal'
import type { DatePickerModalRef, DatePickerRangeChangeMeta, DatePickerRangeComboProps } from './../common/types'

// 内库使用-start
import type { InputSelectComboProps, InputSelectComboRef as InputComboSelectRef } from './../../Input/types'
import DOMUtil from '../../../utils/DOMUtil'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Input } from 'lyrixi-mobile'
测试使用-end */

// 日期区间
const RangeCombo = forwardRef<unknown, DatePickerRangeComboProps>(function DatePickerRangeCombo(
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
    leftIconNode,
    rightIconNode,
    clearRender,

    // Modal
    // Modal: Value & Display Value
    autoSwapValue, // 结束日期大于开始日期时, 是否自动交换开始和结束日期
    type = 'date',
    min,
    max,
    ranges: rangesIn,
    titles,
    hourStep,
    minuteStep,
    // Modal: Status
    rangesVisible,
    maskClosable,
    startDisabled,
    endDisabled,
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
  let ranges = rangesIn
  if (ranges === undefined) {
    // eslint-disable-next-line
    ranges = getDefaultRanges()
  }
  const [open, setOpen] = useState(false)
  const comboRef = useRef<InputComboSelectRef | null>(null)
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

  const handleChange: (
    newValue: unknown,
    meta?: { rangeId?: string | null; ranges?: DatePickerRangeChangeMeta['ranges']; action?: string }
  ) => void = (newValue, meta) => {
    onChange && onChange(newValue as (Date | null)[] | null, { rangeId: meta?.rangeId, ranges: meta?.ranges ?? ranges })
  }

  const handleInputChange: InputSelectComboProps['onChange'] = (v, m) => handleChange(v, m as { rangeId?: string | null; ranges?: DatePickerRangeChangeMeta['ranges'] })

  const fmt = formatValue(value)
  const displayArgs = {
    value: fmt,
    type: type,
    rangeId: undefined,
    ranges,
    separator: separator
  }

  return (
    <>
      <Input.Select
        ref={comboRef}
        // Combo: Value & Display Value
        value={fmt}
        placeholder={placeholder}
        formatter={formatter || (() => getDisplayValue(displayArgs))}
        autoSize={autoSize}
        separator={separator}
        // Combo: Status
        readOnly={readOnly}
        disabled={disabled}
        allowClear={allowClear}
        // Combo: Style
        style={style}
        className={DOMUtil.classNames('lyrixi-datepicker-rangecombo', className)}
        // Combo: Element
        leftIconNode={leftIconNode}
        rightIconNode={rightIconNode}
        clearRender={clearRender}
        // Events
        onChange={handleInputChange}
        onClick={handleOpen}
      />
      <RangeModal
        ref={modalRef}
        // Modal: Value & Display Value
        value={fmt || getRangeDefaultValue({ min, max })}
        autoSwapValue={autoSwapValue}
        type={type}
        min={min}
        max={max}
        ranges={ranges}
        titles={titles}
        hourStep={hourStep}
        minuteStep={minuteStep}
        // Modal: Status
        open={open}
        rangesVisible={rangesVisible}
        maskClosable={maskClosable}
        allowClear={allowClear}
        startDisabled={startDisabled}
        endDisabled={endDisabled}
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
        onChange={handleChange}
        onOk={onOk}
      />
    </>
  )
})

export default RangeCombo
