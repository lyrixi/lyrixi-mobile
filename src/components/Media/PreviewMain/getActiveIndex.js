// 当前选中项
function getActiveIndex({ current, list }) {
  if (!Array.isArray(list) || !list.length) return 0

  let activeIndex = 0
  // Current is index
  if (typeof current === 'number') {
    activeIndex = current
  }
  // Current is fileUrl
  else if (typeof current === 'string') {
    for (let [index, source] of list.entries()) {
      if (source?.fileUrl === current) activeIndex = index
    }
  }

  if (activeIndex > list.length) {
    return 0
  }

  return activeIndex
}

export default getActiveIndex
