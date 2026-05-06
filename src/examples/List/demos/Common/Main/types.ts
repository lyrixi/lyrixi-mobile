import type { VirtualOptions } from 'lyrixi-mobile/components/ListAsync/VirtualList'

export type ListDemoMainProps = {
  cacheName: string
  virtual?: VirtualOptions
  queryParams: Record<string, unknown>
}
