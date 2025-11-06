import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import getDefaultRanges from './../RangeMain/getDefaultRanges'
import getDisplayValue from './getDisplayValue'
import formatValue from './../RangeMain/formatValue'
import RangeModal from './../RangeModal'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-mobile'
测试使用-end */

// 日期区间
const RangeCombo = forwardRef(
  (
    {
      // Combo properties
      format,
      separator,

      // Modal
      portal,
      comboStyle,
      comboClassName,
      comboLeftIcon,
      comboRightIcon,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,

      // Modal properties
      diff,
      defaultPickerValue,
      onError,

      value,
      allowClear,
      multiple,
      onChange,
      type = 'date',
      min,
      max,
      hourStep,
      minuteStep,
      disabledStart,
      disabledEnd,

      rangeId,
      ranges,
      titles,

      // Combo props
      onBeforeOpen,
      ...props
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
          {...props}
          style={comboStyle}
          className={`lyrixi-datepicker-rangecombo${comboClassName}`}
          leftIcon={comboLeftIcon}
          rightIcon={comboRightIcon}
          separator={separator}
          // 用于回显displayValue
          formatter={() => {
            return getDisplayValue({
              value: formatValue(value),
              type: format || type,
              rangeId: rangeIdRef.current,
              ranges,
              separator
            })
          }}
          value={formatValue(value)}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          onClick={handleOpen}
        />
        <RangeModal
          ref={modalRef}
          open={open}
          onClose={handleClose}
          value={formatValue(value)}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          portal={portal}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
          className={modalClassName}
          style={modalStyle}
          title={title}
          defaultPickerValue={defaultPickerValue}
          type={type}
          diff={diff}
          onError={onError}
          min={min}
          max={max}
          hourStep={hourStep}
          minuteStep={minuteStep}
          disabledStart={disabledStart}
          disabledEnd={disabledEnd}
          rangeId={rangeIdRef.current}
          ranges={ranges}
          titles={titles}
        />
      </>
    )
  }
)

export default RangeCombo
