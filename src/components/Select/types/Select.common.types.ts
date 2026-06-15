import type { ReactNode } from 'react'

import type { InputSelectItem } from '../../Input/types/Input.Node.types'
import type { ListProps, ListViewItem } from '../../List/types'

/** Main / Modal / Combo 共用的列表项数据 */
export interface SelectItem extends InputSelectItem {
  children?: SelectItem[]
}

/** Main / Modal 共用的列表与选择行为 */
export interface SelectListProps
  extends Pick<
    ListProps,
    | 'multiple'
    | 'checkable'
    | 'itemStyle'
    | 'itemClassName'
    | 'itemLayout'
    | 'checkboxVariant'
    | 'checkboxPosition'
  > {
  value?: SelectItem | SelectItem[] | null
  list?: SelectItem[]
  formatViewList?: (list: SelectItem[]) => ListViewItem[]
  formatViewItem?: (item: SelectItem, options: { index: number }) => ListViewItem
  itemRender?: (
    item: SelectItem,
    options: { index: number; checked: boolean; onChange: (item: SelectItem) => void }
  ) => ReactNode
  onChange?: (
    newValue: SelectItem | SelectItem[] | null,
    options?: { action?: string; checkedItem: SelectItem }
  ) => void
}
