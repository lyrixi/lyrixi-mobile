import React from 'react'

import type { MediaPreviewToolbarProps } from '../../types'

const PreviewToolbar = ({
  onRotateAnticlockwise,
  onRotateClockwise,
  onZoomOut,
  onZoomIn
}: MediaPreviewToolbarProps) => {
  return (
    <div className="lyrixi-media-preview-main-toolbar">
      <div
        className="lyrixi-media-preview-main-toolbar-btn"
        onClick={(e) => {
          e.stopPropagation()
          onRotateAnticlockwise && onRotateAnticlockwise(e)
        }}
        role="button"
        aria-label="逆时针旋转90度"
      >
        <i className="lyrixi-iconfont lyrixi-iconfont-image-rotate-anticlockwise" />
      </div>
      <div
        className="lyrixi-media-preview-main-toolbar-btn"
        onClick={(e) => {
          e.stopPropagation()
          onRotateClockwise && onRotateClockwise(e)
        }}
        role="button"
        aria-label="顺时针旋转90度"
      >
        <i className="lyrixi-iconfont lyrixi-iconfont-image-rotate-clockwise" />
      </div>
      <div
        className="lyrixi-media-preview-main-toolbar-btn"
        onClick={(e) => {
          e.stopPropagation()
          onZoomOut && onZoomOut(e)
        }}
        role="button"
        aria-label="缩小"
      >
        <i className="lyrixi-iconfont lyrixi-iconfont-image-zoom-out" />
      </div>
      <div
        className="lyrixi-media-preview-main-toolbar-btn"
        onClick={(e) => {
          e.stopPropagation()
          onZoomIn && onZoomIn(e)
        }}
        role="button"
        aria-label="放大"
      >
        <i className="lyrixi-iconfont lyrixi-iconfont-image-zoom-in" />
      </div>
    </div>
  )
}

export default PreviewToolbar
