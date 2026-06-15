import type { ListItem, ListViewItem } from '../../List/types'

/** ListAsync 对外列表项 */
export interface ListAsyncItem extends ListItem {
  children?: ListAsyncItem[]
}

/** ListAsync 格式化后的渲染项 */
export interface ListAsyncViewItem extends ListViewItem {
  children?: ListAsyncViewItem[]
}
