/**
 * ToolBar Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface ToolBarProps {
  /** 变体，默认 `'default'` */
  variant?: 'filled' | 'default'
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 工具栏内容 */
  children?: ReactNode
}

export interface ToolBarDropdownProps {
  /** 方向 */
  direction?: 'horizontal' | 'vertical'
  /** 是否为块级元素 */
  block?: boolean
  /** 颜色，默认 `'default'` */
  color?: 'default' | 'transparent' | 'primary' | 'info' | 'warning' | 'danger' | 'success'
  /** 背景颜色 */
  backgroundColor?: 'default' | 'transparent' | 'white' | 'primary' | 'info' | 'warning' | 'danger' | 'success'
  /** 边框颜色，默认 `'default'` */
  borderColor?: 'default' | 'transparent' | 'primary' | 'info' | 'warning' | 'danger' | 'success'
  /** 边框样式，默认 `'none'` */
  border?: 'none' | 'dotted' | 'dashed' | 'solid'
  /** 高度尺寸 */
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | [number, number]
  /** 是否为等宽高 */
  sizeEqual?: boolean
  /** 圆角，默认 `'m'` */
  radius?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
  /** 字体大小 */
  fontSize?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 下拉内容 */
  children?: ReactNode
  /** 自定义组合渲染 */
  comboRender?: () => ReactNode
  /** 自定义箭头渲染 */
  arrowRender?: () => ReactNode
  /** 模态框样式 */
  modalStyle?: object
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 偏移量 */
  offset?: { top?: number; bottom?: number; left?: number; right?: number }
  /** 左侧偏移 */
  left?: string | number
  /** 右侧偏移 */
  right?: string | number
  /** 挂载节点 */
  portal?: HTMLElement
  /** 自定义模态框渲染 */
  modalRender?: (ctx: { open: boolean | null; onClose: () => void }) => ReactNode
  /** 打开前事件 */
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  /** 打开事件 */
  onOpen?: () => void
  /** 关闭事件 */
  onClose?: () => void
}

export interface ToolBarDateRangeProps {
  /** 日期范围值 */
  value?: [Date, Date]
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: [Date, Date]) => string
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
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
  /** 日期类型 */
  type?: 'year' | 'quarter' | 'month' | 'date' | 'time' | 'datetime' | 'week'
  /** 最小日期 */
  min?: Date
  /** 最大日期 */
  max?: Date
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
  /** 标题渲染 */
  titleRender?: () => ReactNode
  /** 确认按钮 */
  okNode?: ReactNode
  /** 取消按钮 */
  cancelNode?: ReactNode
  /** 确认按钮可见 */
  okVisible?: boolean
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 打开前事件 */
  onBeforeOpen?: () => Promise<boolean>
  /** 变化事件 */
  onChange?: (value: [Date, Date]) => void
  /** 确认事件 */
  onOk?: (value: [Date, Date]) => void
}

export interface ToolBarFilterProps {
  /** 方向 */
  direction?: ButtonProps['direction']
  /** 块级 */
  block?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 颜色 */
  color?: string
  /** 背景颜色 */
  backgroundColor?: string
  /** 边框颜色 */
  borderColor?: string
  /** 边框样式 */
  border?: string
  /** 尺寸 */
  size?: ButtonProps['size']
  /** 等宽高 */
  sizeEqual?: boolean
  /** 字体大小 */
  fontSize?: string | number
  /** 圆角 */
  radius?: string | number
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 模态框样式 */
  modalStyle?: object
  /** 模态框类名 */
  modalClassName?: string
  /** 筛选内容 */
  children?: ReactNode
  /** 组合区渲染 */
  comboRender?: (params: { comboRef; open; onClick }) => ReactNode
  /** 模态内容渲染 */
  modalRender?: (params: { open; onClose }) => ReactNode
  /** 挂载节点 */
  portal?: ModalProps['portal']
  /** 底部渲染 */
  footerRender?: (params: { onClose }) => ReactNode
  /** 图标 */
  icon?: ReactNode
  /** 取消事件 */
  onCancel?: () => void
  /** 打开事件 */
  onOpen?: () => void
  /** 关闭事件 */
  onClose?: () => void
  /** 配置事件 */
  onConfig?: () => void
  /** 重置事件 */
  onReset?: () => void
  /** 确认事件 */
  onOk?: (ctx: { close: () => void }) => void
}

export interface ToolBarRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface ToolBarDropdownRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 关闭下拉 */
  close?: () => void
  /** 打开下拉 */
  open?: () => void
}

export interface ToolBarDateRangeRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 关闭选择器 */
  close?: () => void
  /** 打开选择器 */
  open?: () => void
}

export interface ToolBarActionSheetRef {
  /** 关闭面板 */
  close?: () => void
  /** 打开面板 */
  open?: () => void
}

export interface ToolBarFilterRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 关闭筛选 */
  close?: () => void
  /** 打开筛选 */
  open?: () => void
}
