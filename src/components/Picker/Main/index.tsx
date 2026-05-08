import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import dimensionalArray from './utils/dimensionalArray'
import formatValue from './utils/formatValue'
import getIndex from './utils/getIndex'

import Slots from './Slots'

import type { PickerColumnItem, PickerMainProps, PickerMainRef } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Main = forwardRef<PickerMainRef, PickerMainProps>(function Main(
  {
    open: _open,
    allowClear: _allowClear,
    // Value & Display Value
    value,
    list,

    // Style
    style,
    className,

    // Events
    onChange
  },
  ref
) {
  void _open

  void _allowClear

  // 一维数组强制改成二维数组
  let lists: PickerColumnItem[][] | null = null

  let listCount = 0


  const rawList = list

  const dimensional = dimensionalArray(rawList)

  if (dimensional === 2) {
    listCount = (rawList as PickerColumnItem[][]).length
    lists = rawList as PickerColumnItem[][]
  } else if (dimensional === 1) {
    listCount = 1
    lists = [rawList as PickerColumnItem[]]
  } else {
    listCount = 0
    lists = null
  }


  // 节点
  const mainRef = useRef<HTMLDivElement | null>(null)

  const slotsRef = useRef<HTMLDivElement | null>(null)

  const valueRef = useRef<PickerColumnItem[] | null>(null)

  valueRef.current = formatValue(value, { lists, listCount })


  useEffect(() => {
    update()
    // eslint-disable-next-line
  }, [value])


  useImperativeHandle(ref, () => {
    return {
      mainElement: mainRef.current,
      getMainElement: () => mainRef.current,
      // 延迟解决Modal的useEffect open 后执行的问题
      getValue: () => {
        return valueRef.current
      },
      update: update
    }
  })


  // 更新视图
  function update() {
    const root = slotsRef.current
    const v = valueRef.current
    if (!root || !v || !lists) return
    const slots = root.querySelectorAll('.lyrixi-picker-slot')
    for (let i = 0; i < slots.length; i++) {
      const slot = slots[i] as HTMLElement
      const y = -getIndex(v[i], lists[i]) * 44
      slot.style.transform = `translateY(${y}px)`
    }
  }


  return (
    <div
      ref={mainRef}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-picker-main', className)}
    >
      {/* Element: Layer */}
      <div className="lyrixi-picker-layer">
        <div className="lyrixi-picker-layer-frame"></div>
      </div>

      {/* Element: Slots */}
      <Slots
        ref={slotsRef}
        // Value & Display Value
        lists={lists ?? undefined}
        // Events
        onDragEnd={({ rowIndex, slotIndex }) => {
          if (!valueRef.current || !lists) return
          const si = typeof slotIndex === 'string' ? Number(slotIndex) : (slotIndex as number)
          valueRef.current[si] = lists[si][rowIndex]
          onChange?.(valueRef.current)
        }}
      />
    </div>
  )
})
export type { PickerMainProps, PickerMainRef } from '../types'

export default Main
