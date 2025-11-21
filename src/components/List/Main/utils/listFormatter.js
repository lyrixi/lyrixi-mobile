// 格式化列表数据, 用于渲染列表组件
function listFormatter(list, { formatItem, formatList }) {
  // 格式化List显示数据, 但仍然需要保留原始数据list
  if (typeof formatList === 'function') {
    let newList = list?.map((item) => {
      return { ...item, _raw: item }
    })
    return formatList(newList)
  }

  // 格式化Item显示数据, 但仍然需要保留原始数据item
  if (typeof formatItem === 'function') {
    list?.map((item) => {
      return { ...formatItem(item), _raw: item }
    })
  }

  return list
}

export default listFormatter
