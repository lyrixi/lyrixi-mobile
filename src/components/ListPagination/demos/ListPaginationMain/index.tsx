// 第三方库导入
import { forwardRef, type Ref } from 'react'

import { ListPagination } from 'lyrixi-mobile'
import type { ListPaginationMainRef } from '../../types'

// 项目内部模块导入
import serverParams from './serverParams'
import formatResult from './formatResult'
import formatViewItem from './formatViewItem'

import type { ListPaginationDemoMainProps } from './../ListPagination.demos.types'

// 简便的列表组件, 只需要传入 url 和 payload 即可
const Main = forwardRef<ListPaginationMainRef, ListPaginationDemoMainProps>(function Main(
  { cacheName, virtual, queryParams },
  ref: Ref<ListPaginationMainRef>
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
