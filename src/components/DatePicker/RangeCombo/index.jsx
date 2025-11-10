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
      leftIcon,
      rightIcon,
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

      // Events
      onChange,
      onBeforeOpen,
      onError
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
          mode={mode}
          multiple={multiple}
          // Combo: Status
          readOnly={readOnly}
          disabled={disabled}
          allowClear={allowClear}
          // Combo: Style
          style={style}
          className={DOMUtil.classNames('lyrixi-datepicker-rangecombo', className)}
          // Combo: Element
          leftIcon={leftIcon}
          rightIcon={rightIcon}
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
          multiple={multiple}
          disabledStart={disabledStart}
          disabledEnd={disabledEnd}
          // Modal: Elements
          portal={portal}
          title={title}
          // Modal: Style
          safeArea={safeArea}
          modalStyle={modalStyle}
          modalClassName={modalClassName}
          maskStyle={maskStyle}
          maskClassName={maskClassName}
          // Events
          onClose={handleClose}
          onChange={handleChange}
          onError={onError}
        />
      </>
    )
  }
)

export default RangeCombo
