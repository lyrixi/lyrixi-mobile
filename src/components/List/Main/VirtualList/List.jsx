import React, { forwardRef } from 'react'
import List from './../../List'

// 虚拟滚动条需要用绝对定位
const itemAbsoluteStyle = {
  position: 'absolute',
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
    /*
    // Group
    {
      title: '',
      children: ...
    },
    // No Group
    {
      _raw: 原始数据, 必传,
      avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg',
      id: '选项1',
      title: '选项1',
      description: '普通描述',
      content: '自定义内容',
      actionRender: () => {
        return <Button>action</Button>
      }
    }
    */

    // Status
    checkable,

    // Style
    itemStyle,
    itemClassName,
    itemLayout,

    // Elements
    itemRender,
    checkboxRender,

    // Events
    onChange
  },
  ref
) => {
  // 滚动占位元素
  return (
    <List
      ref={ref}
      // Value & Display Value
      value={value}
      multiple={multiple}
      allowClear={allowClear}
      list={list?.map((item) => {
        // 虚拟滚动条需要用绝对定位
        item.style = {
          ...item?.style,
          ...itemAbsoluteStyle,
          top: item.virtualData.top
        }
        return item
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
      // Elements
      itemRender={itemRender}
      checkboxRender={checkboxRender}
      // Events
      onChange={onChange}
    />
  )
}

export default forwardRef(VirtualList)
