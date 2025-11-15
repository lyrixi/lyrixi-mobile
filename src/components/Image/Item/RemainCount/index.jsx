import React from 'react'

// 图片显示
const RemainCount = ({
  // Value & Display Value
  count
}) => {
  return (
    <div
      // Style
      className="lyrixi-media-item-remain-count"
    >
      +{count + 1}
    </div>
  )
}

export default RemainCount
