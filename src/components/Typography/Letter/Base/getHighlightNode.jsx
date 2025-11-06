import React from 'react'

// 关键字高亮
const getHighlightNode = (text, keyword) => {
  if (typeof text !== 'string' || !keyword) return text
  const index = text.indexOf(keyword)
  const beforeStr = text.substring(0, index)
  const afterStr = text.slice(index + keyword.length)
  const node =
    index > -1 ? (
      <>
        {beforeStr}
        <div className="lyrixi-typography-highlight">{keyword}</div>
        {afterStr}
      </>
    ) : (
      text
    )

  return node
}

export default getHighlightNode
