/** DatePicker 公共类型分片（由根目录 `types.ts` 聚合导出，见 ai/rules/lyrixi-develop-type-file.mdc） */
import type { CSSProperties, ReactNode, RefObject, ReactElement } from 'react'
import type { InputSelectComboProps } from '../Input/types'
import type { ModalRef } from '../Modal/types'

export type DatePickerPickerType = 'year' | 'quarter' | 'month' | 'date' | 'time' | 'datetime' | 'week'

/** 快捷区间：键为展示名，值为日期对或 0 表示“自定义”占位 */
export type DatePickerRangesMap = Record<string, [Date, Date] | 0 | unknown>

/** 多选 Tab 项（与 TabBar 项结构兼容） */
export interface DatePickerMultipleTab {
  id?: string | number
  name?: ReactNode
  description?: ReactNode
  value?: Date | null
  disabled?: boolean
  [key: string]: unknown
}

export type DatePickerMultipleValue = DatePickerMultipleTab[] | null

/** 多选 Main 区域 */
export interface DatePickerMultipleMainProps {
  open?: boolean
  value?: DatePickerMultipleValue
  type?: DatePickerPickerType | string
  allowClear?: boolean
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  separator?: string
  onChange?: (value: DatePickerMultipleValue) => void
}

export type DatePickerTabBarValue = { id?: string | number }

/** 区间 onChange 第二参（RangeCombo / RangeMain 等） */
export interface DatePickerRangeChangeMeta {
  rangeId?: string | null
  ranges?: DatePickerRangesMap
  displayValue?: string
}

/** 区间主内容区（含快捷 + 双列表） */
export interface DatePickerRangeMainProps {
  open?: boolean
  value?: (Date | null)[] | null
  rangeId?: string | null
  ranges?: DatePickerRangesMap
  type?: string
  rangesVisible?: boolean
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  startDisabled?: boolean
  endDisabled?: boolean
  allowClear?: boolean
  separator?: string
  titles?: { selector?: ReactNode; custom?: ReactNode }
  portal?: HTMLElement | null
  onChange?: (value: (Date | null)[] | null, meta?: DatePickerRangeChangeMeta) => void
  autoSwapValue?: boolean
}

/** 区间快捷 + 日期选择根组件 */
export interface DatePickerRangeSelectorRootProps {
  value?: (Date | null)[] | null
  autoSwapValue?: boolean
  type?: string
  rangeId?: string | null
  ranges?: DatePickerRangesMap
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  startDisabled?: boolean
  endDisabled?: boolean
  allowClear?: boolean
  style?: CSSProperties
  className?: string
  portal?: HTMLElement | null
  onChange?: (value: (Date | null)[] | null, meta?: DatePickerRangeChangeMeta) => void
  onOk?: (value: (Date | null)[] | null) => void
}

export interface DatePickerRangeSelectorPanelProps {
  className?: string
  style?: CSSProperties
  value?: (Date | null)[] | null
  allowClear?: boolean
  rangeId?: string | null
  ranges?: DatePickerRangesMap
  onChange?: (value: (Date | null)[] | null, meta?: DatePickerRangeChangeMeta) => void
}

export interface DatePickerRangePickerMainProps {
  open?: boolean
  value?: (Date | null)[] | null
  type?: string
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  startDisabled?: boolean
  endDisabled?: boolean
  allowClear?: boolean
  portal?: HTMLElement | null
  separator?: string
  onChange?: (value: (Date | null)[] | null) => void
}

/** 单日期 DatePicker 的 Combo + Modal 组合 props */
export interface DatePickerComboProps extends InputSelectComboProps {
  type?: DatePickerPickerType
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  maskClosable?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: HTMLElement | string | boolean | null
  titleRender?: (
    value: Date | null | undefined,
    options: { type?: DatePickerPickerType }
  ) => ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  okVisible?: boolean
  cancelVisible?: boolean
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  onOk?: (value: Date | null | undefined) => boolean | Date | void | Promise<boolean | Date | void>
  /** 自定义触发区域 */
  comboRender?: (params: {
    comboRef: RefObject<unknown>
    open: boolean
    onClick: () => void
  }) => ReactNode
  children?: ReactNode
}

/** DatePicker 内联 Picker 单列选项 */
export interface DatePickerPickerListItem {
  id: number
  /** LocaleUtil.locale 可能返回 string 或带占位节点 */
  name: number | string | ReactNode | ReactElement
}

export type DatePickerPickerValueList = DatePickerPickerListItem[]

export interface DatePickerMainSectionProps {
  open?: boolean
  value?: Date | null
  style?: CSSProperties
  className?: string
  type?: DatePickerPickerType
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  onChange?: (value: Date | null) => void
  /** 周选择器所需；非周类型可不传 */
  allowClear?: boolean
  weekStart?: string
}

/** 单日期弹层（NavBarModal + Main） */
export interface DatePickerModalProps {
  value?: Date | null
  type?: DatePickerPickerType
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  open?: boolean
  maskClosable?: boolean
  allowClear?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: DatePickerComboProps['portal']
  titleRender?: DatePickerComboProps['titleRender']
  okNode?: ReactNode
  cancelNode?: ReactNode
  okVisible?: boolean
  cancelVisible?: boolean
  onClose?: () => void
  onChange?: (value: Date | null) => void
  onOk?: DatePickerComboProps['onOk']
}

export type DatePickerModalRef = ModalRef & Record<string, unknown>

/** 多选日期弹层 */
export interface DatePickerMultipleModalProps
  extends Omit<DatePickerModalProps, 'onOk' | 'onChange' | 'value' | 'titleRender'> {
  separator?: string
  value?: DatePickerMultipleValue
  onChange?: (value: DatePickerMultipleValue) => void
  onOk?: (
    value: DatePickerMultipleValue
  ) => boolean | DatePickerMultipleValue | void | Promise<boolean | void | DatePickerMultipleValue>
  titleRender?: (
    value: DatePickerMultipleValue | undefined,
    options: { type?: DatePickerPickerType }
  ) => ReactNode
}

/** 周选择弹层（与单日期弹层一致，周类型由子组件处理） */
export type DatePickerWeekModalProps = DatePickerModalProps

/** 区间选择弹层 */
export interface DatePickerRangeModalProps
  extends Omit<DatePickerModalProps, 'onOk' | 'onChange' | 'value' | 'type' | 'titleRender'> {
  value?: (Date | null)[] | null
  type?: string
  autoSwapValue?: boolean
  rangeId?: string | null
  ranges?: DatePickerRangesMap
  rangesVisible?: boolean
  titles?: { selector?: ReactNode; custom?: ReactNode }
  startDisabled?: boolean
  endDisabled?: boolean
  separator?: string
  titleRender?: (
    value: (Date | null)[] | null | undefined,
    options: { type: string; separator?: string }
  ) => ReactNode
  onChange?: (value: (Date | null)[] | null, meta?: DatePickerRangeChangeMeta) => void
  onOk?: (
    value: (Date | null)[] | null
  ) => void | boolean | Date[] | Promise<void | boolean | Date[]>
}

/** getTitle 第二参 */
export interface DatePickerGetTitleOptions {
  type?: DatePickerPickerType | string
  separator?: string
}

/** Types 组件：多类型切换项 */
export interface DatePickerTypeListItem {
  type: string
  id?: string
  name?: ReactNode
  value?: Date
  [key: string]: unknown
}

/** Types 根组件：当前选中项带具体日期 */
export type DatePickerTypesValue = DatePickerTypeListItem & { value?: Date }

export type DatePickerTypesRef = {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

/** 多选日期 Combo（Value 为带 value 字段的 tab 列表） */
export interface DatePickerMultipleComboProps
  extends Omit<DatePickerComboProps, 'value' | 'onChange' | 'onOk' | 'titleRender'> {
  value?: DatePickerMultipleValue
  onChange?: (value: DatePickerMultipleValue, meta?: { action: string }) => void
  onOk?: (
    value: DatePickerMultipleValue
  ) => boolean | DatePickerMultipleValue | void | Promise<boolean | void | DatePickerMultipleValue>
  titleRender?: (
    value: DatePickerMultipleValue | undefined,
    options: { type?: DatePickerPickerType }
  ) => ReactNode
}

/** 区间日期 Combo = Combo 与 Range 弹层字段的合并 */
export type DatePickerRangeComboProps = Omit<
  DatePickerComboProps,
  'value' | 'onChange' | 'onOk' | 'titleRender'
> &
  Omit<
    DatePickerRangeModalProps,
    'open' | 'onClose' | 'value' | 'onChange' | 'onOk' | 'titleRender' | 'rangeId' | 'maskClosable' | 'allowClear'
  > & {
    value?: (Date | null)[] | null
    allowClear?: boolean
    maskClosable?: boolean
    onChange?: (value: (Date | null)[] | null, meta?: DatePickerRangeChangeMeta) => void
    onOk?: DatePickerRangeModalProps['onOk']
    titleRender?: DatePickerRangeModalProps['titleRender']
  }

/** 周选择 Combo，与单日期 Combo 相同 */
export type DatePickerWeekComboProps = DatePickerComboProps

/** WeekMain 日历区 */
export interface DatePickerWeekMainProps {
  open?: boolean
  value?: Date | null
  min?: Date | null
  max?: Date | null
  allowClear?: boolean
  weekStart?: string
  style?: CSSProperties
  className?: string
  onChange?: (value: Date | null) => void
}
