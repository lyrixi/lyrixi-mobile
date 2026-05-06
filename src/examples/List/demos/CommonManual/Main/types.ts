import type { LoadResult } from '../../../../../components/ListAsync'
import type { VirtualOptions } from '../../../../../components/ListAsync/VirtualList'

export type MainProps = {
  virtual?: VirtualOptions
  onLoad?: (ctx: { result: LoadResult | null; action: string }) => void
  onChange?: (value: unknown) => void
  loadData: (ctx: { previousResult: LoadResult | null; action: string }) => Promise<LoadResult>
}
