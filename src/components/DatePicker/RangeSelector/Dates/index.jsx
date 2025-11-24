import React from 'react'
import RangeCombo from './../../RangeCombo'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Input from './../../../Input'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Input } from 'lyrixi-mobile'
测试使用-end */

// 自定义日期选择弹窗: 两框选择
export default function CustomDates({
  type,
  value,
  min,
  max,
  hourStep,
  minuteStep,
  disabledStart,
  disabledEnd,
  allowClear,
  onChange,

  // Modal
  portal,
  maskClassName,
  maskStyle,
  modalClassName,
  modalStyle
}) {
  return (
    <div className="lyrixi-datepicker-rangeselector-date">
      <RangeCombo
        ranges={null}
        maskClassName={maskClassName}
        maskStyle={maskStyle}
        modalClassName={modalClassName}
        modalStyle={modalStyle}
        portal={portal}
        type={type}
        value={value}
        disabledStart={disabledStart}
        disabledEnd={disabledEnd}
        min={min}
        max={max}
        separator="-"
        hourStep={hourStep}
        minuteStep={minuteStep}
        onChange={onChange}
        placeholder={LocaleUtil.locale('请选择', 'lyrixi.placeholder.select')}
        allowClear={allowClear}
        clearRender={({ clearable, onClear }) => {
          return clearable ? <Input.IconClear onClick={onClear} /> : <Input.IconRightArrow />
        }}
      />
    </div>
  )
}
