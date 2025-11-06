import React from 'react'

const PreviewDelete = ({ onDelete }) => {
  return (
    <div
      className="lyrixi-image-preview-main-delete"
      onClick={(e) => {
        e.stopPropagation()
        onDelete && onDelete()
      }}
    ></div>
  )
}

export default PreviewDelete
