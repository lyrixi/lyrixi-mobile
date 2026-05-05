export interface GapOption {
  left?: number
  right?: number
  top?: number
  bottom?: number
}

export interface SnapPosition {
  top: string
  right: string
  bottom: string
  left: string
}

export interface SnapToEdgeOptions {
  gap?: GapOption
  onChange?: (pos: SnapPosition) => void
}

export interface AssistiveTouchOptions {
  gap?: GapOption
  onDragEnd?: (data: Record<string, unknown>) => void
}
