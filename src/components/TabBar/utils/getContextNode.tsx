import React from 'react'

// 获取content
function getContextNode(
  content: React.ReactNode | ((params: Record<string, unknown>) => React.ReactNode),
  params: Record<string, unknown>
): React.ReactNode {
  if (typeof content === 'function') {
    return content(params)
  }
  if (typeof content === 'string') {
    return <div className="lyrixi-tabbar-group-tab-content">{content}</div>
  }
  return content
}

export default getContextNode
