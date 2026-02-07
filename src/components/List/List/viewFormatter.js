// 格式化列表数据为渲染数据, 用于渲染列表组件
function viewFormatter(list, { formatViewItem, formatViewList }) {
  // 格式化List显示数据, 但仍然需要保留原始数据list
  if (typeof formatViewList === 'function') {
    let newList = list?.map((item) => {

      // 格式化子项
      if (item?.children?.length) {
        item.children = item.children.map((child) => {
          return { ...child, _raw: child }
        })
      }

      return { ...item, _raw: item }
    })
    return formatViewList(newList)
  }

  // 格式化Item显示数据, 但仍然需要保留原始数据item
  if (typeof formatViewItem === 'function') {
    return list?.map((item, index) => {

      // 格式化子项
      if (item?.children?.length) {
        item.children = item.children.map((child) => {
          return { ...child, _raw: child }
        })
      }

      return { ...formatViewItem(item, { index }), _raw: item }
    })
  }

  return list?.map((item) => {
    if (item._raw) {
      return item
    }

    // 格式化子项
    if (item?.children?.length) {
      item.children = item.children.map((child) => {
        return { ...child, _raw: child }
      })
    }

    return { ...item, _raw: item }
  })
}

export default viewFormatter
