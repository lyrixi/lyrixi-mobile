import type { MouseEvent } from 'react'

export interface MediaPreviewToolbarProps {
  onRotateAnticlockwise?: (e: MouseEvent) => void
  onRotateClockwise?: (e: MouseEvent) => void
  onZoomOut?: (e: MouseEvent) => void
  onZoomIn?: (e: MouseEvent) => void
}
