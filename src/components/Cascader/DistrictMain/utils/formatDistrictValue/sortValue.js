/**
 * 按照行政区划类型顺序排序
 * @param {Array} value - [{id: '', name: '', type: ['city']}, ...]
 * @returns {Array}
 */
function sortValue(value) {
  if (!Array.isArray(value)) return value

  // 定义类型顺序
  const typeOrder = ['country', 'province', 'city', 'district', 'street']

  // 获取item的最小type顺序
  function getTypeIndex(item) {
    if (!item || !Array.isArray(item.type)) return Number.MAX_SAFE_INTEGER
    let minIndex = Number.MAX_SAFE_INTEGER
    for (let t of item.type) {
      const idx = typeOrder.indexOf(t)
      if (idx !== -1 && idx < minIndex) {
        minIndex = idx
      }
    }
    return minIndex
  }

  // 排序
  return value.sort((a, b) => {
    return getTypeIndex(a) - getTypeIndex(b)
  })
}

export default sortValue
