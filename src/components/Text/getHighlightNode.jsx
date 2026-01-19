import React from 'react'

/**
 * 将文本中的关键词高亮显示
 * @param {ReactNode} children - 文本内容
 * @param {string} highlight - 要高亮的关键词
 * @returns {ReactNode} 处理后的节点
 */
function getHighlightNode(children, highlight) {
  // 如果没有 highlight 或 children 不是字符串，直接返回
  if (!highlight || typeof children !== 'string') {
    return children
  }

  const text = children
  const keyword = String(highlight)
  
  // 如果关键词为空，直接返回原文本
  if (!keyword) {
    return text
  }

  // 转义正则表达式特殊字符
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  
  // 使用正则表达式匹配所有出现的关键词（大小写敏感）
  const regex = new RegExp(`(${escapedKeyword})`, 'g')
  const parts = text.split(regex)

  // 如果只有一个部分，说明没有匹配到，直接返回原文本
  if (parts.length === 1) {
    return text
  }

  // 将匹配到的关键词用高亮样式包裹
  return parts.map((part, index) => {
    // 如果当前部分匹配关键词，用高亮样式包裹
    if (part === keyword) {
      return (
        <span key={`highlight-${index}`} className="lyrixi-text-highlight">
          {part}
        </span>
      )
    }
    // 否则直接返回文本
    return <React.Fragment key={`text-${index}`}>{part}</React.Fragment>
  })
}

export default getHighlightNode
