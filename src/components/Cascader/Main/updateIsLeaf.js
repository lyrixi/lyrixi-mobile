// 设置叶子节点
function updateIsLeaf(tabs, id, { value, tabsRef }) {
  // 更新当前列表叶子节点
  for (let tab of tabs || []) {
    if (tab && tab.id === id) {
      tab.isLeaf = true
      break
    }
  }

  // 更新value叶子节点
  for (let tab of value || []) {
    if (tab && tab.id === id) {
      tab.isLeaf = true
      break
    }
  }

  // 更新tabs叶子节点
  for (let tab of tabsRef.current || []) {
    if (tab && tab.id === id) {
      tab.isLeaf = true
      break
    }
  }
  return tabs
}

export default updateIsLeaf
