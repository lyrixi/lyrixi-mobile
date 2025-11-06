import React from 'react'

// 内库使用-start
import List from './../../../List'
import Typography from './../../../Typography'
// 内库使用-end

/* 测试使用-start
import { List, Typography } from 'lyrixi-mobile'
测试使用-end */

// 搜索结果列表组件
export default function ListItem({ list, keyword, onChange }) {
  return (
    <List
      list={list
        // 过滤掉没有搜索结果的项
        .filter((item) => Array.isArray(item.value) && item.value.length)
        // searchDeepTree过滤掉children, 否则list会当作子项把children也展示出来
        .map((item) => {
          // 构建路径名称
          let pathName = item.value
            .map((option) => {
              return option.name
            })
            .join('/')

          // 移除children属性，避免被List组件当作子项展示
          const { children, ...restItem } = item
          return {
            ...restItem,
            title: <Typography.Text highlight={keyword}>{pathName}</Typography.Text>
          }
        })}
      onChange={(items) => onChange(items[0])}
    />
  )
}
