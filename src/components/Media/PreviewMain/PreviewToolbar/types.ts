import type { MouseEvent } from 'react'

export interface PreviewToolbarProps {
  onRotateAnticlockwise?: (e: MouseEvent) => void
  onRotateClockwise?: (e: MouseEvent) => void
  onZoomOut?: (e: MouseEvent) => void
  onZoomIn?: (e: MouseEvent) => void
}
