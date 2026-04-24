import { createContext } from 'react'

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

// 1. 创建 Context
const ItemsContext = createContext<ItemsContextType>({
  layout: 'horizontal',
  labelSpan: 4,
  labelEllipsis: null,
  mainSpan: 20,
  mainEllipsis: null,
})

export default ItemsContext
