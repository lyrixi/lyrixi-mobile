/**
 * Select Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface SelectComboProps {
  /** 选中的值 */
  value?: any | any[]
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: any) => string
  /** 自动调整大小 */
  autoSize?: boolean
  /** 分隔符 */
  separator?: string
  /** 模式 */
  mode?: string
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否多选 */
  multiple?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 左侧图标 */
  leftIconNode?: ReactNode
  /** 右侧图标 */
  rightIconNode?: ReactNode
  /** 清除按钮渲染 */
  clearRender?: (props: object) => ReactNode
  /** 选项列表 */
  list?: Array<object>
  /** 格式化列表 */
  formatViewList?: (list: Array) => Array
  /** 格式化项 */
  formatViewItem?: (item: object) => object
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 模态框样式 */
  modalStyle?: object
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 标题 */
  title?: ReactNode
  /** 取消按钮 */
  cancelNode?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 头部渲染 */
  headerRender?: (props: object) => ReactNode
  /** 项渲染 */
  itemRender?: (item: object) => ReactNode
  /** 布局 */
  layout?: string
  /** 是否可选 */
  checkable?: boolean
  /** 复选框渲染 */
  checkboxVariant?: (item: object) => ReactNode
  /** 复选框渲染 */
  checkboxPosition?: left/right
  /** 确认事件 */
  onOk?: (value: any | any[]) => void
  /** 变化事件 */
  onChange?: (value: any | any[]) => void
  /** 打开前事件 */
  onBeforeOpen?: () => Promise<boolean>
}

export interface SelectModalProps {
  /** 选中的值 */
  value?: SelectItem | SelectItem[] | null
  /** 选项列表 */
  list?: SelectItem[]
  /** 格式化列表 */
  formatViewList?: (list: SelectItem[]) => ViewItem[]
  /** 格式化项 */
  formatViewItem?: (item: SelectItem, options: { index: number }) => ViewItem
  /** 是否多选 */
  multiple?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 项样式 */
  itemStyle?: object
  /** 项类名 */
  itemClassName?: string
  /** 项布局 */
  itemLayout?: string
  /** 复选框变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPosition?: string
  /** 项渲染 */
  itemRender?: (item, options: { index; checked; onChange }) => ReactNode
  /** 变化事件 */
  onChange?: (newValue, options?: { action; checkedItem }) => void
  /** 是否显示 */
  open?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 模态框样式 */
  modalStyle?: object
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 标题 */
  title?: ReactNode
  /** 取消按钮 */
  cancelNode?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 头部渲染 */
  headerRender?: (ctx: { open; value; list }) => ReactNode
  /** 确认事件 */
  onOk?: (value: SelectItem | SelectItem[] | null) => unknown
  /** 关闭事件 */
  onClose?: () => void
}

export interface SelectMainProps {
  /** 选中的值 */
  value?: SelectItem | SelectItem[] | null
  /** 选项列表 */
  list?: SelectItem[]
  /** 格式化列表 */
  formatViewList?: (list: SelectItem[]) => ViewItem[]
  /** 格式化项 */
  formatViewItem?: (item: SelectItem, options: { index: number }) => ViewItem
  /** 是否多选 */
  multiple?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 项样式 */
  itemStyle?: object
  /** 项类名 */
  itemClassName?: string
  /** 项布局 */
  itemLayout?: string
  /** 复选框变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPosition?: string
  /** 项渲染 */
  itemRender?: (item, options: { index; checked; onChange }) => ReactNode
  /** 变化事件 */
  onChange?: (newValue, options?: { action; checkedItem }) => void
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
}

export interface SelectComboRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 关闭选择器 */
  close?: () => void
  /** 打开选择器 */
  open?: () => void
}

export interface SelectModalRef {
  /** 遮罩元素 */
  maskElement?: HTMLDivElement
  /** 获取遮罩元素 */
  getMaskElement?: () => HTMLDivElement
  /** 模态元素 */
  modalElement?: HTMLDivElement
  /** 获取模态元素 */
  getModalElement?: () => HTMLDivElement
  /** 主列表元素 */
  mainElement?: HTMLDivElement
  /** 获取主列表元素 */
  getMainElement?: () => HTMLDivElement
}

export interface SelectMainRef {
  /** 主元素 */
  mainElement?: HTMLDivElement
  /** 获取主元素 */
  getMainElement?: () => HTMLDivElement
}
