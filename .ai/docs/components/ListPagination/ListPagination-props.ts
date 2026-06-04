/**
 * ListPagination Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface ListPaginationMainProps {
  /** 缓存名称 */
  cacheName?: string
  /** 数据接口地址 */
  url?: string
  /** 请求头 */
  headers?: Record<string, string>
  /** 查询参数 */
  payload?: Record<string, unknown>
  /** 分页配置 */
  pagination?: { rows?: number }
  /** 格式化入参 */
  formatPayload?: (params: object) => object | Promise<object>
  /** 格式化结果 */
  formatResult?: (result: unknown, options: object) => object | Promise<object>
  /** 是否初始加载 */
  initialLoad?: boolean
  /** 错误重试 */
  errorRetry?: boolean
  /** 空状态重试 */
  emptyRetry?: boolean
  /** 选中的值 */
  value?: object | object[] | null
  /** 静态列表 */
  list?: Array<object>
  /** 格式化列表 */
  formatViewList?: (list: Array) => Array
  /** 格式化项 */
  formatViewItem?: (item: object, options: object) => object
  /** 是否多选 */
  multiple?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 项样式 */
  itemStyle?: object
  /** 项类名 */
  itemClassName?: string
  /** 项布局 */
  itemLayout?: string
  /** 复选框样式变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPosition?: string
  /** 禁用顶部刷新 */
  disableTopRefresh?: boolean
  /** 禁用底部刷新 */
  disableBottomRefresh?: boolean
  /** 是否虚拟滚动 */
  virtual?: boolean | object
  /** 触发阈值 */
  threshold?: number
  /** 触摸阻止冒泡 */
  touchStopPropagation?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 子元素 */
  children?: ReactNode
  /** 自定义项渲染 */
  itemRender?: (item: object, options: object) => ReactNode
  /** 加载中渲染 */
  loadingRender?: (options: object) => ReactNode
  /** 加载弹窗样式 */
  loadingModalStyle?: object
  /** 加载弹窗类名 */
  loadingModalClassName?: string
  /** 加载遮罩样式 */
  loadingMaskStyle?: object
  /** 加载遮罩类名 */
  loadingMaskClassName?: string
  /** 加载挂载节点 */
  loadingPortal?: HTMLElement
  /** 前置渲染 */
  prependRender?: (options: object) => ReactNode
  /** 后置渲染 */
  appendRender?: (options: object) => ReactNode
  /** 变化事件 */
  onChange?: (value: object | object[] | null, options?: object) => void
  /** 滚动事件 */
  onScroll?: (e: UIEvent) => void
  /** 滚动结束事件 */
  onScrollEnd?: (e: UIEvent) => void
  /** 顶部刷新事件 */
  onTopRefresh?: () => void | Promise<boolean | string | undefined>
  /** 底部刷新事件 */
  onBottomRefresh?: () => void | Promise<boolean | string | undefined | void>
  /** 加载事件 */
  onLoad?: (params: { result: object | null; action: string }) => void
}

export interface ListPaginationComboProps {
  /** 选中的值 */
  value?: any | any[]
  /** 占位符 */
  placeholder?: string
  /** 展示格式化 */
  formatter?: (value: any) => string
  /** 自动调整大小 */
  autoSize?: boolean
  /** 多选时分隔符 */
  separator?: string
  /** 展示模式 */
  mode?: string
  /** 只读 */
  readOnly?: boolean
  /** 禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 样式/类名 */
  style / className?: object / string
  /** 左侧图标 */
  leftIconNode?: ReactNode
  /** 右侧图标 */
  rightIconNode?: ReactNode
  /** 清除按钮渲染 */
  clearRender?: (props: object) => ReactNode
  /** 数据接口地址 */
  url?: string
  /** 请求头 */
  headers?: object
  /** 查询参数 */
  payload?: object
  /** 格式化入参 */
  formatPayload?: (result: object) => object
  /** 格式化结果 */
  formatResult?: (result: object) => object
  /** 格式化列表 */
  formatViewList?: (list: Array) => Array
  /** 格式化项 */
  formatViewItem?: (item: object) => object
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 错误重试 */
  errorRetry?: boolean
  /** 空状态重试 */
  emptyRetry?: boolean
  /** 是否多选 */
  multiple?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 禁用顶部刷新 */
  disableTopRefresh?: boolean
  /** 禁用底部刷新 */
  disableBottomRefresh?: boolean
  /** 是否虚拟滚动 */
  virtual?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 弹窗样式 */
  modalStyle?: object
  /** 弹窗类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 弹窗标题 */
  title?: ReactNode
  /** 取消按钮 */
  cancelNode?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 头部渲染 */
  headerRender?: (props: object) => ReactNode
  /** 项渲染 */
  itemRender?: (item: object) => ReactNode
  /** 加载中渲染 */
  loadingRender?: () => ReactNode
  /** 前置渲染 */
  prependRender?: () => ReactNode
  /** 后置渲染 */
  appendRender?: () => ReactNode
  /** 确认事件 */
  onOk?: (value: any | any[]) => void
  /** 变化事件 */
  onChange?: (value: any | any[]) => void
  /** 打开前事件 */
  onBeforeOpen?: () => Promise<boolean>
}

export interface ListPaginationMainRef {
  /** 根元素 */
  element?: HTMLElement
  /** 获取根元素 */
  getElement?: () => HTMLElement | null
  /** 获取锚点列表 */
  getAnchors?: () => string[]
  /** 滚动到锚点 */
  scrollToAnchor?: (anchor: string) => void
  /** 重新加载 */
  reload?: (action?: string) => void
  /** 获取结果 */
  getResult?: () => object | null
  /** 更新缓存 */
  updateCache?: (extraCache?: object) => void
  /** 清除缓存 */
  clearCache?: () => unknown
  /** 获取缓存 */
  getCache?: () => unknown
}

export interface ListPaginationComboRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 关闭弹窗 */
  close?: () => void
  /** 打开弹窗 */
  open?: () => void
}

export interface ListPaginationModalRef {
  /** 遮罩元素 */
  maskElement?: HTMLDivElement
  /** 获取遮罩元素 */
  getMaskElement?: () => HTMLDivElement
  /** 模态框元素 */
  modalElement?: HTMLDivElement
  /** 获取模态框元素 */
  getModalElement?: () => HTMLDivElement
  /** 列表根元素 */
  element?: HTMLElement
  /** 获取列表根元素 */
  getElement?: () => HTMLElement | null
  /** 获取锚点列表 */
  getAnchors?: () => string[]
  /** 滚动到锚点 */
  scrollToAnchor?: (anchor: string) => void
  /** 重新加载 */
  reload?: (action?: string) => void
  /** 获取结果 */
  getResult?: () => object | null
  /** 更新缓存 */
  updateCache?: (extraCache?: object) => void
  /** 清除缓存 */
  clearCache?: () => unknown
  /** 获取缓存 */
  getCache?: () => unknown
}
