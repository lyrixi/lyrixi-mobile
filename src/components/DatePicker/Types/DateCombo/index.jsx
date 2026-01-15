import React, { forwardRef } from 'react'
import DatePickerCombo from './../../Combo'
import Combo from './Combo'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
import DOMUtil from './../../../../utils/DOMUtil'
import Input from './../../../Input'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Input } from 'lyrixi-mobile'
测试使用-end */

// 日期类型选择控件: 年月日季
const DateCombo = forwardRef(
  (
    {
      // Value & Display Value
      value,
      // Status
      type,
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
      if (!value) return
      let newValue = updateValue(value, -1)
      onChange && onChange(newValue)
    }

    // 向后
    function handleNext(e) {
      if (!value) return
      let newValue = updateValue(value, 1)
      onChange && onChange(newValue)
    }

    /**
     * 切换日期
     * @param {Date} newValue 日期
     * @param {Number} go 前行后退, 0: 当前; -1: 后退; 1: 前进;
     */
    function updateValue(value, go = 0) {
      let newValue = value
      if (['year', 'quarter', 'month', 'date'].includes(type) === false) {
        return
      }
      if (newValue instanceof Date === false) {
        newValue = new Date()
      }
      if (type === 'date') {
        // eslint-disable-next-line
        type = 'day'
      }

      if (go === -1) {
        return DateUtil.add(newValue, -1, type)
      }

      if (go === 1) {
        return DateUtil.add(newValue, -1, type)
      }

      return newValue
    }

    return (
      <>
        <Input.IconLeftArrow
          className="lyrixi-datepicker-types-combo-previous"
          onClick={handlePrev}
        />
        <DatePickerCombo
          value={value}
          type={type}
          min={min}
          max={max}
          onChange={onChange}
          comboRender={({ comboRef, onClick }) => {
            return (
              <Combo
                ref={comboRef}
                className={DOMUtil.classNames('lyrixi-datepicker-types-combo-date', className)}
                style={style}
                onClick={onClick}
                type={type}
                value={value}
              />
            )
          }}
          ref={ref}
        />
        <Input.IconRightArrow className="lyrixi-datepicker-types-combo-next" onClick={handleNext} />
      </>
    )
  }
)

export default DateCombo
