import type { ReactNode } from 'react'

/** Message.open 挂载用 Root（render / unmount） */
export type ReactDOMClientCompatRoot = {
  render(element: ReactNode): void
  unmount(): void
}
