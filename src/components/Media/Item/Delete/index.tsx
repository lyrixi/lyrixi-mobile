import React from 'react'

import type { MediaDeleteProps } from '../../types'

// 照片视频预览
const Delete = ({
  // Events
  onClick
}: MediaDeleteProps) => {
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
export type { MediaDeleteProps } from '../../types'

export default Delete
