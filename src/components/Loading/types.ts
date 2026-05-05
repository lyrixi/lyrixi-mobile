export interface LoadingShowProps {
  portal?: HTMLElement | null
  id?: string
  maskClassName?: string
  maskStyle?: Record<string, string>
  className?: string
  style?: Record<string, string>
  content?: string
  onOpen?: () => void
}
