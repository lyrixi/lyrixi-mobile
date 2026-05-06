import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getSelectorOptions from './../getSelectorOptions'
import type { DatePickerRangeSelectorPanelProps } from '../../datePickerTypes'

// 内库使用-start
import Selector, { type SelectorItem } from './../../../Selector/Selector'
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Selector } from 'lyrixi-mobile'
测试使用-end */

// 日期快捷选择
const SelectorPanel = forwardRef<Record<string, unknown> | null, DatePickerRangeSelectorPanelProps>(
  function DatePickerRangeSelectorPanel(
    {
      className,
      // Main properties
      value,
      allowClear,
      onChange,

      rangeId,
      ranges = {},
      style
    },
    ref
  ) {
    const rootRef = useRef<HTMLDivElement | null>(null)
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <div
        style={style}
        className={DOMUtil.classNames('lyrixi-datepicker-rangemain-selector', className)}
        ref={rootRef}
      >
        {/* 快捷选择 */}
        <Selector
          columns={5}
          allowClear={allowClear}
          value={rangeId !== null && rangeId !== '' ? [{ id: rangeId }] : []}
          // 过滤自定义配置
          list={getSelectorOptions(ranges, (item) => {
            if (!Array.isArray(item?.value) || !item?.value.length) {
              return false
            }
            return true
          })}
          onChange={(newRange: SelectorItem[]) => {
            const newRangeId = (newRange?.[0]?.id as string) || ''
            const r = ranges as Record<string, [Date, Date] | unknown>
            const pair = r[newRangeId] as [Date, Date] | undefined
            const newValue: (Date | null)[] | null | undefined =
              newRangeId && pair && Array.isArray(pair) && pair.length === 2
                ? [pair[0], pair[1]]
                : value

            onChange &&
              onChange(newValue ?? null, {
                rangeId: newRangeId
              })
          }}
        />
      </div>
    )
  }
)

export default SelectorPanel
