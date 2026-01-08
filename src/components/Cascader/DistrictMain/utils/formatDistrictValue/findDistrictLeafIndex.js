// 判断value中是否有某一项为末级，返回该项的索引（0开始），没有则返回-1
function findDistrictLeafIndex(value, maxType) {
  // 对象
  if (Array.isArray(value?.type) && value.type.includes(maxType)) {
    return 0
  }

  // 数组
  if (!Array.isArray(value) || value.length === 0) return -1

  for (let i = 0; i < value.length; i++) {
    const item = value[i]
    if (item.isLeaf) {
      return i
    }

    if (!item || !item.type) continue
    if (Array.isArray(item.type)) {
      if (item.type.includes(maxType)) {
        return i
      }
    } else {
      if (item.type === maxType) {
        return i
      }
    }
  }
  return -1
}

export default findDistrictLeafIndex
