import React, { forwardRef } from 'react'
import getList from './getList'
import valueToList from './valueToList'
import listToValue from './listToValue'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
import Picker from './../../../Picker'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Picker } from 'lyrixi-mobile'
测试使用-end */

// 日期选择
function Main(
  {
    // Modal: Status
    open,

    // Value & display value
    value,

    // Status
    min,
    max,
    type = 'date', // year | quarter | month | date | time | datetime
    hourStep,
    minuteStep,

    // Events
    onChange
  },
  ref
) {
  function handleChange(list) {
    let newValue = listToValue(list, type)

    if (min instanceof Date && DateUtil.compare(newValue, min, type) === -1) {
      newValue = new Date(min)
    }
    if (max instanceof Date && DateUtil.compare(newValue, max, type) === 1) {
      newValue = new Date(max)
    }
    onChange && onChange(newValue)
  }

  return (
    <Picker.Main
      ref={ref}
      // Modal: Status
      open={open}
      // Value & Display Value
      value={valueToList(value, type)}
      list={getList(value, type, { hourStep, minuteStep })}
      // Events
      onChange={handleChange}
    />
  )
}

export default forwardRef(Main)
