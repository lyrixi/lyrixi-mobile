import React from 'react'
import getSelectorOptions from './../../RangeMain/getSelectorOptions'
import type { DatePickerRangesMap } from './../../datePickerTypes'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
import Selector, { type SelectorItem } from './../../../Selector/Selector'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, Selector } from 'lyrixi-mobile'
测试使用-end */

type ButtonsProps = {
  value?: (Date | null)[] | null
  onChange?: (value: (Date | null)[] | null, meta?: { rangeId?: string | null }) => void
  rangeId?: string | null
  ranges?: DatePickerRangesMap
  allowClear?: boolean
}

// 日期快捷选择
function Buttons({ value, onChange, rangeId, ranges = {}, allowClear }: ButtonsProps) {
  return (
    <>
      {/* 快捷选择 */}
      <Selector
        columns={3}
        allowClear={allowClear}
        value={rangeId != null && rangeId !== '' ? [{ id: rangeId }] : []}
        list={getSelectorOptions(ranges)}
        onChange={(newRange: SelectorItem[]) => {
          if (ObjectUtil.isEmpty(newRange)) {
            onChange &&
              onChange(null, {
                rangeId: null
              })
            return
          }

          const newRangeId = (newRange?.[0]?.id as string) || ''
          const r = ranges as Record<string, (Date | null)[]>
          const newValue =
            newRangeId && Array.isArray(r[newRangeId]) && r[newRangeId].length === 2
              ? r[newRangeId]
              : value

          onChange &&
            onChange(newValue ?? null, {
              rangeId: newRangeId
            })
        }}
      />
    </>
  )
}

export default Buttons
