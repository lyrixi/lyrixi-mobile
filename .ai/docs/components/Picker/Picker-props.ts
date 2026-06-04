/**
 * Picker Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface PickerProps {
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
  onChange?: (value: any | any[]) => void
}

export interface PickerRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 关闭选择器 */
  close?: () => void
  /** 打开选择器 */
  open?: () => void
}
