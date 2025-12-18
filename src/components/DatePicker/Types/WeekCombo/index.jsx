import React, { forwardRef } from 'react'
import DatePickerCombo from './../../WeekCombo'
import Combo from './Combo'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
import DOMUtil from './../../../../utils/DOMUtil'
import Input from './../../../Input'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Input } from 'lyrixi-mobile'
测试使用-end */

// 周选择
const Week = forwardRef(
  (
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
  ) => {
    // 向前
    function handlePrev(e) {
      if (value instanceof Date === false) return
      onChange && onChange(DateUtil.previousWeek(value))
    }

    // 向后
    function handleNext(e) {
      if (value instanceof Date === false) return
      onChange && onChange(DateUtil.nextWeek(value))
    }

    return (
      <>
        <Input.IconLeftArrow className="lyrixi-datepicker-types-previous" onClick={handlePrev} />
        <DatePickerCombo
          ref={ref}
          value={value}
          min={min}
          max={max}
          onChange={(newValue) => {
            onChange && onChange(newValue)
          }}
          comboRender={({ comboRef, onClick }) => {
            return (
              <Combo
                ref={comboRef}
                className={DOMUtil.classNames('lyrixi-datepicker-types-date', className)}
                style={style}
                onClick={onClick}
                value={value}
              />
            )
          }}
        />
        <Input.IconRightArrow className="lyrixi-datepicker-types-next" onClick={handleNext} />
      </>
    )
  }
)

export default Week
