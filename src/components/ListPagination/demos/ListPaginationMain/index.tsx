// 第三方库导入
import React, { forwardRef, type Ref } from 'react'
import { ListPagination } from 'lyrixi-mobile'
import type { ListPaginationRef } from '../../Main'
import type { VirtualOptions } from '../../../ListAsync/VirtualList'

// 项目内部模块导入
import serverParams from './serverParams'
import formatResult from './formatResult'
import formatViewItem from './formatViewItem'

type MainProps = { cacheName?: string; virtual?: VirtualOptions; queryParams?: Record<string, unknown> }

// 简便的列表组件, 只需要传入 url 和 payload 即可
const Main = forwardRef<ListPaginationRef, MainProps>(function Main(
  { cacheName, virtual, queryParams },
  ref: Ref<ListPaginationRef>
) {
  return (
    <ListPagination.Main
      ref={ref}
      cacheName={cacheName}
      virtual={virtual}
      url="/"
      payload={serverParams(queryParams)}
      formatResult={formatResult}
      formatViewItem={formatViewItem}
      onChange={(value, _options) => {
        console.log('onChange:', value, _options)
      }}
    />
  )
})

export default Main
