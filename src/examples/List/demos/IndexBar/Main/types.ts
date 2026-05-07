import type { SyntheticEvent } from 'react'

import type { LoadResult, VirtualOptions } from 'lyrixi-mobile'

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
  virtual?: VirtualOptions
  queryParams: Record<string, unknown>
  onLoad?: (ctx: IndexBarListLoadContext) => void
  onScrollEnd?: (e: SyntheticEvent) => void
}
