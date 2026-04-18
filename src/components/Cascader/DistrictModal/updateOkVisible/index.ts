import compareType from './compareType'

// 根据min判断是否显示确定按钮
function updateOkVisible(tabs, minType) {
  // 没有值或者没有最小值限制, 则需要一直选到叶子节点, 不显示确定按钮
  if (!Array.isArray(tabs) || !tabs.length || !minType) {
    return false
  }

  let newOkVisible = false

  // 比较类型, 判断是否显示确定按钮
  let currentTypes = tabs[tabs.length - 1]?.type
  if (currentTypes) {
    for (let currentType of currentTypes) {
      if (compareType(currentType, minType) >= 0) {
        newOkVisible = true
        break
      }
    }
  }

  return newOkVisible
}

export default updateOkVisible
