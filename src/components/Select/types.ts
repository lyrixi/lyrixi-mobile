import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { InputTextProps } from './../Input/Input.Text.types'
import type { ListProps } from './../List/types'

/**
 * 聚合 Select.Combo / Modal / Main 的 ref 能力；各入口仅实现其子集（字段均为可选以便合并透传）。
 *
 * // 公用属性：无
 * // Combo（Input.Select）透传：displayValue、getDisplayValue、element、getElement
 * // Modal 透传：maskElement、getMaskElement、modalElement、getModalElement
 * // Main 专用：mainElement、getMainElement
 * // Combo 组合层专用：close、open
 */
export interface SelectRef {
  // Combo（Input.Select）透传
  displayValue?: string
  getDisplayValue?: (newValue?: unknown) => string
  element?: HTMLElement | null
  getElement?: () => HTMLElement | null

  // Modal 透传
  maskElement?: HTMLDivElement | null
  getMaskElement?: () => HTMLDivElement | null
  modalElement?: HTMLDivElement | null
  getModalElement?: () => HTMLDivElement | null

  // Main 专用
  mainElement?: HTMLDivElement | null
  getMainElement?: () => HTMLDivElement | null

  // Combo 组合层专用
  close?: () => void
  open?: () => void
}

/**
 * 聚合 Select.Combo / Modal / Main 的 props；各入口仅使用其子集（未使用字段在运行时忽略）。
 *
 * // 公用属性：列表与弹层（value、list、格式化、条目样式、遮罩与弹层、onChange 等）
 * // Combo 专用属性：输入框占位、尺寸、只读、formatter、图标、clearRender、onClick 等
 * // Modal 专用属性：open、onClose
 * // Main 专用属性：列表外层容器 className、style（与 Combo 下 Input 的 className、style 同名，各入口自行使用）
 */
export interface SelectProps {
  // 公用属性
  value?: ListProps['value']
  list?: ListProps['list']
  formatViewList?: ListProps['formatViewList']
  formatViewItem?: ListProps['formatViewItem']
  multiple?: ListProps['multiple']
  checkable?: ListProps['checkable']
  maskClosable?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  itemStyle?: ListProps['itemStyle']
  itemClassName?: ListProps['itemClassName']
  itemLayout?: ListProps['itemLayout']
  checkboxVariant?: ListProps['checkboxVariant']
  checkboxPosition?: ListProps['checkboxPosition']
  portal?: boolean | HTMLElement | null
  title?: ReactNode
  cancelNode?: ReactNode
  cancelVisible?: boolean
  headerRender?: (ctx: { open: boolean; value: unknown; list: unknown }) => ReactNode
  itemRender?: ListProps['itemRender']
  onOk?: (value: unknown) => unknown
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  onChange?: ListProps['onChange']
  className?: string
  style?: CSSProperties

  // Combo 专用属性
  placeholder?: string
  autoSize?: boolean
  mode?: string
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  formatter?: (value: unknown, options?: { separator?: string }) => string
  separator?: string
  leftIconNode?: ReactNode
  rightIconNode?: ReactNode
  clearRender?: InputTextProps['clearRender']
  onClick?: (e: MouseEvent) => void

  // Modal 专用属性
  open?: boolean
  onClose?: () => void
}
