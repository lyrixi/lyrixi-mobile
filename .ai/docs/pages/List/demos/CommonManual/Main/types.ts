import type { ListAsyncLoadResult, ListAsyncVirtualProp } from 'lyrixi-mobile'

export type MainProps = {
  virtual?: ListAsyncVirtualProp
  onLoad?: (ctx: { result: ListAsyncLoadResult | null; action: string }) => void
  onChange?: (value: unknown) => void
  loadData: (ctx: {
    previousResult: ListAsyncLoadResult | null
    action: string
  }) => Promise<ListAsyncLoadResult>
}
