import React, { useRef, forwardRef } from 'react'
import { getDefaultRanges } from './../utils'
import getDisplayValue from '../RangeCombo/getDisplayValue'
import SelectorMain from './SelectorMain'
import PickerMain from './PickerMain'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 日期快捷选择
function RangeMain(
  {
    // Modal: Status
    open,

    // Value & Display Value
    value,
    rangeId,
    ranges,

    // Status
    type = 'date', // year | quarter | month | date | time | datetime
    rangesVisible,
    min,
    max,
    hourStep,
    minuteStep,
    startDisabled,
    endDisabled,
    allowClear,

    // Elements
    separator,
    titles,
    portal,

    // Events
    onChange
  },
  ref
) {
  // 默认标题
  if (titles === undefined) {
    // eslint-disable-next-line
    titles = {
      selector: LocaleUtil.locale('快捷选择', 'noKey_0537a64d8786690887268a38e2adcee7'),
      custom: LocaleUtil.locale('自定义', 'noKey_f1d4ff50f3828f9b73412e7d94e6dd6e')
    }
  }

  const selectorRef = useRef(null)

  if (ranges === undefined) {
    // eslint-disable-next-line
    ranges = getDefaultRanges()
  }

  // 判断有没有快捷选择
  let hasSelector = false
  if (rangesVisible && ranges) {
    for (let key in ranges) {
      if (Array.isArray(ranges[key])) {
        hasSelector = true
      }
    }
  }

  // unify onChange
  function handleChange(newValue, { rangeId } = {}) {
    onChange?.(newValue, {
      rangeId: rangeId || null,
      ranges,
      displayValue: getDisplayValue({ value: newValue, type, rangeId, ranges, separator })
    })
  }

  return (
    <>
      {/* 快捷选择: 标题 */}
      {hasSelector && typeof titles?.selector === 'string' ? (
        <p className="lyrixi-datepicker-rangemain-selector-title lyrixi-selector">
          {titles.selector}
        </p>
      ) : null}

      {hasSelector && (
        <SelectorMain
          ref={selectorRef}
          value={value}
          allowClear={allowClear}
          onChange={handleChange}
          rangeId={rangeId}
          ranges={ranges}
        />
      )}

      {/* 自定义 */}
      {hasSelector && typeof titles?.custom === 'string' ? (
        <p className="lyrixi-datepicker-rangemain-selector-title lyrixi-custom">{titles.custom}</p>
      ) : null}
      <PickerMain
        ref={ref}
        // Modal: Status
        open={open}
        // Value & Display Value
        value={value}
        // Status
        type={type}
        min={min}
        max={max}
        hourStep={hourStep}
        minuteStep={minuteStep}
        startDisabled={startDisabled}
        endDisabled={endDisabled}
        allowClear={allowClear}
        // Elements
        portal={portal}
        separator={separator}
        onChange={handleChange}
      />
    </>
  )
}

export default forwardRef(RangeMain)
