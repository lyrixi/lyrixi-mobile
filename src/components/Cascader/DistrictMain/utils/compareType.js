// 比较类型
function compareType(type1, type2) {
  const sorts = ['country', 'province', 'city', 'district', 'street']
  let type1Index = sorts.indexOf(type1)
  let type2Index = sorts.indexOf(type2)
  if (typeof type1Index === 'number' && typeof type2Index === 'number') {
    if (type1Index !== type2Index) {
      return type1Index > type2Index ? 1 : -1
    } else {
      return 0
    }
  }
  return null
}

export default compareType
