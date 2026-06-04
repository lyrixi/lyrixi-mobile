/**
 * Chat Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface ChatListProps {
  /** 时间间隔，默认 `60000` */
  timeSpace?: number
  /** 选中的值 */
  value?: Array<object>
  /** 消息列表 */
  list?: Array<{id: string, position: 'left' | 'right', avatarUrl?: string, name: string, avatarRender?: (props: object) => ReactNode, avatarNode?: ReactNode, authorRender?: (props: object) => ReactNode, authorNode?: ReactNode, content: ReactNode, time: Date}>
  /** 格式化列表 */
  formatViewList?: (list: Array<{...item, _raw: item}>) => Array<object>
  /** 格式化项 */
  formatViewItem?: (item: object, index: number) => object
  /** 是否可选 */
  checkable?: boolean
  /** 复选框渲染 */
  checkboxVariant?: (item: object) => ReactNode
  /** 复选框位置 */
  checkboxPosition?: left/right
  /** 变化事件 */
  onChange?: (value: Array<object>) => void
}

export interface ChatItemProps {
  /** 消息唯一标识 */
  id?: string | number
  /** 原始消息数据 */
  _raw?: Record<string, unknown>
  /** 是否选中 */
  checked?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 自定义类名 */
  className?: string
  /** 气泡位置 */
  position?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 复选框样式变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPosition?: string
  /** 头像地址 */
  avatarUrl?: string
  /** 头像渲染 */
  avatarRender?: (ctx: {checked?: boolean, ...}) => ReactNode
  /** 头像节点 */
  avatarNode?: ReactNode
  /** 作者渲染 */
  authorRender?: (ctx: {checked?: boolean, ...}) => ReactNode
  /** 作者节点 */
  authorNode?: ReactNode
  /** 消息内容 */
  content?: ReactNode
  /** 选中变化事件 */
  onChange?: (checked: boolean) => void
}

export interface ChatListRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface ChatItemRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
