import React, { useImperativeHandle, useRef, forwardRef } from 'react'

import type { DatePickerTypeSwitcherWeekComboComboProps } from '../../types/DatePicker.TypeSwitcher.WeekCombo.types'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

// 用于自定义渲染Combo, 按照要求返回comboElement
const Combo = forwardRef<Record<string, unknown> | null, DatePickerTypeSwitcherWeekComboComboProps>(
  function TypesWeekCombo(
  {
    // Value & Display Value
    value,

    // Style
    style,
    className,

    // Elements
    children,

    // Events
    onClick
  },
  ref
) {
  const comboRef = useRef<HTMLDivElement | null>(null)
  useImperativeHandle(ref, () => {
    return {
      element: comboRef.current,
      getElement: () => {
        return comboRef.current
      }
    }
  })

  return (
    <div ref={comboRef} style={style} className={className} onClick={onClick}>
      {value instanceof Date ? DateUtil.format(value, 'week') : null}
    </div>
  )
})

export default Combo
