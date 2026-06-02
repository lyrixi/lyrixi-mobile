import type { ListViewFormatterOptions, ListItem, ViewItem } from './../types'

// 将接口返回的 ListItem[] 转为带 `_raw` 的 ViewItem[]，供列表渲染
function viewFormatter(
  list: ListItem[] | undefined,
  { formatViewItem, formatViewList }: ListViewFormatterOptions
): ViewItem[] | undefined {
  // 增加_raw字段，用于存储原始数据
  let rawList = list?.map((item: ListItem) => {
    // 格式化子项
    if (item?.children?.length) {
      item.children = item.children.map((child) => {
        return { ...child, _raw: child }
      })
    }
    // 格式化父项
    return { ...item, _raw: item }
  })

  // 格式化列表
  if (typeof formatViewList === 'function') {
    return formatViewList(rawList as ListItem[])
  }

  // 格式化单项
  if (typeof formatViewItem === 'function') {
    return rawList?.map((item, index) => {
      return { ...formatViewItem(item, { index }) }
    })
  }

  // 不格式化
  return rawList as ViewItem[]
}

export default viewFormatter
