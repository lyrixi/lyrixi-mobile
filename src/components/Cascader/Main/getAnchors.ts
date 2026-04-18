// 获取IndexBar的anchors
function getAnchors(list) {
  if (!Array.isArray(list) || list.length === 0) return []
  let anchors = []
  for (let item of list) {
    if (item.anchor && !anchors.includes(item.anchor)) {
      anchors.push(item.anchor)
    }
  }
  return anchors
}

export default getAnchors
