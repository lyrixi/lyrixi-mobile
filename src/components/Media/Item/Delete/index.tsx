import React from 'react'

import type { MediaItemDeleteProps } from '../../types'

// 照片视频预览
const Delete = ({
  // Events
  onClick
}: MediaItemDeleteProps) => {
  return (
    <div
      // Style
      className="lyrixi-media-delete"
      // Events
      onClick={(e) => {
        e.stopPropagation()

        onClick && onClick(e)
      }}
    >
      <div className="lyrixi-media-delete-icon"></div>
    </div>
  )
}
export type { MediaItemDeleteProps } from '../../types'

export default Delete
