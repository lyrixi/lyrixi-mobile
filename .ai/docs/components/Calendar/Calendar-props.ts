/**
 * Calendar Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface CalendarProps {
  /** 是否显示 */
  open?: boolean
  /** 选中的值 */
  value?: Date | Date[]
  /** 选择模式 */
  selectionMode?: 'single' | 'multiple' | 'range'
  /** 日历类型，默认 `'month'` */
  type?: 'week' | 'month'
  /** 周起始日，默认 `'Monday'` */
  weekStart?: 'Monday' | 'Sunday'
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 最小日期 */
  min?: Date
  /** 最大日期 */
  max?: Date
  /** 允许清除，默认 `true` */
  allowClear?: boolean
  /** 是否可拖动，默认 `['horizontal', 'vertical']` */
  draggable?: boolean | Array<'horizontal' | 'vertical'>
  /** 标题渲染 */
  titleRender?: () => ReactNode
  /** 头部渲染 */
  headerRender?: () => ReactNode
  /** 日期渲染 */
  dateRender?: (date: Date, props: object) => ReactNode
  /** 变化事件 */
  onChange?: (value: Date | Date[]) => void
  /** 页面变化事件 */
  onPageChange?: (date: Date) => void
  /** 错误事件 */
  onError?: (error: Error) => void
}

export interface CalendarHeaderProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 头部内容 */
  children?: ReactNode
  /** 上一月 */
  onPreviousMonth?: (e?: MouseEvent) => void
  /** 下一月 */
  onNextMonth?: (e?: MouseEvent) => void
  /** 上一年 */
  onPreviousYear?: (e?: MouseEvent) => void
  /** 下一年 */
  onNextYear?: (e?: MouseEvent) => void
}

export interface CalendarRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 收起 */
  slideCollapse?: () => Promise<void>
  /** 展开 */
  slideExpand?: () => Promise<void>
  /** 上一页 */
  slidePrevious?: () => Promise<void>
  /** 下一页 */
  slideNext?: () => Promise<void>
}

export interface CalendarHeaderRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
