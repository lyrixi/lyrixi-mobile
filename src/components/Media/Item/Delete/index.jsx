import React from 'react'

// 照片视频预览
const Delete = ({
  // Events
  onClick
}) => {
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
