// 第三方库导入
import React, { forwardRef } from 'react'
import { ListPagination } from 'lyrixi-mobile'

// 项目内部模块导入
// 内部组件函数导入
import formatPayload from './formatPayload'
import formatResult from './formatResult'
import formatViewItem from './formatViewItem'

// 简便的列表组件, 只需要传入url和params即可
const Main = ({ cacheName, virtual, queryParams }, ref) => {
  return (
    <ListPagination
      ref={ref}
      cacheName={cacheName}
      virtual={virtual}
      url="/"
      payload={queryParams}
      formatPayload={({ page, ...payload }) => {
        return formatPayload({
          ...payload,
          page
        })
      }}
      formatResult={formatResult}
      formatViewItem={formatViewItem}
      onChange={(value) => {
        console.log('onChange:', value)
      }}
    />
  )
}

export default forwardRef(Main)
