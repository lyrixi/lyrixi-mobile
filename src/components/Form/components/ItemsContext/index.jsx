import { createContext } from 'react'

// 1. 创建 Context
const ItemsContext = createContext({
  layout: 'horizontal',
  labelSpan: 4,
  labelEllipsis: null,
  mainSpan: 20,
  mainEllipsis: null,
})

export default ItemsContext
