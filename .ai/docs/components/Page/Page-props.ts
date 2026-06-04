/**
 * Page Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface PageProps {
  /** 是否安全区 */
  safeArea?: boolean
  /** 是否全屏，默认 `true` */
  full?: boolean
  /** 布局方式 */
  layout?: string
  /** 动画效果 */
  animation?: string
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 页面内容 */
  children?: ReactNode
}

export interface PageHeaderProps {
  /** 是否安全区 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 头部内容 */
  children?: ReactNode
}

export interface PageMainProps {
  /** 触发阈值 */
  threshold?: number
  /** 触摸阻止冒泡 */
  touchStopPropagation?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 主体内容 */
  children?: ReactNode
  /** 顶部刷新 */
  onTopRefresh?: () => void | Promise<boolean | string | undefined>
  /** 底部刷新 */
  onBottomRefresh?: () => void | Promise<boolean | string | undefined | void>
  /** 滚动事件 */
  onScroll?: (e: UIEvent) => void
  /** 滚动结束 */
  onScrollEnd?: (e: UIEvent) => void
}

export interface PageFooterProps {
  /** 按钮配置 */
  buttons?: unknown
  /** 是否安全区 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 底部内容 */
  children?: ReactNode
  /** 变化事件 */
  onChange?: (newValue: unknown) => void
}

export interface PageRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface PageHeaderRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface PageMainRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface PageFooterRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
