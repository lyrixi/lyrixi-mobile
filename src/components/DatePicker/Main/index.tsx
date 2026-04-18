import React, { forwardRef } from 'react'
import WeekMain from './../WeekMain'
import DateMain from './DateMain'

// 日期选择
function Main(
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
    onChange
  },
  ref
) {
  if (type === 'week') {
    return (
      <WeekMain
        ref={ref}
        // Modal: Status
        open={open}
        // Value & Display Value
        value={value}
        // Status
        min={min}
        max={max}
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
      ref={ref}
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
      // Style
      style={style}
      className={className}
      // Events
      onChange={onChange}
    />
  )
}

export default forwardRef(Main)
