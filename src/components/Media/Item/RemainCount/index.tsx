import React from 'react'

import type { MediaRemainCountProps } from '../../types'

// 图片显示
const RemainCount = ({
  // Value & Display Value
  count
}: MediaRemainCountProps) => {
  return (
    <div
      // Style
      className="lyrixi-media-item-remain-count"
    >
      +{count + 1}
    </div>
  )
}
export type { MediaRemainCountProps } from '../../types'

export default RemainCount
