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
  direction,
  block,
  color,
  borderColor,
  backgroundColor,
  border = 'none',
  size,
  sizeEqual,
  fontSize,
  radius = 'm',
  style,
  className,

  maskStyle,
  maskClassName,
  modalStyle,
  modalClassName,

  // Element
  comboRender,
  children,
  arrowRender,
  portal,
  min,
  max,
  ranges,

  // Events
  onOk,
  onChange
}) {
  if (ranges === undefined) {
    // eslint-disable-next-line
    ranges = getDefaultRanges()
  }

  let [rangeId, setRangeId] = useState(externalRangeId)
  let [value, setValue] = useState(externalValue)
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
    // 触发 onOk
    if (onOk) {
      let goOn = await onOk?.(value, { rangeId })
      if (goOn === false) return false
      if (goOn instanceof Array) {
        // eslint-disable-next-line
        value = goOn
      }
    }

    onChange?.(value, { rangeId })
    dropdownRef.current?.close?.()
  }

  function handleCancel() {
    dropdownRef.current?.close?.()
  }

  function handleClose() {
    init()
  }

  return (
    <Dropdown
      ref={dropdownRef}
      // Style
      style={style}
      className={className}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      sizeEqual={sizeEqual}
      fontSize={fontSize}
      border={border}
      direction={direction}
      radius={radius}
      size={size}
      maskStyle={maskStyle}
      maskClassName={maskClassName}
      modalStyle={modalStyle}
      modalClassName={modalClassName}
      // Element
      comboRender={comboRender}
      arrowRender={arrowRender}
      modalRender={() => {
        return (
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
              <FooterBar.Button block backgroundColor="default" onClick={handleCancel}>
                {LocaleUtil.locale('取消', 'lyrixi_625fb26b4b3340f7872b411f401e754c')}
              </FooterBar.Button>
              <FooterBar.Button block color="white" backgroundColor="primary" onClick={handleOk}>
                {LocaleUtil.locale('确定', 'lyrixi_38cf16f2204ffab8a6e0187070558721')}
              </FooterBar.Button>
            </FooterBar>
          </div>
        )
      }}
      portal={portal}
      // Events
      onClose={handleClose}
    >
      {/* comboChildren */}
      {children || getDisplayValue({ value, type, rangeId, ranges }) || placeholder}
    </Dropdown>
  )
}

// Component Name, for compact
DateRangeBar.componentName = 'ToolBar.DateRange'

export default DateRangeBar
