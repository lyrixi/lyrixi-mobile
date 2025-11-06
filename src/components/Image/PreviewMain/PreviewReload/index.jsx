import React from 'react'

const PreviewReload = ({ onReUpload }) => {
  return (
    <div
      className="lyrixi-image-preview-main-reload"
      onClick={(e) => {
        e.stopPropagation()
        onReUpload && onReUpload()
      }}
    >
      <div className="lyrixi-image-preview-main-reload-icon">
        <div className="lyrixi-image-preview-main-reload-icon-fail"></div>
      </div>
    </div>
  )
}

export default PreviewReload
