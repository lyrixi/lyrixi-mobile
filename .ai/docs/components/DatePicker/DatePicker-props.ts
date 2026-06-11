/**
 * DatePicker Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { ComponentType, CSSProperties, ReactNode, RefObject, SVGProps } from 'react'
import type { DatePickerPickerType, DatePickerRangesMap, DatePickerRangeChangeMeta } from './DatePicker-item-types'

export interface DatePickerComboProps {
  /** 选中的值 */
  value?: Date | null
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: Date | null | undefined, options?: { separator?: string }) => string
  /** 自动调整大小 */
  autoSize?: boolean
  /** 分隔符 */
  separator?: string
  /** 模式 */
  mode?: string
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 自定义组合触发区域渲染 */
  comboRender?: (params: {
    comboRef: RefObject<unknown>
    open: boolean
    onClick: () => void
  }) => ReactNode
  /** 子元素 */
  children?: ReactNode
  /** 左侧图标渲染 */
  leftIconRender?: () => ReactNode
  /** 左侧图标 SVG 组件 */
  leftIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 右侧图标渲染 */
  rightIconRender?: () => ReactNode
  /** 右侧图标 SVG 组件 */
  rightIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 清除按钮渲染 */
  clearRender?: () => ReactNode
  /** 日期类型，默认 `'date'` */
  type?: DatePickerPickerType
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 小时步长 */
  hourStep?: number
  /** 分钟步长 */
  minuteStep?: number
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 标题渲染 */
  titleRender?: (
    value: Date | null | undefined,
    options: { type?: DatePickerPickerType }
  ) => ReactNode
  /** 确认按钮 */
  okNode?: ReactNode
  /** 取消按钮 */
  cancelNode?: ReactNode
  /** 确认按钮可见 */
  okVisible?: boolean
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 打开前事件 */
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  /** 变化事件 */
  onChange?: (value: Date | null | undefined, meta?: unknown) => void
  /** 确认事件 */
  onOk?: (value: Date | null | undefined) => boolean | Date | void | Promise<boolean | Date | void>
}

export interface DatePickerModalProps {
  /** 选中的值 */
  value?: Date | null
  /** 日期类型，默认 `'date'` */
  type?: DatePickerPickerType
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 小时步长 */
  hourStep?: number
  /** 分钟步长 */
  minuteStep?: number
  /** 是否显示 */
  open?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 标题渲染 */
  titleRender?: (
    value: Date | null | undefined,
    options: { type?: DatePickerPickerType }
  ) => ReactNode
  /** 确认按钮 */
  okNode?: ReactNode
  /** 取消按钮 */
  cancelNode?: ReactNode
  /** 确认按钮可见 */
  okVisible?: boolean
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 关闭事件 */
  onClose?: () => void
  /** 变化事件 */
  onChange?: (value: Date | null) => void
  /** 确认事件 */
  onOk?: (value: Date | null | undefined) => boolean | Date | void | Promise<boolean | Date | void>
}

export interface DatePickerMainProps {
  /** 选中的值 */
  value?: Date | null
  /** 日期类型 */
  type?: DatePickerPickerType
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 小时步长 */
  hourStep?: number
  /** 分钟步长 */
  minuteStep?: number
  /** 周起始日 */
  weekStart?: string
  /** 是否显示 */
  open?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 变化事件 */
  onChange?: (value: Date | null) => void
}

export interface DatePickerTypeSwitcherValue {
  type: string
  id?: string
  name?: ReactNode
  value?: Date
  [key: string]: unknown
}

export interface DatePickerTypeSwitcherProps {
  /** 当前选中项（带具体日期） */
  value?: DatePickerTypeSwitcherValue
  /** 类型列表 */
  types?: DatePickerTypeSwitcherValue[]
  /** 切换方式 */
  variant?: 'tabbar' | 'dropdown'
  /** 下拉挂载节点 */
  dropdownPortal?: HTMLElement
  /** 下拉左侧偏移 */
  dropdownLeft?: string | number
  /** 下拉右侧偏移 */
  dropdownRight?: string | number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 选择器组合样式 */
  pickerComboStyle?: CSSProperties
  /** 选择器组合类名 */
  pickerComboClassName?: string
  /** Tab 栏样式 */
  tabbarStyle?: CSSProperties
  /** Tab 栏类名 */
  tabbarClassName?: string
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 选择器组合渲染 */
  pickerComboRender?: (
    value: DatePickerTypeSwitcherValue,
    ctx: { onChange: (d: Date) => void }
  ) => ReactNode
  /** 变化事件 */
  onChange?: (value: DatePickerTypeSwitcherValue) => void
}

export interface DatePickerRangeSelectorProps {
  /** 选中的值 */
  value?: (Date | null)[] | null
  /** 自动交换值，默认 `true` */
  autoSwapValue?: boolean
  /** 日期类型 */
  type?: string
  /** 当前选中的范围 */
  rangeId?: string | null
  /** 范围配置 */
  ranges?: DatePickerRangesMap
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 小时步长 */
  hourStep?: number
  /** 分钟步长 */
  minuteStep?: number
  /** 禁用开始日期 */
  startDisabled?: boolean
  /** 禁用结束日期 */
  endDisabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 挂载节点 */
  portal?: HTMLElement | null
  /** 变化事件 */
  onChange?: (value: (Date | null)[] | null, meta?: DatePickerRangeChangeMeta) => void
  /** 确认事件 */
  onOk?: (value: (Date | null)[] | null) => void
}

export interface DatePickerComboRef {
  /** 根元素 */
  element?: HTMLDivElement | null
  /** 获取根元素 */
  getElement?: () => HTMLDivElement | null
  /** 关闭选择器 */
  close?: () => void
  /** 打开选择器 */
  open?: () => void
}

export interface DatePickerTypeSwitcherRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
}