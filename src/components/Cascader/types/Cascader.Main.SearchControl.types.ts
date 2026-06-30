import type { InputTextProps } from '../../Input/types'
import type { CascaderItem } from './Cascader.common.types'

export interface CascaderMainSearchControlProps {
  // Value & Display Value
  list: CascaderItem[]
  // Events
  onSearch?: (keyword: string, options: { list: CascaderItem[] }) => void
  onChange?: (v: CascaderItem[]) => void
}

/** 与 ToolBar.Search（InputSearch）只读搜索条一致 */
export interface CascaderMainSearchControlSearchBarFieldProps extends InputTextProps {}
