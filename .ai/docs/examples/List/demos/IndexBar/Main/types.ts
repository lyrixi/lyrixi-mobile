import type { SyntheticEvent } from 'react'

import type { ListAsyncLoadResult, ListAsyncVirtualProp } from 'lyrixi-mobile'

export type IndexBarListRowWithAnchor = {
  anchor?: string
}

export type IndexBarListLoadContext = {
  result: ListAsyncLoadResult | null
  action: string
}

export type ListDemoFormatPayloadParams = {
  page?: number
} & Record<string, unknown>

export type IndexBarListMainProps = {
  cacheName: string
  virtual?: ListAsyncVirtualProp
  queryParams: Record<string, unknown>
  onLoad?: (ctx: IndexBarListLoadContext) => void
  onScrollEnd?: (e: SyntheticEvent) => void
}
