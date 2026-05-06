// 第三方库导入
import React, { forwardRef, type Ref } from 'react'
import { ListPagination } from 'lyrixi-mobile'
import type { ListPaginationRef } from 'lyrixi-mobile/components/ListPagination/Main'

import type { IndexBarListMainProps } from './types'

// 项目内部模块导入
// 内部组件函数导入
import formatPayload from './formatPayload'
import formatResult from './formatResult'
import formatViewList from './formatViewList'

export type { IndexBarListMainProps } from './types'

const Main = (
  { cacheName, virtual, queryParams, onLoad, onScrollEnd }: IndexBarListMainProps,
  ref: Ref<ListPaginationRef>
) => {
  return (
    <ListPagination.Main
      ref={ref}
      cacheName={cacheName}
      virtual={virtual}
      url="/"
      payload={queryParams}
      formatPayload={({ page, ...payload }: { page?: number } & Record<string, unknown>) => {
        return formatPayload({
          ...payload,
          page
        })
      }}
      formatResult={formatResult}
      formatViewList={formatViewList}
      onLoad={onLoad}
      onScrollEnd={onScrollEnd}
      onChange={(value) => {
        console.log(value)
      }}
    />
  )
}

export default forwardRef<ListPaginationRef, IndexBarListMainProps>(Main)
