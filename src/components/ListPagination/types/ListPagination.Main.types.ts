import type { ListAsyncLoadResult } from '../../ListAsync/types'

import type { ListPaginationListProps } from './ListPagination.common.types'

export interface ListPaginationMainProps extends ListPaginationListProps {
  cacheName?: string
  url?: string
  headers?: Record<string, string>
  payload?: Record<string, unknown>
  pagination?: { rows?: number }
  formatPayload?: (
    params: Record<string, unknown>
  ) => Promise<Record<string, unknown>> | Record<string, unknown>
  formatResult?: (
    result: unknown,
    options: { payload: Record<string, unknown> }
  ) => Promise<ListAsyncLoadResult> | ListAsyncLoadResult
}

export interface ListPaginationMainRef {
  element?: HTMLElement | null
  getElement?: () => HTMLElement | null
  getAnchors?: () => string[]
  scrollToAnchor?: (anchor: string) => void
  reload?: (action?: string) => void
  getResult?: () => ListAsyncLoadResult | null
  updateCache?: (extraCache?: Record<string, unknown>) => void
  clearCache?: () => unknown
  getCache?: () => unknown
}
