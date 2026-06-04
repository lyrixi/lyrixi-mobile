/**
 * List Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface ListProps {
  /** 选中的值 */
  value?: any | any[]
  /** 是否多选 */
  multiple?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 列表数据 */
  list?: Array<object>
  /** 格式化列表 */
  formatViewList?: (list: Array) => Array
  /** 格式化项 */
  formatViewItem?: (item: object) => object
  /** 是否可选 */
  checkable?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 项样式 */
  itemStyle?: object
  /** 项类名 */
  itemClassName?: string
  /** 项布局 */
  itemLayout?: string
  /** 自定义项渲染 */
  itemRender?: (item: object) => ReactNode
  /** 自定义复选框渲染 */
  checkboxVariant?: (item: object) => ReactNode
  /** 变化事件 */
  onChange?: (value: any | any[], options: object) => void
}

export interface ListRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
