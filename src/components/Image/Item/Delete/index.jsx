import React from 'react'

// 照片视频预览
const Delete = ({
  // Events
  onClick
}) => {
  return (
    <div
      // Style
      className="lyrixi-image-delete"
      // Events
      onClick={(e) => {
        e.stopPropagation()

        onClick && onClick(e)
      }}
    >
      <div className="lyrixi-image-delete-icon"></div>
    </div>
  )
}

export default Delete
