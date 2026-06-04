import type { Root } from 'react-dom/client'

export type MessageInstance = {
  root: Root | null
  rootElement: HTMLDivElement | null
  onClose?: () => void
}

const messageInstance: MessageInstance = {
  root: null,
  rootElement: null,
  onClose: undefined
}

export default messageInstance
