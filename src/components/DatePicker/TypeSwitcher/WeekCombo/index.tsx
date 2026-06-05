import React, { forwardRef, type MouseEvent, type Ref } from 'react'
import DatePickerCombo from './../../WeekCombo'
import Combo from './Combo'
import type { DatePickerTypeSwitcherWeekComboProps } from '../../types/DatePicker.TypeSwitcher.WeekCombo.types'
import type { DatePickerWeekComboRef } from './../../types'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
import DOMUtil from './../../../../utils/DOMUtil'
import Input from './../../../Input'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Input } from 'lyrixi-mobile'
测试使用-end */

// 周选择
const Week = forwardRef<unknown, DatePickerTypeSwitcherWeekComboProps>(function TypeSwitcherWeekCombo(
  {
    // Value & Display Value
    value,
    // Status
    min,
    max,
    // Style
    style,
    className,
    // Events
    onChange
  },
  ref
) {
  // 向前
  function handlePrev(_e: MouseEvent) {
    if (!(value instanceof Date)) return
    onChange?.(DateUtil.previousWeek(value))
  }

  // 向后
  function handleNext(_e: MouseEvent) {
    if (!(value instanceof Date)) return
    onChange?.(DateUtil.nextWeek(value))
  }

  return (
    <>
      <Input.IconLeftArrow
        className="lyrixi-datepicker-typeswitcher-combo-previous"
        onClick={handlePrev}
      />
      <DatePickerCombo
        ref={ref as React.Ref<DatePickerWeekComboRef>}
        value={value}
        min={min}
        max={max}
        onChange={(v) => {
          if (v instanceof Date) onChange?.(v)
        }}
        comboRender={({ comboRef, onClick }) => {
          return (
            <Combo
              ref={comboRef as Ref<Record<string, unknown> | null>}
              className={DOMUtil.classNames('lyrixi-datepicker-typeswitcher-combo-date', className)}
              style={style}
              onClick={onClick}
              value={value}
            />
          )
        }}
      />
      <Input.IconRightArrow
        className="lyrixi-datepicker-typeswitcher-combo-next"
        onClick={handleNext}
      />
    </>
  )
})

export default Week
