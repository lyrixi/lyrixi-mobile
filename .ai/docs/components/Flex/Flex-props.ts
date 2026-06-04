/**
 * Flex Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface FlexProps {
  /** 主轴方向，默认 `'horizontal'` */
  direction?: 'horizontal' | 'vertical'
  /** 主轴对齐方式（水平方向上的分布），默认 `'start'` */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  /** 交叉轴对齐方式（垂直于主轴的对齐） */
  align?: 'start' | 'end' | 'center'
  /** 是否换行；`true` 换行，`false` 不换行（子项被压缩），`'scroll'` 超出滚动，默认 `false` */
  wrap?: boolean | 'scroll'
  /** 子项间距；可为变量名或数字，或 `[水平间距, 垂直间距]`，默认 `'s'` */
  gap?: number | 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | [number | string, number | string]
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 子元素 */
  children?: ReactNode
}

export interface FlexCompactProps {
  /** 分隔符 */
  separator?: ReactNode
  /** 块级布局 */
  block?: boolean
  /** 尺寸 */
  size?: 's' | 'm' | 'l' | string
  /** 方向 */
  direction?: 'horizontal' | 'vertical' | string
  /** 圆角 */
  radius?: 's' | 'm' | 'l' | string
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 分隔符样式 */
  separatorStyle?: object
  /** 分隔符类名 */
  separatorClassName?: string
  /** 子元素 */
  children?: ReactNode
}

export interface FlexRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface FlexCompactRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
