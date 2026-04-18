import React from 'react'

// 失败重传图标
const Reload = ({
  // Events
  onClick
}) => {
  return (
    <div
      // Style
      className="lyrixi-media-reload"
      // Events
      onClick={(e) => {
        e.stopPropagation()
        // 上传失败允许重新上传
        if (e.currentTarget.parentNode.classList.contains('lyrixi-error')) {
          onClick && onClick(e)
        }
      }}
    >
      <div className="lyrixi-media-reload-icon">
        <div className="lyrixi-media-reload-icon-error"></div>
      </div>
    </div>
  )
}

export default Reload
