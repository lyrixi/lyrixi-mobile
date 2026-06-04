import type { Root } from 'react-dom/client'

export type MessageInstance = {
  root: Root | null
  rootElement: HTMLDivElement | null
}

const messageInstance: MessageInstance = {
  root: null,
  rootElement: null
}

export default messageInstance
