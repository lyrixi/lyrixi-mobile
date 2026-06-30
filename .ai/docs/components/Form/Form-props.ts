/**
 * Form Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'
import type { FormInstance, FormProps as RcFormProps } from 'rc-field-form'
import type { Store, ValidateMessages, Rule, NamePath } from 'rc-field-form/lib/interface'
import type { ShouldUpdate } from 'rc-field-form/lib/Field'

// ---------- Form ----------

export interface FormProps {
  /** 布局方式 */
  layout?: string
  /** 标签栅格占位 */
  labelSpan?: number
  /** 标签省略配置 */
  labelEllipsis?: { rows?: number; [key: string]: unknown } | null
  /** 内容栅格占位 */
  mainSpan?: number
  /** 内容省略配置 */
  mainEllipsis?: { rows?: number; [key: string]: unknown } | null
  /** 是否虚拟滚动 */
  virtual?: boolean
  /** 表单实例 */
  form?: FormInstance
  /** 表单名称 */
  name?: string
  /** 校验提示信息 */
  validateMessages?: ValidateMessages
  /** 初始值 */
  initialValues?: Store
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 表单内容 */
  children?: ReactNode
  /** 字段变化事件 */
  onFieldsChange?: RcFormProps['onFieldsChange']
  /** 值变化事件 */
  onValuesChange?: RcFormProps['onValuesChange']
}

export interface FormRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
}

// ---------- Form.Item ----------

export interface FormItemProps {
  /** 字段名 */
  name?: NamePath
  /** 值属性名 */
  valuePropName?: string
  /** 是否更新 */
  shouldUpdate?: ShouldUpdate
  /** 初始值 */
  initialValue?: unknown
  /** 校验触发时机 */
  validateTrigger?: string | string[]
  /** 校验规则 */
  rules?: Rule[]
  /** 表单项 ID */
  id?: string
  /** 标签省略配置 */
  labelEllipsis?: { rows?: number; [key: string]: unknown }
  /** 标签栅格占位 */
  labelSpan?: number | string
  /** 内容栅格占位 */
  mainSpan?: number | string
  /** 内容省略配置 */
  mainEllipsis?: { rows?: number; [key: string]: unknown }
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 布局方式 */
  layout?: string
  /** 高度 */
  height?: number
  /** 最大长度 */
  maxLength?: number
  /** 标签样式 */
  labelStyle?: CSSProperties
  /** 标签类名 */
  labelClassName?: string
  /** 内容区样式 */
  mainStyle?: CSSProperties
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

export interface FormItemRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
}

// ---------- Form module types ----------

/** Form.useForm 返回的表单实例（扩展了 scrollToField） */
export interface ScrollToFieldOptions {
  behavior?: ScrollBehavior
  block?: ScrollLogicalPosition
  inline?: ScrollLogicalPosition
  [key: string]: unknown
}

export type FormUseFormInstance = FormInstance & {
  scrollToField: (name: string, options?: ScrollToFieldOptions) => void
}

/** Form.useWatch 的签名（同 rc-field-form useWatch） */
export type FormUseWatch = typeof import('rc-field-form').useWatch