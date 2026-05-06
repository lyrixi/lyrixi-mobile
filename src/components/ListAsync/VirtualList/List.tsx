import React, { forwardRef } from 'react'

import type { VirtualListProps } from './types'
import type { RawItem } from './../../List/List/types'

// 内库使用-start
import List, { ListRef } from './../../List/List'
// 内库使用-end

/* 测试使用-start
import { List } from 'lyrixi-mobile'
测试使用-end */

// 虚拟滚动条需要用绝对定位
const itemAbsoluteStyle = {
  position: 'absolute' as const,
  left: 0,
  right: 0
}

// 普通列表
const VirtualList = (
  {
    // Value & Display Value
    height, // virtual list container height
    value,
    multiple,
    allowClear,
    list,
    // Status
    checkable,
    // Style
    itemStyle,
    itemClassName,
    itemLayout,
    checkboxVariant,
    checkboxPosition,
    // Elements
    itemRender,
    // Events
    onChange
  }: VirtualListProps,
  ref: React.Ref<ListRef>
) => {
  return (
    <List
      ref={ref}
      // Value & Display Value
      value={value}
      multiple={multiple}
      allowClear={allowClear}
      list={list?.map((item) => {
        // 虚拟滚动条需要用绝对定位
        const virtualData = (item as RawItem & { virtualData?: { top?: number } }).virtualData
        return {
          ...item,
          style: {
            ...(item.style as React.CSSProperties | undefined),
            ...itemAbsoluteStyle,
            top: virtualData?.top
          }
        }
      })}
      // Status
      checkable={checkable}
      // Style
      style={{
        position: 'relative',
        flex: 'none',
        height: height
      }}
      itemStyle={itemStyle}
      itemClassName={itemClassName}
      itemLayout={itemLayout}
      checkboxVariant={checkboxVariant}
      checkboxPosition={checkboxPosition}
      // Elements
      itemRender={itemRender}
      // Events
      onChange={onChange}
    />
  )
}

export default forwardRef<ListRef, VirtualListProps>(VirtualList)
