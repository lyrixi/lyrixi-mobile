import React from 'react'

// 内库使用-start
import List from './../../List'
import type { ListProps } from './../../List/List'
// 内库使用-end

/* 测试使用-start
import { List } from 'lyrixi-mobile'
测试使用-end */

export interface ListBarProps {
  value?: ListProps['value']
  list: NonNullable<ListProps['list']>
  onChange?: ListProps['onChange']
}

function ListBar({ value, list, onChange }: ListBarProps) {
  return (
    <List
      value={value}
      list={list}
      checkable
      checkboxPosition="right"
      checkboxVariant="text"
      onChange={onChange}
    />
  )
}
export default ListBar
