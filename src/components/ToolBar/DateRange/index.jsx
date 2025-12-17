import React, { useRef, useEffect, useState } from 'react'
import getDisplayValue from './../../DatePicker/RangeCombo/getDisplayValue'
import Dropdown from './../Dropdown'
import DateRange from './DateRange'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import DatePicker from './../../DatePicker'
import FooterBar from './../../FooterBar'
// 内库使用-end

/* 测试使用-start
import { DateUtil, LocaleUtil, DatePicker, FooterBar } from 'lyrixi-mobile'
测试使用-end */

const getDefaultRanges = DatePicker.getDefaultRanges

// 日期区间
function DateRangeBar({
  // Value & Display Value
  value: externalValue,
  rangeId: externalRangeId,
  type = 'date',
  placeholder = '',

  // Status
  allowClear,

  // Style
  style,
  className,
  color,
  borderColor,
  backgroundColor,
  sizeEqual,
  border,
  radius,
  size,
  maskStyle,
  maskClassName,
  modalStyle,
  modalClassName,

  // Element
  comboRender,
  comboChildren,
  arrowRender,
  portal,
  min,
  max,
  ranges,

  // Events
  onChange
}) {
  if (ranges === undefined) {
    // eslint-disable-next-line
    ranges = getDefaultRanges()
  }

  const [rangeId, setRangeId] = useState(externalRangeId)
  const [value, setValue] = useState(externalValue)
  const dropdownRef = useRef(null)

  useEffect(() => {
    init()
    // eslint-disable-next-line
  }, [externalRangeId, externalValue])

  // 初始化
  function init() {
    // 外部未传入rangeId, 则根据value获取rangeId
    if (!externalRangeId && externalValue) {
      // 如果有rangeId, 判断日期是否一致, 一致则使用rangeId
      if (
        rangeId &&
        ranges[rangeId] &&
        DateUtil.compareRange(externalValue, ranges[rangeId], type) === 0
      ) {
        // eslint-disable-next-line
        externalRangeId = rangeId
      }
      // 如果没有externalRangeId, 则根据value获取externalRangeId
      else {
        // eslint-disable-next-line
        externalRangeId = DatePicker.getRangeId(externalValue, { type, ranges })
      }
    }

    if (externalRangeId !== rangeId) {
      setRangeId(externalRangeId)
    }

    // Value
    if (DateUtil.compare(externalValue, value, type) !== 0) {
      setValue(externalValue)
    }
  }

  // 修改
  async function handleChange(newValue, { rangeId: newRangeId }) {
    setRangeId(newRangeId)
    setValue(newValue)
  }

  async function handleOk() {
    if (onChange) {
      let goOn = await onChange(value, { rangeId })
      if (goOn === false) return
    }
    dropdownRef.current?.close?.()
  }

  function handleCancel() {
    init()
    dropdownRef.current?.close?.()
  }

  return (
    <Dropdown
      ref={dropdownRef}
      // Value & Display Value
      placeholder={placeholder}
      // Style
      style={style}
      className={className}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      sizeEqual={sizeEqual}
      border={border}
      radius={radius}
      size={size}
      maskStyle={maskStyle}
      maskClassName={maskClassName}
      modalStyle={modalStyle}
      modalClassName={modalClassName}
      // Element
      comboRender={comboRender}
      comboChildren={comboChildren || getDisplayValue({ value, type, rangeId, ranges })}
      arrowRender={arrowRender}
      portal={portal}
      // Events
      onClose={handleCancel}
    >
      <div className="lyrixi-toolbar-daterange-modal">
        {/* Element: Body */}
        <div className="lyrixi-toolbar-daterange-modal-body">
          <DateRange
            // Value & Display Value
            value={value}
            rangeId={rangeId}
            // Status
            allowClear={allowClear}
            // Element
            type={type}
            min={min}
            max={max}
            ranges={ranges}
            // Events
            onChange={handleChange}
          />
        </div>

        {/* Element: Footer */}
        <FooterBar>
          <FooterBar.Button onClick={handleCancel}>
            {LocaleUtil.locale('取消', 'lyrixi.cancel')}
          </FooterBar.Button>
          <FooterBar.Button className="lyrixi-primary" onClick={handleOk}>
            {LocaleUtil.locale('确定', 'lyrixi.ok')}
          </FooterBar.Button>
        </FooterBar>
      </div>
    </Dropdown>
  )
}

// Component Name, for compact
DateRangeBar.componentName = 'ToolBar.DateRange'

export default DateRangeBar
