import React from 'react'

const PreviewDelete = ({ onDelete }: { onDelete?: () => void }) => {
  return (
    <div
      className="lyrixi-media-preview-main-delete"
      onClick={(e) => {
        e.stopPropagation()
        onDelete?.()
      }}
    ></div>
  )
}

export default PreviewDelete
