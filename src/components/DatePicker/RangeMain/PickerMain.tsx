import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  useState,
  type ReactNode
} from 'react'
import MultipleMain from './../MultipleMain'
import type {
  DatePickerMultipleValue,
  DatePickerMultipleTab,
  DatePickerRangePickerMainProps
} from './../types'

// 内库使用-start
import LocaleUtil from '../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

type PickerTab = DatePickerMultipleTab & {
  id: string
  description: ReactNode
  value: Date | null
  disabled?: boolean
}

// 日期区间弹窗
const PickerMain = forwardRef<Record<string, unknown> | null, DatePickerRangePickerMainProps>(
  function DatePickerRangePickerMain(
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
      separator,
      // Events
      onChange
    },
    ref
  ) {
    const mainRef = useRef<Record<string, unknown> | null>(null)

    useEffect(() => {
      const [startDate, endDate] = value || [null, null]

      setMultipleDate([
        {
          id: 'start',
          description: LocaleUtil.locale('开始时间', 'lyrixi_592c59589144ddc68d05d528da17dcdc'),
          value: startDate
        },
        {
          id: 'end',
          description: LocaleUtil.locale('结束时间', 'lyrixi_f782779e8b5d709462c8e71e0d9019f2'),
          value: endDate
        }
      ])
    }, [value])

    useImperativeHandle(ref, () => {
      return {
        mainElement: mainRef.current,
        getMainElement: () => mainRef.current,
        getValue: () => {
          const m = mainRef.current as { getValue?: () => DatePickerMultipleTab[] | null } | null
          const multipleValue = m?.getValue?.()
          if (!multipleValue) {
            return null
          }
          const a = multipleValue[0] as { value: Date | null }
          const b = multipleValue[1] as { value: Date | null }
          return [a.value, b.value] as (Date | null)[]
        }
      }
    })


    const [multipleDate, setMultipleDate] = useState<PickerTab[] | null>(null)
 // eslint-disable-line

    function handleChange(tabs: DatePickerMultipleValue) {
      if (!tabs || tabs.length < 2) return
      const newValue: (Date | null)[] = [tabs[0].value ?? null, tabs[1].value ?? null]
      onChange?.(newValue)
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
        separator={separator}
        // Events
        onChange={handleChange}
      />
    )
  }
)

export default PickerMain
