import type { ListAsyncLoadResult, ListPaginationItem, ListPaginationViewItem } from 'lyrixi-mobile'

function formatViewItem(
  item: ListPaginationItem,
  _options: { index: number; result?: ListAsyncLoadResult | null }
): ListPaginationViewItem {
  return {
    _raw: item,
    id: item.id,
    imageUrl: (item.imageUrl as string | undefined) || '',
    avatarUrl: (item.avatarUrl as string | undefined) || '',
    title: item.name,
    description: item.introduce,
    note: item.note,
    content: item.content,
    actionRender: (it: ListPaginationViewItem & { checked?: boolean }) => {
      return <div>Click {String(it.name ?? '')}</div>
    }
  }
}

export default formatViewItem
