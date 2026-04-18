// 生成随机点
/*
points = getPoints({
  center: value,
  // 半径5000000米
  radius: 1000,
  // 生成10万个点
  count: 100
})
*/
function getPoints({ center, radius = 1000, count = 110 } = {}) {
  let latitude = center?.latitude || 31.990374883871525
  let longitude = center?.longitude || 118.73769931504451

  const points = []

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2 // 随机角度
    const distance = Math.random() * radius // 随机半径
    const lat = latitude + (distance / 111300) * Math.sin(angle) // 纬度变化
    const lng =
      longitude + ((distance / 111300) * Math.cos(angle)) / Math.cos((latitude * Math.PI) / 180) // 经度变化
    points.push({
      latitude: lat,
      longitude: lng,
      name: '随机点' + i,
      address: `随机地址${i}`,
      type: 'gcj02'
    })
  }

  return points
}

export default getPoints
