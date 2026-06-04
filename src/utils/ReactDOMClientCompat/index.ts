import type { ReactNode } from 'react'
import ReactDOM from 'react-dom'

import type {
  ReactDOMClientCompatClient18Module,
  ReactDOMClientCompatContainer,
  ReactDOMClientCompatDom17,
  ReactDOMClientCompatDomWith18,
  ReactDOMClientCompatRoot
} from './types'

export type { ReactDOMClientCompatRoot } from './types'

const reactDom17 = ReactDOM as ReactDOMClientCompatDom17

let cachedReact18Client: ReactDOMClientCompatClient18Module | null | undefined

/** 解析 18+ 客户端：主包 createRoot(18) → react-dom/client(19) */
function resolveReact18Client(): ReactDOMClientCompatClient18Module | null {
  if (cachedReact18Client !== undefined) {
    return cachedReact18Client
  }

  const fromMain = ReactDOM as ReactDOMClientCompatDomWith18
  if (typeof fromMain.createRoot === 'function') {
    cachedReact18Client = fromMain as ReactDOMClientCompatClient18Module
    return cachedReact18Client
  }

  try {
    // 动态 require，避免 17 在打包阶段解析不存在的 react-dom/client
    // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
    const fromClient = require('react-dom/client') as ReactDOMClientCompatClient18Module
    if (typeof fromClient.createRoot === 'function') {
      cachedReact18Client = fromClient
      return cachedReact18Client
    }
  } catch {
    // 17 无 react-dom/client
  }

  cachedReact18Client = null
  return null
}

function createRoot17(container: ReactDOMClientCompatContainer): ReactDOMClientCompatRoot {
  const render = reactDom17.render
  const unmount = reactDom17.unmountComponentAtNode
  if (!render || !unmount) {
    throw new Error(
      '[lyrixi-mobile] createRoot is unavailable: use react-dom 18+ or React 17 render API.'
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

function hydrateRoot17(
  container: Element | Document,
  element: ReactNode
): ReactDOMClientCompatRoot {
  const hydrate = reactDom17.hydrate
  const render = reactDom17.render
  const unmount = reactDom17.unmountComponentAtNode
  if (!hydrate || !render || !unmount) {
    throw new Error(
      '[lyrixi-mobile] hydrateRoot is unavailable: use react-dom 18+ or React 17 hydrate API.'
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

/** createRoot：18+ 原生 API，17 垫片 */
export function createRoot(container: ReactDOMClientCompatContainer): ReactDOMClientCompatRoot {
  const client18 = resolveReact18Client()
  if (client18) {
    return client18.createRoot(container)
  }
  return createRoot17(container)
}

/** hydrateRoot：18+ 原生 API，17 垫片 */
export function hydrateRoot(
  container: Element | Document,
  element: ReactNode
): ReactDOMClientCompatRoot {
  const client18 = resolveReact18Client()
  if (client18?.hydrateRoot) {
    return client18.hydrateRoot(container, element)
  }
  return hydrateRoot17(container, element)
}
