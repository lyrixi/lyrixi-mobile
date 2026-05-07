import type { ListAsyncProps, ListAsyncRef, LoadResult } from './../ListAsync/types'

export interface ListPaginationRef extends ListAsyncRef {
  updateCache: (extraCache?: Record<string, unknown>) => void
  clearCache: () => unknown
  getCache: () => unknown
}

export interface ListPaginationProps extends Omit<ListAsyncProps, 'loadData'> {
  cacheName?: string
  url?: string
  headers?: Record<string, string>
  payload?: Record<string, unknown>
  pagination?: { rows?: number }
  formatPayload?: (params: Record<string, unknown>) => Promise<Record<string, unknown>> | Record<string, unknown>
  formatResult?: (result: unknown, options: { payload: Record<string, unknown> }) => Promise<LoadResult> | LoadResult
}
