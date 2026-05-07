import React, { forwardRef } from 'react'
import getList from './getList'
import valueToList from './valueToList'
import listToValue from './listToValue'
import type { DatePickerMainSectionProps, PickerValueList } from './../../types'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
import Picker from './../../../Picker'
import type { PickerColumnItem, PickerMainRef } from './../../../Picker/Main/types'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Picker } from 'lyrixi-mobile'
测试使用-end */

type DateMainProps = DatePickerMainSectionProps

// 日期选择
const Main = forwardRef<PickerMainRef, DateMainProps>(function DateMain(
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
    // Style (与外层 Main 对齐；当前未向下传递)
    style: _style,
    className: _className,
    allowClear: _allowClear,
    weekStart: _weekStart,

    // Events
    onChange
  },
  ref
) {
  const pickerType = type

  function handleChange(list: PickerValueList) {
    let newValue = listToValue(list, pickerType)
    if (!newValue) return

    if (min instanceof Date && DateUtil.compare(newValue, min, pickerType) === -1) {
      newValue = new Date(min)
    }
    if (max instanceof Date && DateUtil.compare(newValue, max, pickerType) === 1) {
      newValue = new Date(max)
    }
    onChange?.(newValue)
  }

  return (
    <Picker.Main
      ref={ref}
      // Modal: Status
      open={open}
      // Value & Display Value
      value={valueToList(value, pickerType) as PickerColumnItem[] | null}
      list={getList(value, pickerType, { hourStep, minuteStep }) as PickerColumnItem[][]}
      // Events
      onChange={(v) => handleChange(v as PickerValueList)}
    />
  )
})

export default Main
