/**
 * ReactDOMClientCompat API（AI 文档，生成代码时以此为准）
 */

import type { ReactNode } from 'react'

/** Message.open 挂载用 Root（render / unmount） */
export type Root = {
  render(element: ReactNode): void
  unmount(): void
}

export namespace ReactDOMClientCompat {
  /** 兼容 React 17/18 创建 root 节点 */
  export function createRoot(container: Element): Root
}