// 第三方库导入
import React, { forwardRef } from 'react'
import ListPagination from 'lyrixi-mobile/components/ListPagination'

// 项目内部模块导入
import serverParams from './serverParams'
import formatResult from './formatResult'
import formatViewItem from './formatViewItem'

// 简便的列表组件, 只需要传入 url 和 payload 即可
const Main = ({ cacheName, virtual, queryParams }, ref) => {
  return (
    <ListPagination.Main
      ref={ref}
      cacheName={cacheName}
      virtual={virtual}
      url="/"
      payload={serverParams(queryParams)}
      formatResult={formatResult}
      formatViewItem={formatViewItem}
      onChange={(value) => {
        console.log('onChange:', value)
      }}
    />
  )
}

export default forwardRef(Main)
