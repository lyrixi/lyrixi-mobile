import React, { forwardRef, type ComponentRef, type Ref } from 'react'

import { ListPagination } from 'lyrixi-mobile'

import type { ListDemoFormatPayloadParams, ListDemoMainProps } from './types'

import formatPayload from './formatPayload'
import formatResult from './formatResult'
import formatViewItem from './formatViewItem'

type ListPaginationRef = ComponentRef<typeof ListPagination.Main>

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

export type { ListDemoMainProps } from './types'
export default forwardRef<ListPaginationRef, ListDemoMainProps>(Main)
