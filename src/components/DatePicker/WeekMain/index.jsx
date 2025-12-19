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
    const {
      element: mainElement,
      getElement: getMainElement,
      ...otherMainRef
    } = weekMainRef?.current || {}
    return {
      mainElement: mainElement,
      getMainElement: getMainElement,
      ...otherMainRef,
      getValue: () => {
        return value instanceof Date ? value : null
      }
    }
  })

  async function handleChange(rangeValue, { currentDate, action }) {
    onChange && onChange(action === 'clear' ? null : currentDate)
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
      allowClear={allowClear}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-datepicker-weekmain-calendar', className)}
      // Events
      onChange={handleChange}
    />
  )
}

export default forwardRef(WeekMain)
