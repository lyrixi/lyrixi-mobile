/**
 * TabBar Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface TabBarTabsProps {
  /** 选中的值 */
  value?: object
  /** 标签列表，默认 `[]` */
  list?: Array<{id: string, name: string, description: string, iconRender: function, content: ReactNode, disabled: boolean}>
  /** 分隔符 */
  separator?: ReactNode
  /** 间距 */
  gap?: string | number
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 描述位置，默认 `'bottom'` */
  descriptionPosition?: 'top' | 'bottom'
  /** 变化事件 */
  onChange?: (value: object) => void
}

export interface TabBarSlideProps {
  /** 选中的值 */
  value?: object
  /** 标签列表，默认 `[]` */
  list?: Array<{id: string, name: string, description: string, iconRender: function, content: ReactNode, disabled: boolean}>
  /** 分隔符 */
  separator?: ReactNode
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 描述位置，默认 `'bottom'` */
  descriptionPosition?: 'top' | 'bottom'
  /** 变化事件 */
  onChange?: (value: object) => void
}

export interface TabBarMenusProps {
  /** 选中的值 */
  value?: object
  /** 标签列表，默认 `[]` */
  list?: Array<{id: string, name: string, description: string, iconRender: function, content: ReactNode, disabled: boolean}>
  /** 分隔符 */
  separator?: ReactNode
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 描述位置，默认 `'bottom'` */
  descriptionPosition?: 'top' | 'bottom'
  /** 变化事件 */
  onChange?: (value: object) => void
}

export interface TabBarGroupProps {
  /** 选中的值 */
  value?: object
  /** 标签列表，默认 `[]` */
  list?: Array<{id: string, name: string, description: string, iconRender: function, content: ReactNode, disabled: boolean}>
  /** 分隔符 */
  separator?: ReactNode
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 描述位置，默认 `'bottom'` */
  descriptionPosition?: 'top' | 'bottom'
  /** 变化事件 */
  onChange?: (value: object) => void
}

export interface TabBarTabsRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface TabBarSlideRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface TabBarMenusRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface TabBarGroupRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
