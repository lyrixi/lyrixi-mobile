/**
 * Loading Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface LoadingProps {
  /** 提示内容 */
  content?: ReactNode
  /** 内容区样式 */
  modalStyle?: CSSProperties
  /** 内容区类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: Element | DocumentFragment
  /** 图标渲染 */
  iconRender?: () => ReactNode
  /** 子元素 */
  children?: ReactNode
}

export interface LoadingShowProps {
  /** 唯一 ID */
  id?: string
  /** 提示内容 */
  content?: string
  /** 遮罩样式 */
  maskStyle?: Record<string, string>
  /** 遮罩类名 */
  maskClassName?: string
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: Record<string, string>
  /** 挂载节点 */
  portal?: HTMLElement | null
  /** 打开事件 */
  onOpen?: () => void
}

export interface LoadingRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
}