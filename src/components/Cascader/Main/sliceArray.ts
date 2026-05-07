import type { CascaderNode } from '../types'

// 截取此id前面的array
function sliceArray(arr: CascaderNode[], id: string | number): CascaderNode[] {
  const index = Array.isArray(arr) && arr.length ? arr.findIndex((item) => item.id === id) : -1
  if (index === -1) return []
  return arr.slice(0, index + 1)
}

export default sliceArray
