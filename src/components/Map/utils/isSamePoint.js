// 比较两个点是否相同
const isSamePoint = (point1, point2) => {
  // 优先比较id
  if (point1.id && point2.id) {
    return point1.id === point2.id
  }
  // 如果没有id，比较经纬度
  return point1.latitude === point2.latitude && point1.longitude === point2.longitude
}

export default isSamePoint
