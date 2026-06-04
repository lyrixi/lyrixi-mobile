/**
 * Input Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface InputTextProps {
  /** 输入框 ID */
  id?: string
  /** 输入框名称 */
  name?: string
  /** 输入类型，默认 `'text'` */
  type?: 'text' | 'number' | 'tel' | 'password' | 'search' | 'textarea' | 'autoSize'
  /** 输入值，默认 `''` */
  value?: string
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: any) => string
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自动获取焦点 */
  autoFocus?: boolean
  /** 自动选中 */
  autoSelect?: boolean
  /** 仅输入法落字后触发 onChange，默认 `false` */
  enableCompositionEnd?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 自定义输入框 */
  inputRender?: (props: object) => ReactNode
  /** 左侧图标 */
  leftIconNode?: ReactNode
  /** 右侧图标 */
  rightIconNode?: ReactNode | (props: {value: any}) => ReactNode
  /** 清除按钮 */
  clearRender?: (props: object) => ReactNode
  /** 小数精度 */
  precision?: number
  /** 是否去除空格 */
  trim?: boolean
  /** 最大值 */
  max?: number
  /** 最小值 */
  min?: number
  /** 最大长度 */
  maxLength?: number
  /** 输入模式 */
  inputMode?: string
  /** 回车键提示 */
  enterKeyHint?: string
  /** 自动完成 */
  autoComplete?: string
  /** 自动纠正 */
  autoCorrect?: string
  /** 拼写检查 */
  spellCheck?: boolean | 'true' | 'false'
  /** 是否显示光标 */
  cursor?: boolean | null
  /** 点击事件 */
  onClick?: (e: Event) => void
  /** 值变化事件 */
  onChange?: (value: any, e: Event) => void
  /** 失焦事件 */
  onBlur?: (e: Event) => void
  /** 聚焦事件 */
  onFocus?: (e: Event) => void
  /** 按键事件 */
  onKeyDown?: (e: Event) => void
  /** 回车事件 */
  onPressEnter?: (e: Event) => void
  /** 输入法开始 */
  onCompositionStart?: (e: Event) => void
  /** 输入法更新 */
  onCompositionUpdate?: (e: Event) => void
  /** 输入法结束 */
  onCompositionEnd?: (e: Event) => void
}

export interface InputPasswordStrengthProps {
  /** 密码值 */
  value?: string
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
}

export interface InputOTPProps {
  /** 输入类型 */
  type?: string
  /** 输入值 */
  value?: string[]
  /** 最大长度 */
  maxLength?: number
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readOnly?: boolean
  /** 值变化事件 */
  onChange?: (value: string[]) => void
  /** 输入完成 */
  onComplete?: (value: string[]) => void
}

export interface InputRangeProps {
  /** 输入框 ID */
  id?: string
  /** 输入框名称 */
  name?: string
  /** 输入值 */
  value?: number
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步进值 */
  step?: number
  /** 值变化事件 */
  onChange?: (value: number) => void
}

export interface InputRateProps {
  /** 输入框 ID */
  id?: string
  /** 输入框名称 */
  name?: string
  /** 评分值 */
  value?: number
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 图标渲染 */
  iconRender?: (params: object) => ReactNode
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步进值 */
  step?: number
  /** 值变化事件 */
  onChange?: (value: number) => void
}

export interface InputTextRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 输入框元素 */
  inputElement?: HTMLInputElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 获取输入框元素 */
  getInputElement?: () => HTMLInputElement
  /** 矫正值 */
  correctValue?: (value: any) => string
  /** 获取焦点 */
  focus?: () => void
  /** 失去焦点 */
  blur?: () => void
}

export interface InputPasswordStrengthRef {
  /** 根元素 */
  element?: HTMLUListElement
  /** 获取根元素 */
  getElement?: () => HTMLUListElement
  /** 获取强度等级 */
  getStrength?: (newValue?: string) => number
}

export interface InputOTPRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 获取焦点 */
  focus?: (itemIndex?: number) => void
  /** 失去焦点 */
  blur?: () => void
}

export interface InputRangeRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 输入框元素 */
  inputElement?: HTMLInputElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 获取输入框元素 */
  getInputElement?: () => HTMLInputElement
}

export interface InputRateRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 输入框元素 */
  inputElement?: HTMLInputElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 获取输入框元素 */
  getInputElement?: () => HTMLInputElement
}
