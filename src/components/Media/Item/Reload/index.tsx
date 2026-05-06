import React from 'react'

import type { MediaReloadProps } from './types'

// 失败重传图标
const Reload = ({
  // Events
  onClick
}: MediaReloadProps) => {
  return (
    <div
      // Style
      className="lyrixi-media-reload"
      // Events
      onClick={(e) => {
        e.stopPropagation()
        const parent = e.currentTarget.parentElement
        // 上传失败允许重新上传
        if (parent?.classList.contains('lyrixi-error')) {
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

export type { MediaReloadProps } from './types'
