/**
 * DatePicker Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface DatePickerProps {
  /** 选中的值 */
  value?: Date | Date[]
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: Date | Date[]) => string
  /** 自动调整大小 */
  autoSize?: boolean
  /** 分隔符 */
  separator?: string
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
  /** 自定义组合渲染 */
  comboRender?: () => ReactNode
  /** 子元素 */
  children?: ReactNode
  /** 左侧图标 */
  leftIconNode?: ReactNode
  /** 右侧图标 */
  rightIconNode?: ReactNode
  /** 清除按钮渲染 */
  clearRender?: (props: object) => ReactNode
  /** 日期类型，默认 `'date'` */
  type?: 'year' | 'quarter' | 'month' | 'date' | 'time' | 'datetime' | 'week'
  /** 最小日期 */
  min?: Date
  /** 最大日期 */
  max?: Date
  /** 小时步长 */
  hourStep?: number
  /** 分钟步长 */
  minuteStep?: number
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
  onChange?: (value: Date | Date[]) => void
  /** 确认事件 */
  onOk?: (value: Date | Date[]) => void
}

export interface DatePickerTypeSwitcherProps {
  /** 当前选中项 */
  value?: object
  /** 类型列表 */
  types?: Array<object>
  /** 切换方式 */
  variant?: 'tabbar' | 'dropdown'
  /** 下拉挂载节点 */
  dropdownPortal?: HTMLElement
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 选择器组合样式 */
  pickerComboStyle?: object
  /** 选择器组合类名 */
  pickerComboClassName?: string
  /** Tab 栏样式 */
  tabbarStyle?: object
  /** Tab 栏类名 */
  tabbarClassName?: string
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 选择器组合渲染 */
  pickerComboRender?: (value: object, ctx: object) => ReactNode
  /** 变化事件 */
  onChange?: (value: object) => void
}

export interface DatePickerRangeSelectorProps {
  /** 选中的值 */
  value?: (Date | null)[] | null
  /** 自动交换值，默认 `true` */
  autoSwapValue?: boolean
  /** 日期类型，默认 `'date'` */
  type?: 'year' | 'quarter' | 'month' | 'date' | 'time' | 'datetime'
  /** 当前选中的范围 */
  rangeId?: string
  /** 范围配置 */
  ranges?: object
  /** 最小日期 */
  min?: Date
  /** 最大日期 */
  max?: Date
  /** 小时步长 */
  hourStep?: number
  /** 分钟步长 */
  minuteStep?: number
  /** 禁用开始日期 */
  startDisabled?: boolean
  /** 禁用结束日期 */
  endDisabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 挂载节点 */
  portal?: HTMLElement
  /** 变化事件 */
  onChange?: (value: (Date | null)[] | null, meta?: object) => void
  /** 确认事件 */
  onOk?: (value: (Date | null)[] | null) => void
}

export interface DatePickerRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 关闭选择器 */
  close?: () => void
  /** 打开选择器 */
  open?: () => void
}

export interface DatePickerTypeSwitcherRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
