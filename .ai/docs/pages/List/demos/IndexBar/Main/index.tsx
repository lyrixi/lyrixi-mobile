// 第三方库导入
import React, { forwardRef, type Ref } from 'react'

import { ListPagination } from 'lyrixi-mobile'

import type { ListPaginationMainRef } from 'lyrixi-mobile'
import type { IndexBarListMainProps, ListDemoFormatPayloadParams } from './types'

// 项目内部模块导入
// 内部组件函数导入
import formatPayload from './formatPayload'
import formatResult from './formatResult'
import formatViewList from './formatViewList'

const Main = (
  { cacheName, virtual, queryParams, onLoad, onScrollEnd }: IndexBarListMainProps,
  ref: Ref<ListPaginationMainRef>
) => {
  return (
    <ListPagination.Main
      ref={ref}
      cacheName={cacheName}
      virtual={virtual}
      url="/"
      payload={queryParams}
      formatPayload={({ page, ...payload }: ListDemoFormatPayloadParams) => {
        return formatPayload({
          ...payload,
          page
        })
      }}
      formatResult={formatResult}
      formatViewList={formatViewList}
      onLoad={onLoad}
      onScrollEnd={onScrollEnd}
      onChange={() => {}}
    />
  )
}

export type { IndexBarListMainProps } from './types'
export default forwardRef<ListPaginationMainRef, IndexBarListMainProps>(Main)
