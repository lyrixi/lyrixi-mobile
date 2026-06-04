import type { ReactNode } from 'react'
import type ReactDOM from 'react-dom'

/** 与 react-dom/client 的 Root 一致（仅保留库内用到的 render / unmount） */
export type ReactDOMClientCompatRoot = {
  render(element: ReactNode): void
  unmount(): void
}

export type ReactDOMClientCompatContainer = Element | DocumentFragment

/** 18+ 原生 createRoot / hydrateRoot（19 从 react-dom/client 加载，逻辑同 18） */
export type ReactDOMClientCompatClient18Module = {
  createRoot: (container: ReactDOMClientCompatContainer) => ReactDOMClientCompatRoot
  hydrateRoot: (
    container: Element | Document,
    initialChildren: ReactNode
  ) => ReactDOMClientCompatRoot
}

export type ReactDOMClientCompatDomWith18 = typeof ReactDOM &
  Partial<ReactDOMClientCompatClient18Module>

/** 17 用 render / hydrate / unmountComponentAtNode 模拟 Root */
export type ReactDOMClientCompatDom17 = {
  render?: (element: ReactNode, container: ReactDOMClientCompatContainer) => unknown
  hydrate?: (element: ReactNode, container: Element) => void
  unmountComponentAtNode?: (container: ReactDOMClientCompatContainer) => boolean
}
