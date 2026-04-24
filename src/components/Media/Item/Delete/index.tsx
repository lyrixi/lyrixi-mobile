import React, { type MouseEvent } from 'react'

export interface MediaDeleteProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

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

export default Delete
