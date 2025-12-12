import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { updateRangeValue, getDefaultRanges } from './../utils'
import getDisplayValue from '../RangeCombo/getDisplayValue'
import getCustomRangeId from './getCustomRangeId'
import getDefaultRangeId from './getDefaultRangeId'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import Buttons from './Buttons'
import Dates from './Dates'

// 日期快捷选择
function RangeSelector(
  {
    // Value & Display Value
    value,
    autoSwapValue,
    type = 'date', // year | quarter | month | date | time | datetime
    rangeId,
    ranges,
    // Status
    min,
    max,
    hourStep,
    minuteStep,
    disabledStart,
    disabledEnd,
    allowClear,
    // Style
    style,
    className,
    // Elements
    portal,
    // Events
    onChange,
    onBeforeOk
  },
  ref
) {
  if (ranges === undefined) {
    // eslint-disable-next-line
    ranges = getDefaultRanges()
  }

  // 自定义项id
  let customRangeId = getCustomRangeId(ranges)

  // 当前选中项id
  let defaultRangeId = getDefaultRangeId(value, ranges, type)
  let currentRangeId = rangeId ?? defaultRangeId

  const mainRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      mainDOM: mainRef.current,
      getMainDOM: () => mainRef.current
    }
  })

  // unify onChange
  function handleChange(newValue, { rangeId }) {
    onChange &&
      onChange(updateRangeValue(newValue, type, { autoSwapValue }), {
        rangeId: rangeId || null,
        ranges,
        displayValue: getDisplayValue({ value: newValue, type, rangeId, ranges })
      })
  }

  return (
    <div
      style={style}
      className={DOMUtil.classNames('lyrixi-datepicker-rangeselector-selector', className)}
      ref={mainRef}
    >
      {/* 快捷选择 */}
      <Buttons
        value={value}
        onChange={handleChange}
        rangeId={currentRangeId}
        ranges={ranges}
        allowClear={allowClear}
      />

      {/* 自定义区间: 文本框选择 */}
      {customRangeId && currentRangeId === customRangeId && (
        <Dates
          // Value & Display Value
          value={value}
          min={min}
          max={max}
          // Status
          type={type}
          allowClear={allowClear}
          hourStep={hourStep}
          minuteStep={minuteStep}
          disabledStart={disabledStart}
          disabledEnd={disabledEnd}
          // Elements
          portal={portal}
          // Events
          onChange={(newValue) => handleChange(newValue, { rangeId: customRangeId })}
          onBeforeOk={onBeforeOk}
        />
      )}
    </div>
  )
}

export default forwardRef(RangeSelector)
