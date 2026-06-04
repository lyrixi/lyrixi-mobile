/**
 * Form Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface FormProps {
  /** 布局方式，默认 `'horizontal'` */
  layout?: 'horizontal' | 'vertical' | 'inline'
  /** 标签列配置 */
  labelCol?: object
  /** 内容列配置 */
  mainCol?: object
  /** 滚动容器元素 */
  scrollerElement?: HTMLElement
  /** 是否虚拟滚动 */
  virtual?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 表单内容 */
  children?: ReactNode
  /** 表单实例 */
  form?: FormInstance
  /** 表单名称 */
  name?: string
  /** 校验提示信息 */
  validateMessages?: object
  /** 初始值 */
  initialValues?: object
  /** 字段变化事件 */
  onFieldsChange?: (changedFields, allFields) => void
  /** 值变化事件 */
  onValuesChange?: (changedValues, allValues) => void
}

export interface FormItemProps {
  /** 字段名 */
  name?: NamePath
  /** 值属性名 */
  valuePropName?: string
  /** 是否更新 */
  shouldUpdate?: boolean | (prevValues, currentValues) => boolean
  /** 初始值 */
  initialValue?: unknown
  /** 校验触发时机 */
  validateTrigger?: string | string[]
  /** 校验规则 */
  rules?: Rule[]
  /** 表单项 ID */
  id?: string
  /** 标签省略配置 */
  labelEllipsis?: object
  /** 标签栅格占位 */
  labelSpan?: number | string
  /** 内容栅格占位 */
  mainSpan?: number | string
  /** 内容省略配置 */
  mainEllipsis?: object
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 布局方式 */
  layout?: string
  /** 高度 */
  height?: number
  /** 最大长度 */
  maxLength?: number
  /** 标签样式 */
  labelStyle?: object
  /** 标签类名 */
  labelClassName?: string
  /** 内容区样式 */
  mainStyle?: object
  /** 内容区类名 */
  mainClassName?: string
  /** 标签 */
  label?: ReactNode
  /** 标签帮助 */
  labelHelp?: ReactNode
  /** 输入框额外渲染 */
  inputExtraRender?: (opts: { errors: string[] }) => ReactNode
  /** 额外渲染 */
  extraRender?: (opts: { errors: string[] }) => ReactNode
  /** 额外信息 */
  extra?: (opts: { value: unknown }) => ReactNode
  /** 表单项内容 */
  children?: ReactNode
}

export interface FormRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface FormItemRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
