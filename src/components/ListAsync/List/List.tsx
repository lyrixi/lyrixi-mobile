import React from 'react'

// 内库使用-start
import ListBase from './../../List'
// 内库使用-end

/* 测试使用-start
import { List as ListBase } from 'lyrixi-mobile'
测试使用-end */

// 包一层 List，便于后续对列表做统一调整，当前透传属性即可
export default function List({
  value,
  list,
  formatViewList,
  formatViewItem,
  multiple,
  allowClear,
  checkable,
  itemStyle,
  itemClassName,
  itemLayout,
  checkboxVariant,
  checkboxPosition,
  itemRender,
  onChange
}) {
  return (
    <ListBase
      value={value}
      list={list}
      formatViewList={formatViewList}
      formatViewItem={formatViewItem}
      multiple={multiple}
      allowClear={allowClear}
      checkable={checkable}
      itemStyle={itemStyle}
      itemClassName={itemClassName}
      itemLayout={itemLayout}
      checkboxVariant={checkboxVariant}
      checkboxPosition={checkboxPosition}
      itemRender={itemRender}
      onChange={onChange}
    />
  )
}
