import React, { forwardRef } from 'react'
import WeekMain from './../WeekMain'
import DateMain from './DateMain'
import type { DatePickerMainProps } from './../types'
import type { CalendarRef } from '../../Calendar/types'
import type { PickerMainRef } from './../../Picker/types'

// 日期选择
const Main = forwardRef<unknown, DatePickerMainProps>(function DatePickerMain(
  {
    // Modal: Status
    open,
    // Value & Display Value
    value,
    // Style
    style,
    className,
    // Status
    type = 'date', // year | quarter | month | date | time | datetime | week
    hourStep,
    min,
    max,
    minuteStep,

    // Events
    onChange,
    allowClear
  },
  ref
) {
  if (type === 'week') {
    return (
      <WeekMain
        ref={ref as React.ForwardedRef<CalendarRef>}
        // Modal: Status
        open={open}
        // Value & Display Value
        value={value}
        // Status
        min={min}
        max={max}
        allowClear={allowClear}
        // Style
        style={style}
        className={className}
        // Events
        onChange={onChange}
      />
    )
  }

  return (
    <DateMain
      ref={ref as React.ForwardedRef<PickerMainRef>}
      // Modal: Status
      open={open}
      // Value & Display Value
      value={value}
      // Status
      type={type}
      min={min}
      max={max}
      hourStep={hourStep}
      minuteStep={minuteStep}
      allowClear={allowClear}
      // Style
      style={style}
      className={className}
      // Events
      onChange={onChange}
    />
  )
})

export default Main
