import type { SyntheticEvent } from 'react'

import type { ListAsyncVirtualOptions, LoadResult } from 'lyrixi-mobile'

export type IndexBarListRowWithAnchor = {
  anchor?: string
}

export type IndexBarListLoadContext = {
  result: LoadResult | null
  action: string
}

export type ListDemoFormatPayloadParams = {
  page?: number
} & Record<string, unknown>

export type IndexBarListMainProps = {
  cacheName: string
  virtual?: ListAsyncVirtualOptions
  queryParams: Record<string, unknown>
  onLoad?: (ctx: IndexBarListLoadContext) => void
  onScrollEnd?: (e: SyntheticEvent) => void
}
