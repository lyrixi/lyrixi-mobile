import React from 'react'

const PreviewReload = ({ onReUpload }) => {
  return (
    <div
      className="lyrixi-media-preview-main-reload"
      onClick={(e) => {
        e.stopPropagation()
        onReUpload && onReUpload()
      }}
    >
      <div className="lyrixi-media-preview-main-reload-icon">
        <div className="lyrixi-media-preview-main-reload-icon-error"></div>
      </div>
    </div>
  )
}

export default PreviewReload
