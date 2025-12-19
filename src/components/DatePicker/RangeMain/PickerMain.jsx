import React, { forwardRef, useRef, useEffect, useImperativeHandle, useState } from 'react'
import MultipleMain from './../MultipleMain'

// 内库使用-start
import LocaleUtil from '../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 日期区间弹窗
const PickerMain = function (
  {
    // Modal: Status
    open,
    // Value & Display Value
    value,
    // Status
    type,
    min,
    max,
    startDisabled,
    endDisabled,
    allowClear,
    // Elements
    portal,
    separator,
    // Events
    onChange
  },
  ref
) {
  const mainRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      mainElement: mainRef.current,
      getMainElement: () => mainRef.current,
      getValue: () => {
        let multipleValue = mainRef?.current?.getValue?.()
        if (!multipleValue) {
          return null
        }
        let newValue = [multipleValue?.[0].value, multipleValue?.[1].value]
        return newValue
      }
    }
  })

  const [multipleDate, setMultipleDate] = useState(null)
  useEffect(() => {
    const [startDate, endDate] = value || [null, null]

    setMultipleDate([
      {
        id: 'start',
        description: LocaleUtil.locale('开始时间', 'lyrixi.start.time'),
        value: startDate
      },
      {
        id: 'end',
        description: LocaleUtil.locale('结束时间', 'lyrixi.end.time'),
        value: endDate
      }
    ])
  }, [value]) // eslint-disable-line

  function handleChange(newMultipleDate) {
    let newValue = [newMultipleDate[0].value, newMultipleDate[1].value]
    onChange && onChange(newValue)
  }

  // 未构建完成Tabs不渲染
  if (!multipleDate) {
    return null
  }

  return (
    <MultipleMain
      ref={mainRef}
      // Modal: Status
      open={open}
      // Value & Display Value
      value={multipleDate.map((item) => {
        if (item.id === 'start' && startDisabled) {
          item.disabled = true
        } else if (item.id === 'end' && endDisabled) {
          item.disabled = true
        }
        return item
      })}
      // Status
      type={type}
      min={type === 'week' ? min : undefined}
      max={type === 'week' ? max : undefined}
      allowClear={allowClear}
      // Elements
      portal={portal}
      separator={separator}
      // Events
      onChange={handleChange}
    />
  )
}

export default forwardRef(PickerMain)
