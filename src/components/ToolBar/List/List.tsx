import React from 'react'

import type { ListBarProps } from './types'

// 内库使用-start
import List from './../../List'
// 内库使用-end

/* 测试使用-start
import { List } from 'lyrixi-mobile'
测试使用-end */

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

export type { ListBarProps } from './types'

