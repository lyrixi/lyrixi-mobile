import type { SyntheticEvent } from 'react'

import type { LoadResult } from 'lyrixi-mobile/components/ListAsync'
import type { VirtualOptions } from 'lyrixi-mobile/components/ListAsync/VirtualList'

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
