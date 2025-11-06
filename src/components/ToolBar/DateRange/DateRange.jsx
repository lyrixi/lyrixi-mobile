import React, { forwardRef } from 'react'

// 内库使用-start
import DatePicker from './../../DatePicker'
// 内库使用-end

/* 测试使用-start
import { DatePicker } from 'lyrixi-mobile'
测试使用-end */

const DateRangeBar = (
  { rangeId, ranges, type, min, max, value, allowClear, onError, onChange },
  ref
) => {
  return (
    <DatePicker.RangeSelector
      ref={ref}
      allowClear={allowClear}
      type={type}
      min={min}
      max={max}
      rangeId={rangeId}
      ranges={ranges}
      value={value}
      onError={onError}
      onChange={onChange}
    />
  )
}

export default forwardRef(DateRangeBar)
