import type { ListAsyncVirtualOptions, LoadResult } from 'lyrixi-mobile'

export type MainProps = {
  virtual?: ListAsyncVirtualOptions
  onLoad?: (ctx: { result: LoadResult | null; action: string }) => void
  onChange?: (value: unknown) => void
  loadData: (ctx: { previousResult: LoadResult | null; action: string }) => Promise<LoadResult>
}
