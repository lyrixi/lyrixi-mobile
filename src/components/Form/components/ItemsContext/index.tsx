import { createContext } from 'react'

import type { ItemsContextType } from './types'

const ItemsContext = createContext<ItemsContextType>({
  layout: 'horizontal',
  labelSpan: 4,
  labelEllipsis: null,
  mainSpan: 20,
  mainEllipsis: null
})
export type { EllipsisConfig, ItemsContextType, VirtualContext } from './types'

export default ItemsContext
