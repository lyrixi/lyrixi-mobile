/**
 * IndexBar Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface IndexBarProps {
  /** 锚点数组 */
  anchors?: Array<string>
  /** 滚动容器元素 getter（初始化时 ref 可能未挂载，传 getter 可在使用时再取） */
  getScrollerElement?: () => HTMLElement | null
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 自定义滚动到指定位置 */
  scrollToAnchor?: (anchor: string, options?: { scrollerElement: HTMLElement }) => void
}

export interface IndexBarAnchorProps {
  /** 锚点名称 */
  name?: string
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 锚点内容 */
  children?: ReactNode
}

export interface IndexBarRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 提示元素 */
  tooltipElement?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 获取提示元素 */
  getTooltipElement?: () => HTMLDivElement
  /** 滚动到锚点 */
  scrollToAnchor?: (anchor: string) => void | -
}
