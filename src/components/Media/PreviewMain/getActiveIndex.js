// 当前选中项
function getActiveIndex({ index, list }) {
  if (!Array.isArray(list) || !list.length) return 0

  let activeIndex = 0
  // Current is index
  if (typeof index === 'number') {
    activeIndex = index
  }

  if (activeIndex > list.length) {
    return 0
  }

  return activeIndex
}

export default getActiveIndex
