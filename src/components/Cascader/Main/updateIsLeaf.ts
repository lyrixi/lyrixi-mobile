import React from 'react'

interface TabItem {
  id?: string | number
  isLeaf?: boolean
  [key: string]: unknown
}

// 设置叶子节点
function updateIsLeaf(
  id: string | number,
  {
    currentValue,
    value,
    tabsRef
  }: {
    currentValue?: TabItem[]
    value?: TabItem[]
    tabsRef: React.MutableRefObject<TabItem[]>
  }
): void {
  for (const tab of currentValue || []) {
    if (tab && tab.id === id) {
      tab.isLeaf = true
      break
    }
  }

  for (const tab of value || []) {
    if (tab && tab.id === id) {
      tab.isLeaf = true
      break
    }
  }

  for (const tab of tabsRef.current || []) {
    if (tab && tab.id === id) {
      tab.isLeaf = true
      break
    }
  }
}

export default updateIsLeaf
