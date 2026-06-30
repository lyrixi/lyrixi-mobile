/**
 * ListAsync Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface ListAsyncVirtualProp {
  getItemHeight: (item: ListAsyncItem) => number
}

export type ListAsyncLoadAction = 'load' | 'reload' | 'topRefresh' | 'bottomRefresh' | 'retry' | ''

export interface ListAsyncLoadResult {
  status: string
  message?: string
  list?: ListAsyncItem[]
  scrollTop?: number
  [key: string]: unknown
}

export interface ListAsyncProps {
  /** 数据加载函数 */
  loadData?: (params: { previousResult: ListAsyncLoadResult | null; action: string }) => Promise<ListAsyncLoadResult>
  /** 初始加载，默认 `true` */
  initialLoad?: boolean
  /** 列表数据 */
  list?: ListAsyncItem[]
  /** 列表高度 */
  height?: number
  /** 子元素 */
  children?: ReactNode
  /** 选中的项 */
  value?: ListAsyncItem | ListAsyncItem[] | null
  /** 格式化列表 */
  formatViewList?: (list: ListAsyncItem[], options?: { result: ListAsyncLoadResult | null }) => ListAsyncViewItem[]
  /** 格式化项 */
  formatViewItem?: (item: ListAsyncItem, options: { index: number; result?: ListAsyncLoadResult | null }) => ListAsyncViewItem
  /** 错误重试，默认 `true` */
  errorRetry?: boolean
  /** 空状态重试 */
  emptyRetry?: boolean
  /** 是否多选 */
  multiple?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 禁用顶部刷新，默认 `false` */
  disableTopRefresh?: boolean
  /** 禁用底部刷新，默认 `false` */
  disableBottomRefresh?: boolean
  /** 虚拟滚动配置 */
  virtual?: ListAsyncVirtualProp
  /** 滚动阈值 */
  threshold?: number
  /** 触摸事件阻止冒泡 */
  touchStopPropagation?: boolean
  /** 安全区域适配 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 项自定义样式 */
  itemStyle?: CSSProperties
  /** 项自定义类名 */
  itemClassName?: string
  /** 项布局 */
  itemLayout?: string
  /** 复选框外观 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPosition?: string
  /** 自定义项渲染 */
  itemRender?: (item: ListAsyncItem, options: { index: number; checked: boolean; onChange: (item: ListAsyncItem) => void }) => ReactNode
  /** 加载中渲染 */
  loadingRender?: (options: { action?: string }) => ReactNode
  /** 加载弹窗样式 */
  loadingModalStyle?: CSSProperties
  /** 加载弹窗类名 */
  loadingModalClassName?: string
  /** 加载遮罩样式 */
  loadingMaskStyle?: CSSProperties
  /** 加载遮罩类名 */
  loadingMaskClassName?: string
  /** 加载弹窗挂载节点 */
  loadingPortal?: HTMLElement
  /** 列表前置渲染 */
  prependRender?: (options: { list?: ListAsyncItem[]; value?: ListAsyncItem | ListAsyncItem[] | null; onChange?: (newValue: ListAsyncItem | ListAsyncItem[] | null, options?: { action?: string; checkedItem: ListAsyncItem }) => void }) => ReactNode
  /** 列表后置渲染 */
  appendRender?: (options: { list?: ListAsyncItem[]; value?: ListAsyncItem | ListAsyncItem[] | null; onChange?: (newValue: ListAsyncItem | ListAsyncItem[] | null, options?: { action?: string; checkedItem: ListAsyncItem }) => void }) => ReactNode
  /** 变化事件 */
  onChange?: (newValue: ListAsyncItem | ListAsyncItem[] | null, options?: { action?: string; checkedItem: ListAsyncItem }) => void
  /** 顶部刷新回调 */
  onTopRefresh?: () => void | Promise<void>
  /** 底部刷新回调 */
  onBottomRefresh?: () => void | Promise<void>
  /** 加载事件 */
  onLoad?: (params: { result: ListAsyncLoadResult | null; action: ListAsyncLoadAction }) => void
}

export interface ListAsyncRef {
  /** 根元素 */
  element: HTMLElement | null
  /** 获取根元素 */
  getElement: () => HTMLElement | null
  /** 获取锚点列表 */
  getAnchors?: () => string[]
  /** 滚动到锚点 */
  scrollToAnchor?: (anchor: string) => void
  /** 重新加载 */
  reload?: (action?: string) => void
  /** 获取加载结果 */
  getResult?: () => ListAsyncLoadResult | null
}