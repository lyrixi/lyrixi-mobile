import React, { forwardRef, type Ref } from 'react'
import { ListPagination } from 'lyrixi-mobile'
import type { ListPaginationRef } from 'lyrixi-mobile/components/ListPagination/Main'

import type { ListDemoFormatPayloadParams, ListDemoMainProps } from './types'

import formatPayload from './formatPayload'
import formatResult from './formatResult'
import formatViewItem from './formatViewItem'

export type { ListDemoMainProps } from './types'

// 简便的列表组件, 只需要传入url和params即可
const Main = (
  { cacheName, virtual, queryParams }: ListDemoMainProps,
  ref: Ref<ListPaginationRef>
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
      formatViewItem={formatViewItem}
      onChange={(value) => {
        console.log('onChange:', value)
      }}
    />
  )
}

export default forwardRef<ListPaginationRef, ListDemoMainProps>(Main)
