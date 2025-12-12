import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getTitleByType from './../utils/getTitleByType'
import WeekMain from './../WeekMain'
import DateMain from './DateMain'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

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
  // Expose tools
  const pickerMainRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      ...pickerMainRef.current,
      // 获取标题
      getTitle: () => {
        if (value instanceof Date) {
          let title = ''
          if (type === 'date') {
            title = DateUtil.format(value, 'YYYY-MM-DD ddd')
          } else {
            title = DateUtil.format(value, type)
          }
          return title
        }
        return getTitleByType(type)
      },
      getValue: () => {
        return value instanceof Date ? value : new Date()
      }
    }
  })

  if (type === 'week') {
    return (
      <WeekMain
        ref={pickerMainRef}
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
      ref={pickerMainRef}
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
