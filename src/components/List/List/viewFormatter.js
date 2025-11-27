// 格式化列表数据为渲染数据, 用于渲染列表组件
function viewFormatter(list, { formatViewItem, formatViewList }) {
  // 格式化List显示数据, 但仍然需要保留原始数据list
  if (typeof formatViewList === 'function') {
    let newList = list?.map((item) => {
      return { ...item, _raw: item }
    })
    return formatViewList(newList)
  }

  // 格式化Item显示数据, 但仍然需要保留原始数据item
  if (typeof formatViewItem === 'function') {
    return list?.map((item, index) => {
      return { ...formatViewItem(item, index), _raw: item }
    })
  }

  return list?.map((item) => {
    return { ...item, _raw: item }
  })
}

export default viewFormatter
