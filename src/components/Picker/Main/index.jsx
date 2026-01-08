import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import dimensionalArray from './utils/dimensionalArray'
import formatValue from './utils/formatValue'
import getIndex from './utils/getIndex'
import Slots from './Slots'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

let Main = forwardRef(
  (
    {
      // Modal: Status
      open = true,

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
  ) => {
    // 一维数组强制改成二维数组
    let lists = list
    let listCount = 1

    let dimensional = dimensionalArray(list)
    if (dimensional === 2) {
      listCount = list.length
    } else if (dimensional === 1) {
      listCount = 1
      lists = [list]
    } else {
      listCount = 0
      lists = null
    }

    // 节点
    let mainRef = useRef(null)
    let slotsRef = useRef(null)
    let valueRef = useRef(null)
    valueRef.current = formatValue(value, { lists, listCount })

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

    useEffect(() => {
      update()
      // eslint-disable-next-line
    }, [value])

    // 更新视图
    function update() {
      let slots = slotsRef.current?.querySelectorAll?.('.lyrixi-picker-slot')
      for (let i = 0; i < slots.length; i++) {
        let slot = slots[i]
        let y = -getIndex(valueRef.current[i], lists[i]) * 44
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
          lists={lists}
          // Events
          onDragEnd={({ rowIndex, slotIndex }) => {
            valueRef.current[slotIndex] = lists[slotIndex][rowIndex]
            onChange && onChange(valueRef.current)
          }}
        />
      </div>
    )
  }
)

export default Main
