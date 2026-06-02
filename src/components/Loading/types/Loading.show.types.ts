export interface LoadingShowProps {
  // Value & Display Value
  id?: string
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
