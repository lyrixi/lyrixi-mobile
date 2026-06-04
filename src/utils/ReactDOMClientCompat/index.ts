import type { ReactNode } from 'react'
import ReactDOM from 'react-dom'

import type { ReactDOMClientCompatRoot } from './types'

export type { ReactDOMClientCompatRoot } from './types'

type NativeCreateRoot = (container: Element) => ReactDOMClientCompatRoot

let nativeCreateRoot: NativeCreateRoot | null | undefined

function getNativeCreateRoot(): NativeCreateRoot | null {
  if (nativeCreateRoot !== undefined) {
    return nativeCreateRoot
  }

  const mainCreateRoot = (ReactDOM as { createRoot?: NativeCreateRoot }).createRoot
  if (typeof mainCreateRoot === 'function') {
    nativeCreateRoot = mainCreateRoot.bind(ReactDOM) as NativeCreateRoot
    return nativeCreateRoot
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
    const clientCreateRoot = (require('react-dom/client') as { createRoot?: NativeCreateRoot })
      .createRoot
    if (typeof clientCreateRoot === 'function') {
      nativeCreateRoot = clientCreateRoot
      return nativeCreateRoot
    }
  } catch {
    // React 17 无 react-dom/client
  }

  nativeCreateRoot = null
  return null
}

/** createRoot：18+ 原生，17 用 render 垫片（供 Message.open） */
export function createRoot(container: Element): ReactDOMClientCompatRoot {
  const createRootNative = getNativeCreateRoot()
  if (createRootNative) {
    return createRootNative(container)
  }

  const render = (ReactDOM as { render?: (element: ReactNode, container: Element) => void })
    .render
  const unmount = (
    ReactDOM as { unmountComponentAtNode?: (container: Element) => boolean }
  ).unmountComponentAtNode
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
