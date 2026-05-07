import type { ReactNode } from 'react'

/** Node used across Cascader Main / loadChildren / Modals. */
export interface CascaderNode {
  id: string | number
  name?: ReactNode
  anchor?: string
  isLeaf?: boolean
  isChoose?: boolean
  parentid?: string | number | null
  children?: CascaderNode[]
  [key: string]: unknown
}

export type LoadDataResult = {
  status: string
  list?: CascaderNode[]
  message?: string
  async?: boolean
}

export type LoadDataFn = (tabs: CascaderNode[], ctx: { list: CascaderNode[] }) => Promise<LoadDataResult>
