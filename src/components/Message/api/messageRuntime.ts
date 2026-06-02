import type { Root } from 'react-dom/client'

export type MessageRuntime = {
  root: Root | null
  container: HTMLDivElement | null
  onClose?: () => void
  exitTimer: number | null
  animateClose: (() => void) | null
}

export const messageRuntime: MessageRuntime = {
  root: null,
  container: null,
  onClose: undefined,
  exitTimer: null,
  animateClose: null
}

export function setMessageAnimateClose(handler: (() => void) | null) {
  messageRuntime.animateClose = handler
}
