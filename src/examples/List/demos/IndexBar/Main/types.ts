import type { SyntheticEvent } from 'react'

import type { LoadResult } from 'lyrixi-mobile/components/ListAsync'
import type { VirtualOptions } from 'lyrixi-mobile/components/ListAsync/VirtualList'

export type IndexBarListMainProps = {
  cacheName: string
  virtual?: VirtualOptions
  queryParams: Record<string, unknown>
  onLoad?: (ctx: { result: LoadResult | null; action: string }) => void
  onScrollEnd?: (e: SyntheticEvent) => void
}
