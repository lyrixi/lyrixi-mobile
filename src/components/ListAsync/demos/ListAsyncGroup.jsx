import React, { useRef, useState } from 'react'
import { Page, ListAsync } from 'lyrixi-mobile'
import listGroupData from './listGroupData'

// 分组列表：loadData 返回带 children 的数据，一级为 group 标题，children 为子级列表项
export default () => {
  const mainRef = useRef(null)
  const [value, setValue] = useState(null)

  return (
    <Page>
      <ListAsync
        ref={mainRef}
        itemLayout="vertical"
        value={value}
        loadData={() => {
          return {
            status: 'noMore',
            message: '没有更多了',
            list: listGroupData
          }
        }}
        onChange={setValue}
        checkable
        allowClear
      />
    </Page>
  )
}
