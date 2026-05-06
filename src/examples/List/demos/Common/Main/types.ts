import type { VirtualOptions } from 'lyrixi-mobile/components/ListAsync/VirtualList'

export type ListDemoFormatPayloadParams = {
  page?: number
} & Record<string, unknown>

export type ListDemoMainProps = {
  cacheName: string
  virtual?: VirtualOptions
  queryParams: Record<string, unknown>
}
