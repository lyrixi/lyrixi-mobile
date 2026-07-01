export interface LoadingOpenProps {
  // Value & Display Value
  content?: string
  // Style
  maskClassName?: string
  maskStyle?: Record<string, string>
  className?: string
  style?: Record<string, string>
  // Elements
  portal?: HTMLElement | null
  // Events
  onOpen?: () => void
}
