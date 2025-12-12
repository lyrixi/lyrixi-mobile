import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
import DOMUtil from './../../../utils/DOMUtil'
import Calendar from './../../Calendar'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Calendar } from 'lyrixi-mobile'
测试使用-end */

// 日期快捷选择
function WeekMain(
  {
    // Modal: Status
    open = true,
    // Value & Display Value
    value,
    // Status
    min,
    max,
    allowClear,
    weekStart = 'Monday', // Monday | Sunday
    // Style
    style,
    className,
    // Events
    onChange
  },
  ref
) {
  // Range value
  const rangeValueRef = useRef(null)

  // Expose tools
  const weekMainRef = useRef(null)
  useImperativeHandle(ref, () => {
    const { rootDOM: mainDOM, getRootDOM: getMainDOM, ...otherMainRef } = weekMainRef?.current || {}
    return {
      mainDOM: mainDOM,
      getMainDOM: getMainDOM,
      ...otherMainRef,
      getValue: () => {
        return value instanceof Date ? value : null
      }
    }
  })

  async function handleChange(rangeValue, { selectDate }) {
    // 允许清空时, 相同周则清空
    if (allowClear && value instanceof Date) {
      if (DateUtil.format(value, 'YYYY-W') === DateUtil.format(selectDate, 'YYYY-W')) {
        // eslint-disable-next-line
        selectDate = null
      }
    }

    onChange && onChange(selectDate)
  }

  let weekDates = DateUtil.getWeekDates(value, weekStart)
  rangeValueRef.current =
    Array.isArray(weekDates) && weekDates.length ? [weekDates[0], weekDates[6]] : null

  return (
    <Calendar
      ref={weekMainRef}
      // Value & Display Value
      value={rangeValueRef.current}
      // Status
      min={min}
      max={max}
      draggable={['horizontal']}
      weekStart={'Monday'}
      selectionMode={'range'}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-datepicker-weekmain-calendar', className)}
      // Events
      onChange={handleChange}
    />
  )
}

export default forwardRef(WeekMain)
