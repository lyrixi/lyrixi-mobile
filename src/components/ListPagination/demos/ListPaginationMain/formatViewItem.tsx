import type { ListPaginationItem, ListPaginationViewItem } from 'lyrixi-mobile'

function formatViewItem(
  item: ListPaginationItem,
  { index = 0 }: { index: number } = { index: 0 }
): ListPaginationViewItem {
  return {
    _raw: item,
    id: item.id ?? index,
    imageUrl: item.imageUrl || '',
    avatarUrl: item.avatarUrl || '',
    title: item.name,
    description: item.introduce,
    note: item.note,
    content: item.content,
    actionRender: (row: ListPaginationItem & { checked?: boolean }) => {
      return <div>Click {String(row.name ?? '')}</div>
    }
  }
}

export default formatViewItem
