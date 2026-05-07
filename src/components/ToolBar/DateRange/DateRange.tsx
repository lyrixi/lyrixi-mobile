import React, { forwardRef } from 'react'

// 内库使用-start
import DatePicker from './../../DatePicker'
import type { DatePickerRangeSelectorRootProps } from './../../DatePicker'
// 内库使用-end

/* 测试使用-start
import { DatePicker } from 'lyrixi-mobile'
测试使用-end */

const DateRangeBar = forwardRef<Record<string, unknown> | null, DatePickerRangeSelectorRootProps>(
  function DateRangeBar(props, ref) {
    return <DatePicker.RangeSelector ref={ref} {...props} />
  }
)

export default DateRangeBar
