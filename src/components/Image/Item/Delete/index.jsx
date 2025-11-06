import React from 'react'

// 照片视频预览
const Delete = ({ onClick }) => {
  return (
    <div
      className="lyrixi-image-delete"
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
