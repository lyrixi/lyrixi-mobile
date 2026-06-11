import React, { forwardRef, type Ref } from 'react'

import { ListPagination, type ListPaginationMainRef } from 'lyrixi-mobile'

import formatPayload from './formatPayload'
import formatResult from './formatResult'
import formatViewList from './formatViewList'
import type { IndexBarListMainProps, ListDemoFormatPayloadParams } from './types'

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
