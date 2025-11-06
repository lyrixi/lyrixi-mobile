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
  // Combo Style
  comboColor,
  comboBackgroundColor,
  comboShape,
  comboBorder,
  comboRadius,
  comboSize,
  title,
  arrowRender,
  comboStyle,
  comboClassName,

  // Modal
  portal,
  maskClassName,
  maskStyle,
  modalClassName,
  modalStyle,

  // Combo Value
  type = 'date',
  min,
  max,
  rangeId: externalRangeId,
  ranges,
  value: externalValue,
  allowClear,
  onChange
  // Combo
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
      portal={portal}
      title={title || getDisplayValue({ value, type, rangeId, ranges })}
      arrowRender={arrowRender}
      comboColor={comboColor}
      comboBackgroundColor={comboBackgroundColor}
      comboShape={comboShape}
      comboBorder={comboBorder}
      comboRadius={comboRadius}
      comboSize={comboSize}
      comboStyle={comboStyle}
      comboClassName={comboClassName}
      maskClassName={maskClassName}
      maskStyle={maskStyle}
      modalClassName={modalClassName}
      modalStyle={modalStyle}
      onClose={handleCancel}
      ref={dropdownRef}
    >
      <div className="lyrixi-toolbar-daterange-modal">
        <div className="lyrixi-toolbar-daterange-modal-body">
          <DateRange
            min={min}
            max={max}
            type={type}
            value={value}
            allowClear={allowClear}
            rangeId={rangeId}
            ranges={ranges}
            onChange={handleChange}
          />
        </div>
        <FooterBar>
          <FooterBar.Button onClick={handleCancel}>
            {LocaleUtil.locale('取消', 'lyrixi_cancel')}
          </FooterBar.Button>
          <FooterBar.Button className="lyrixi-primary" onClick={handleOk}>
            {LocaleUtil.locale('确定', 'lyrixi_ok')}
          </FooterBar.Button>
        </FooterBar>
      </div>
    </Dropdown>
  )
}

// Component Name, for compact
DateRangeBar.componentName = 'ToolBar.DateRange'

export default DateRangeBar
