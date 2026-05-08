import type { LoadResult } from '../../../../../components/ListAsync'
import type { ListAsyncVirtualOptions } from '../../../../../components/ListAsync/VirtualList'

export type MainProps = {
  virtual?: ListAsyncVirtualOptions
  onLoad?: (ctx: { result: LoadResult | null; action: string }) => void
  onChange?: (value: unknown) => void
  loadData: (ctx: { previousResult: LoadResult | null; action: string }) => Promise<LoadResult>
}
