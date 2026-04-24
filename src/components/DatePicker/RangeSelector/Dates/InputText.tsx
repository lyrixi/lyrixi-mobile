import React from 'react'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
import Input from './../../../Input'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Input } from 'lyrixi-mobile'
测试使用-end */

type InputTextProps = {
  value?: (Date | null)[] | null
  displayValue?: string
  type?: string
  separator?: string
  onChange?: (value: (Date | null)[] | null) => void
}

// Custom Input
const InputText = ({
  // Value & Display Value
  value,
  displayValue,
  // Status
  type = 'date',
  // Elements
  separator,
  // Events
  onChange
}: InputTextProps) => {
  // 开始和结束日期
  let startDate = Array.isArray(value) && value[0] instanceof Date ? value[0] : null
  let endDate = Array.isArray(value) && value[1] instanceof Date ? value[1] : null

  return (
    <Input.Node
      // 不设置value，会导致allowClear失效
      value={startDate || endDate ? '1' : ''}
      formatter={() => {
        return startDate || endDate ? (
          <div className="lyrixi-datepicker-rangecombo-dates">
            <div className="lyrixi-datepicker-rangecombo-date start">
              {startDate ? DateUtil.format(startDate, type) : ''}
            </div>
            <div className="lyrixi-datepicker-rangecombo-separator">{separator || ' ~ '}</div>
            <div className="lyrixi-datepicker-rangecombo-date end">
              {endDate ? DateUtil.format(endDate, type) : ''}
            </div>
          </div>
        ) : null
      }}
      onChange={(val) => {
        if (!val) {
          onChange && onChange(null)
        }
      }}
    />
  )
}

export default InputText
