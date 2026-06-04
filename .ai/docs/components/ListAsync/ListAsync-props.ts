/**
 * ListAsync Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface ListAsyncProps {
  /** 缓存名称 */
  cacheName?: string
  /** 数据接口地址 */
  url?: string
  /** 请求头 */
  headers?: object
  /** 查询参数 */
  payload?: {rows: number, [key: string]: any}
  /** 格式化入参 */
  formatPayload?: (result: object) => object
  /** 格式化结果 */
  formatResult?: (result: object) => object{status: 'error/success', totalPage: 总页数(非必返回), list: [列表数据]}
  /** 格式化列表 */
  formatViewList?: (list: Array) => Array
  /** 格式化项 */
  formatViewItem?: (item: object) => object
  /** 错误重试 */
  errorRetry?: boolean
  /** 空状态重试 */
  emptyRetry?: boolean
  /** 是否多选 */
  multiple?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 禁用顶部刷新 */
  disableTopRefresh?: boolean
  /** 禁用底部刷新 */
  disableBottomRefresh?: boolean
  /** 是否虚拟滚动 */
  virtual?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 自定义项渲染 */
  itemRender?: (item: object) => ReactNode
  /** 项布局 */
  itemLayout?: string
  /** 加载中渲染 */
  loadingRender?: () => ReactNode
  /** 前置渲染 */
  prependRender?: () => ReactNode
  /** 后置渲染 */
  appendRender?: () => ReactNode
  /** 变化事件 */
  onChange?: (value: any | any[]) => void
  /** 滚动事件 */
  onScroll?: (e: Event) => void
  /** 滚动结束事件 */
  onScrollEnd?: (e: Event) => void
  /** 加载事件 */
  onLoad?: ({result: object, action: string}) => void
}

export interface ListAsyncRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 更新缓存 */
  updateCache?: (extraCache: object) => void | -
  /** 清除缓存 */
  clearCache?: () => void
  /** 获取缓存 */
  getCache?: () => object
  /** 重新加载 */
  reload?: (action?: string) => void | -
  /** 获取结果 */
  getResult?: () => object
}
