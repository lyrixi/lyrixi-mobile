/**
 * Selector Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface SelectorProps {
  /** 选中的值 */
  value?: any[]
  /** 选项列表 */
  list?: Array<{id: string, name: string, [key: string]: any}>
  /** 省略配置 */
  ellipsis?: object
  /** 是否禁用 */
  disabled?: boolean
  /** 是否多选 */
  multiple?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 列数，默认 `2` */
  columns?: number
  /** 选择组 ID */
  id?: string
  /** 变化事件 */
  onChange?: (value: any[]) => void
}

export interface SelectorRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 实例对象 */
  instance?: object
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 获取实例对象 */
  getInstance?: () => object
}
