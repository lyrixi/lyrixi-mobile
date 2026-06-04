import React from 'react'
import type { ReactNode } from 'react'
import ReactDOM from 'react-dom'

import type { ReactDOMClientCompatRoot } from './types'

export type { ReactDOMClientCompatRoot } from './types'

type React18CreateRoot = (container: Element) => ReactDOMClientCompatRoot

function isReact18OrNewer(): boolean {
  return parseInt(React.version.split('.')[0] ?? '0', 10) >= 18
}

function createReact18Root(container: Element): ReactDOMClientCompatRoot {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
  const { createRoot } = require('react-dom/client') as { createRoot: React18CreateRoot }
  return createRoot(container)
}

function createReact17Root(container: Element): ReactDOMClientCompatRoot {
  const render = (ReactDOM as { render?: (element: ReactNode, container: Element) => void }).render
  const unmount = (ReactDOM as { unmountComponentAtNode?: (container: Element) => boolean })
    .unmountComponentAtNode
  if (!render || !unmount) {
    throw new Error('[lyrixi-mobile] createRoot requires react-dom 18+ or React 17.')
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

/** createRoot：18+ 用 react-dom/client，17 用 render 垫片（供 Message.open） */
export function createRoot(container: Element): ReactDOMClientCompatRoot {
  return isReact18OrNewer() ? createReact18Root(container) : createReact17Root(container)
}
