import type { InputTextProps } from '../Input/types'
import type { CascaderNode } from './Cascader.common.types'

export interface CascaderMainSearchControlProps {
  list: CascaderNode[]
  onSearch?: (keyword: string, ctx: { list: CascaderNode[] }) => void
  onChange?: (v: CascaderNode[]) => void
}

/** 与 ToolBar.Search（InputSearch）只读搜索条一致 */
export type CascaderMainSearchControlSearchBarFieldProps = InputTextProps
