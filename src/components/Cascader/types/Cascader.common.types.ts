import type { InputSelectItem } from '../../Input/types/Input.Node.types'

/** Main / Modal / Combo 共用的级联项数据 */
export interface CascaderItem extends Omit<InputSelectItem, 'id' | 'name'> {
  id: string | number
  name?: string
  anchor?: string
  isLeaf?: boolean
  isChoose?: boolean
  parentid?: string | number | null
  children?: CascaderItem[]
}

export type LoadDataResult = {
  status: string
  list?: CascaderItem[]
  message?: string
  async?: boolean
}

export type LoadDataFn = (tabs: CascaderItem[], ctx: { list: CascaderItem[] }) => Promise<LoadDataResult>
