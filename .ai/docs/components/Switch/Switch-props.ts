/**
 * Switch Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface SwitchProps {
  /** 是否选中 */
  checked?: boolean
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 尺寸，默认 `'m'` */
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 开启状态内容 */
  on?: ReactNode
  /** 关闭状态内容 */
  off?: ReactNode
  /** 变化事件 */
  onChange?: (checked: boolean) => void
}

export interface SwitchRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
