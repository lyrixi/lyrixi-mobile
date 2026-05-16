import type { RefObject } from 'react'

import type { ListAsyncLoadResult } from '../../../ListAsync/types'

export interface ListPaginationQueryResult {
  status: string
  message?: string
  list?: Record<string, unknown>[]
  totalPage?: number
  totalRows?: number
  [key: string]: unknown
}

export interface ListPaginationQueryDataOptions {
  rows?: number
  pageRef: RefObject<number>
  previousResult?: ListAsyncLoadResult | null
  action?: string
  formatPayload?: (
    params: Record<string, unknown>
  ) => Promise<Record<string, unknown>> | Record<string, unknown>
  formatResult?: (
    result: unknown,
    options: { payload: Record<string, unknown> }
  ) => Promise<ListPaginationQueryResult> | ListPaginationQueryResult
}
