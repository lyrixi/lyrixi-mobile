import type { ListItem } from '../../List/types'

/** ToolBar.List 对外列表项 */
export interface ToolBarItem extends ListItem {
  children?: ToolBarItem[]
}

export interface ToolBarComboRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
