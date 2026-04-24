import React from 'react'

const PreviewClose = ({ onClose }: { onClose?: () => void }) => {
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
