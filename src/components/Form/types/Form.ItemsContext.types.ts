export interface EllipsisConfig {
  rows?: number
  [key: string]: unknown
}

export interface VirtualContext {
  observer: IntersectionObserver | null
  observerCallbacks: WeakMap<Element, (visible: boolean) => void>
}

export interface ItemsContextType {
  layout: string
  labelSpan: number
  labelEllipsis: EllipsisConfig | null
  mainSpan: number
  mainEllipsis: EllipsisConfig | null
  virtual?: VirtualContext | null
}
