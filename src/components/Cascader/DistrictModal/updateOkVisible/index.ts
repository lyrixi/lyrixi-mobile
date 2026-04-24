import compareType from './compareType'

interface TabItem {
  type?: string[]
  [key: string]: unknown
}

// 根据min判断是否显示确定按钮
function updateOkVisible(tabs: TabItem[] | null | undefined, minType: string): boolean {
  if (!Array.isArray(tabs) || !tabs.length || !minType) {
    return false
  }

  let newOkVisible = false

  const currentTypes = tabs[tabs.length - 1]?.type
  if (currentTypes) {
    for (const currentType of currentTypes) {
      const cmp = compareType(currentType, minType)
      if (cmp !== null && cmp >= 0) {
        newOkVisible = true
        break
      }
    }
  }

  return newOkVisible
}

export default updateOkVisible
