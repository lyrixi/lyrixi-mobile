import React, { forwardRef } from 'react'
import Item from './../../Item'
import GroupTitle from './../../GroupTitle'

const itemAbsoluteStyle = {
  position: 'absolute',
  left: 0,
  right: 0
}
// 普通列表
const List = (
  {
    allowClear,
    multiple,
    value,
    list,
    // List config
    itemRender,
    itemLayout,
    checkable,
    // virtual config
    height,
    // Events
    onChange
  },
  ref
) => {
  // 回传带checked属性的原始数据
  function handleChange(_raw) {
    let newValue = null
    // 多选
    if (multiple) {
      if (!_raw.checked) {
        newValue = (value || []).filter((valueItem) => valueItem?.id !== _raw.id)
      } else {
        newValue = [...(value || []), _raw]
      }
    }
    // 单选
    else {
      if (!_raw.checked) {
        newValue = allowClear ? null : _raw
      } else {
        newValue = _raw
      }
    }
    onChange && onChange(newValue, _raw)
  }

  return (
    // 滚动占位元素
    <div
      ref={ref}
      style={{
        position: 'relative',
        flex: 'none',
        height: height
      }}
    >
      {/* 可见项容器 */}
      {(list || []).map((item) => {
        if (item.virtualData.type === 'group') {
          return (
            <GroupTitle
              key={item.id || item.virtualData.index}
              anchor={item.anchor}
              title={item.name}
              description={item.description}
              // Virtual style
              style={{
                ...item?.style,
                ...itemAbsoluteStyle,
                top: item.virtualData.top
              }}
            />
          )
        }
        return (
          <Item
            key={item.id || item.virtualData.index}
            multiple={multiple}
            // Custom ItemRender or Item
            itemRender={itemRender}
            // Display Item
            title={item.name}
            // Other Item
            {...item}
            // Item Data
            itemData={item}
            // Global Config
            itemLayout={itemLayout}
            checkable={checkable}
            checked={value?.findIndex?.((valueItem) => valueItem?.id === item.id) >= 0}
            onSelect={handleChange}
            // Virtual style
            style={{
              ...item?.style,
              ...itemAbsoluteStyle,
              top: item.virtualData.top
            }}
          />
        )
      })}
    </div>
  )
}

export default forwardRef(List)
