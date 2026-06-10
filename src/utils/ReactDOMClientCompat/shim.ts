// src/shims/react-dom-client.ts

import React from 'react'
import ReactDOM from 'react-dom'

export interface Root {
  render(children: React.ReactNode): void
  unmount(): void
}

export function createRoot(container: Element): Root {
  return {
    render(children: React.ReactNode) {
      ReactDOM.render(children as React.ReactElement, container)
    },
    unmount() {
      ReactDOM.unmountComponentAtNode(container)
    }
  }
}

/* react webpack配置: 勿删 */
/*
module.exports = {
  resolve: {
    alias: {
      'react-dom/client': path.resolve(
        __dirname,
        'src/library/v2/utils/ReactDOMClientCompat/shim.ts'
      )
    }
  }
}
*/
