import type { ListAsyncVirtualOptions } from 'lyrixi-mobile'

export type ListDemoFormatPayloadParams = {
  page?: number
} & Record<string, unknown>

export type ListDemoMainProps = {
  cacheName: string
  virtual?: ListAsyncVirtualOptions
  queryParams: Record<string, unknown>
}
