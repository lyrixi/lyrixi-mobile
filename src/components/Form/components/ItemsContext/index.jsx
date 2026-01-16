import { createContext } from 'react'

// 1. 创建 Context
const ItemsContext = createContext({
  labelCol: { span: 4 },
  mainCol: { span: 20 }
})

export default ItemsContext
