// 过滤不合法的坐标数据
function filterCoords(coords) {
  if (!coords || !Array.isArray(coords)) {
    return []
  }

  return coords.filter((coord) => {
    return coord?.longitude && coord?.latitude && coord?.type
  })
}

export default filterCoords
