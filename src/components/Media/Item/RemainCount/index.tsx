import React from 'react'

export interface RemainCountProps {
  count: number
}

// 图片显示
const RemainCount = ({
  // Value & Display Value
  count
}: RemainCountProps) => {
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
