import React from 'react'

import type { MediaPreviewToolbarProps } from '../../types'

// 内库使用-start
import Icon from '../../../Icon'
import Icons from '../../../../icons'
// 内库使用-end

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
        <Icon svg={Icons.ImageAnticlockwise} size="l" color="white" />
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
        <Icon svg={Icons.ImageClockwise} size="l" color="white" />
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
        <Icon svg={Icons.ImageZoomout} size="l" color="white" />
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
        <Icon svg={Icons.ImageZoomin} size="l" color="white" />
      </div>
    </div>
  )
}

export default PreviewToolbar
