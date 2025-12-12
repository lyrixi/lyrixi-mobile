import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import getDefaultRanges from './../RangeMain/getDefaultRanges'
import getDisplayValue from './getDisplayValue'
import formatValue from './../RangeMain/formatValue'
import RangeModal from './../RangeModal'

// 内库使用-start
import DOMUtil from '../../../utils/DOMUtil'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Input } from 'lyrixi-mobile'
测试使用-end */

// 日期区间
const RangeCombo = forwardRef(
  (
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
      type = 'date',
      format,
      min,
      max,
      defaultPickerValue,
      rangeId,
      ranges,
      titles,
      hourStep,
      minuteStep,
      diff,
      // Modal: Status
      maskClosable,
      disabledStart,
      disabledEnd,
      // Modal: Style
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      // Modal: Elements
      portal,
      title,
      titleRender,
      okNode,
      cancelNode,
      okVisible,
      cancelVisible,

      // Events
      onChange,
      onBeforeOpen,
      onBeforeOk
    },
    ref
  ) => {
    if (ranges === undefined) {
      // eslint-disable-next-line
      ranges = getDefaultRanges()
    }
    const rangeIdRef = useRef(rangeId)
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

    const handleChange = (newValue, { rangeId: newRangeId, ranges } = {}) => {
      // 清空时需要记录空选中项
      rangeIdRef.current = newRangeId
      onChange && onChange(newValue, { rangeId: newRangeId, ranges })
    }

    return (
      <>
        <Input.Select
          ref={comboRef}
          // Combo: Value & Display Value
          value={formatValue(value)}
          placeholder={placeholder}
          formatter={
            formatter ||
            (() => {
              return getDisplayValue({
                value: formatValue(value),
                type: format || type,
                rangeId: rangeIdRef.current,
                ranges,
                separator
              })
            })
          }
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
          onChange={handleChange}
          onClick={handleOpen}
        />
        <RangeModal
          ref={modalRef}
          // Modal: Value & Display Value
          value={formatValue(value)}
          type={type}
          format={format}
          min={min}
          max={max}
          defaultPickerValue={defaultPickerValue}
          rangeId={rangeIdRef.current}
          ranges={ranges}
          titles={titles}
          hourStep={hourStep}
          minuteStep={minuteStep}
          diff={diff}
          // Modal: Status
          open={open}
          maskClosable={maskClosable}
          allowClear={allowClear}
          disabledStart={disabledStart}
          disabledEnd={disabledEnd}
          // Modal: Elements
          portal={portal}
          title={title}
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
          onBeforeOk={onBeforeOk}
        />
      </>
    )
  }
)

export default RangeCombo
