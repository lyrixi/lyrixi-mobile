/**
 * Checkbox Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface CheckboxProps {
  /** 是否选中 */
  checked?: boolean
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 样式变体 */
  variant?: 'solid' | 'text' | 'outlined' | 'filled'
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 复选框内容 */
  children?: ReactNode
  /** 自定义图标渲染 */
  iconRender?: (props: {checked: boolean}) => ReactNode
  /** 图标位置，默认 `'left'` */
  iconPosition?: 'left' | 'right'
  /** 变化事件 */
  onChange?: (checked: boolean) => void
}

export interface CheckboxGroupProps {
  /** 选中的值 */
  value?: unknown
  /** 选项列表 */
  list?: Array<{id: string | number, [key: string]: any}>
  /** 占位符 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readOnly?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否多选 */
  multiple?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 自定义图标渲染 */
  iconRender?: (props: {checked: boolean}) => ReactNode
  /** 图标位置，默认 `'left'` */
  iconPosition?: 'left' | 'right'
  /** 变化事件 */
  onChange?: (value: object | object[] | null) => void
}

export interface CheckboxRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface CheckboxGroupRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
