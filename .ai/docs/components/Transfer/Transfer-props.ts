/**
 * Transfer Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface TransferProps {
  /** 选中的值 */
  value?: Array<{id: string, [key: string]: any}>
  /** 选项列表 */
  list?: Array<{id: string, [key: string]: any}>
  /** 标题数组 */
  titles?: [string, string]
  /** 是否展开 */
  open?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 变化事件 */
  onChange?: (value: Array) => void
}

export interface TransferRef {
  /** 主元素 */
  mainElement?: HTMLDivElement
  /** 获取主元素 */
  getMainElement?: () => HTMLDivElement
}
