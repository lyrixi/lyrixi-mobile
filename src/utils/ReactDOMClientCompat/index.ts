import type { ReactNode } from 'react'
import ReactDOM from 'react-dom'

/** 与 react-dom/client 的 Root 一致（仅保留库内用到的 render / unmount） */
export type Root = {
  render(element: ReactNode): void
  unmount(): void
}

type Container = Element | DocumentFragment

type ReactDOMClientModule = {
  createRoot: (container: Container) => Root
  hydrateRoot: (container: Element | Document, initialChildren: ReactNode) => Root
}

type ReactDOMWithClient = typeof ReactDOM & Partial<ReactDOMClientModule>

/** React 17 无 createRoot，用 render / unmountComponentAtNode 模拟 */
type LegacyReactDOM = {
  render?: (element: ReactNode, container: Container) => unknown
  hydrate?: (element: ReactNode, container: Element) => void
  unmountComponentAtNode?: (container: Container) => boolean
}

const legacyReactDom = ReactDOM as LegacyReactDOM

/** 解析顺序：react-dom 主包(18) → react-dom/client(19) → null(17 走垫片) */
let cachedClient: ReactDOMClientModule | null | undefined

function loadReactDOMClient(): ReactDOMClientModule | null {
  if (cachedClient !== undefined) {
    return cachedClient
  }

  const fromMain = ReactDOM as ReactDOMWithClient
  if (typeof fromMain.createRoot === 'function') {
    cachedClient = fromMain as ReactDOMClientModule
    return cachedClient
  }

  try {
    // 动态 require，避免 React 17 在打包阶段解析不存在的 react-dom/client
    // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
    const fromClient = require('react-dom/client') as ReactDOMClientModule
    if (typeof fromClient.createRoot === 'function') {
      cachedClient = fromClient
      return cachedClient
    }
  } catch {
    // react-dom/client 不存在（React 17）
  }

  cachedClient = null
  return null
}

function createRootLegacy(container: Container): Root {
  const render = legacyReactDom.render
  const unmount = legacyReactDom.unmountComponentAtNode
  if (!render || !unmount) {
    throw new Error(
      '[lyrixi-mobile] createRoot is unavailable: use react-dom 18+ or React 17 with legacy render API.'
    )
  }
  return {
    render(element) {
      render(element, container)
    },
    unmount() {
      unmount(container)
    }
  }
}

/** createRoot：React 18/19 走原生 API，React 17 走垫片 */
export function createRoot(container: Container): Root {
  const client = loadReactDOMClient()
  if (client) {
    return client.createRoot(container)
  }
  return createRootLegacy(container)
}

/** hydrateRoot：React 18/19 走原生 API，React 17 用 hydrate + render 模拟 */
export function hydrateRoot(container: Element | Document, element: ReactNode): Root {
  const client = loadReactDOMClient()
  if (client?.hydrateRoot) {
    return client.hydrateRoot(container, element)
  }
  const hydrate = legacyReactDom.hydrate
  const render = legacyReactDom.render
  const unmount = legacyReactDom.unmountComponentAtNode
  if (!hydrate || !render || !unmount) {
    throw new Error(
      '[lyrixi-mobile] hydrateRoot is unavailable: use react-dom 18+ or React 17 with legacy hydrate API.'
    )
  }
  const host = container as Element
  hydrate(element, host)
  return {
    render(nextElement) {
      render(nextElement, host)
    },
    unmount() {
      unmount(host)
    }
  }
}
