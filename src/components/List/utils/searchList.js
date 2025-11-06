// 判断此项是否过滤
function filterItem(item, keyword) {
  // When have children display parent
  if (!keyword || item?.children?.length) return true

  // Match title
  if (typeof item?.name === 'string' && item.name) {
    if (item.name.indexOf(keyword) !== -1) {
      return true
    }
  }

  // Match description
  if (typeof item?.description === 'string' && item.description) {
    if (item.description.indexOf(keyword) !== -1) {
      return true
    }
  }

  return false
}

// Format list data, filter valid data
function searchList(list, keyword) {
  // List error
  if (!Array.isArray(list)) {
    console.error('List: Wrong parameter with "list"! You need pass a Array')
    return []
  }

  // Default filter
  return list.filter((item) => {
    // filter children in list item
    if (Array.isArray(item.children) && item.children.length) {
      item.children = item.children.filter((child) => filterItem(child, keyword))
    }
    // filter list
    return filterItem(item, keyword)
  })
}

export default searchList
