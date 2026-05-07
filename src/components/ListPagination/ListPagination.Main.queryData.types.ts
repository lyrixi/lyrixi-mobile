import type { RefObject } from 'react'

import type { LoadResult } from './../ListAsync/types'

export type ListPaginationQueryRawItem = Record<string, unknown>

export interface ListPaginationQueryResult {
  status: string
  message?: string
  list?: ListPaginationQueryRawItem[]
  totalPage?: number
  totalRows?: number
  [key: string]: unknown
}

export interface ListPaginationQueryDataOptions {
  rows?: number
  pageRef: RefObject<number>
  previousResult?: LoadResult | null
  action?: string
  formatPayload?: (params: Record<string, unknown>) => Promise<Record<string, unknown>> | Record<string, unknown>
  formatResult?: (
    result: unknown,
    options: { payload: Record<string, unknown> }
  ) => Promise<ListPaginationQueryResult> | ListPaginationQueryResult
}
