import React from 'react'

const PreviewClose = ({ onClose }) => {
  return (
    <div
      className="lyrixi-media-preview-main-close"
      onClick={(e) => {
        e.stopPropagation()
        onClose?.()
      }}
    ></div>
  )
}

export default PreviewClose
