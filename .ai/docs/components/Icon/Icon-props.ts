/**
 * Icon Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface IconProps {
  /** 是否禁用 */
  disabled?: boolean
  /** 颜色；SVG 需 currentColor */
  color?: 主题 token 或自定义
  /** 背景颜色 */
  backgroundColor?: 主题 token 或自定义
  /** 尺寸；SVG 模式为容器宽高，默认 `'m'` */
  size?: 'xxs' | 'xs' | ...
  /** 圆角 */
  radius?: 尺寸 token
  /** 自定义样式 */
  style?: CSSProperties
  /** 附加类名（不用于选字形） */
  className?: string
  /** 点击 */
  onClick?: MouseEventHandler
  /** 触摸开始 */
  onTouchStart?: TouchEventHandler
}

export interface IconRef {
  /** 根元素 */
  element?: HTMLElement | null（svg 模式为 span，兼容模式为 i）
  /** 获取根元素 */
  getElement?: () => HTMLElement | null
}
