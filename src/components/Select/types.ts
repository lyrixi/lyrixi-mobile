import type { CSSProperties, ReactNode } from 'react'
import type { InputSelectComboProps } from './../Input/Select'
import type { ListProps } from './../List/List/index'

/** Select 弹层与列表相关（与 Modal 内 Main 一致） */
export interface SelectModalFieldProps {
  list?: unknown[]
  formatViewList?: ListProps['formatViewList']
  formatViewItem?: ListProps['formatViewItem']
  maskClosable?: boolean
  safeArea?: boolean
  multiple?: boolean
  checkable?: boolean
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
}

export type SelectComboProps = InputSelectComboProps & SelectModalFieldProps

/** Select.Modal 根组件 props */
export interface SelectModalRootProps extends SelectModalFieldProps {
  value?: unknown
  open?: boolean
  onChange?: (value: unknown) => void
  onClose?: () => void
}

/** Select.Main props：列表区 + 外层容器 */
export type SelectMainProps = {
  className?: string
  style?: CSSProperties
} & Pick<
  ListProps,
  | 'value'
  | 'list'
  | 'formatViewList'
  | 'formatViewItem'
  | 'multiple'
  | 'checkable'
  | 'itemStyle'
  | 'itemClassName'
  | 'itemLayout'
  | 'checkboxVariant'
  | 'checkboxPosition'
  | 'itemRender'
  | 'onChange'
>

export interface SelectMainRef {
  mainElement: HTMLDivElement | null
  getMainElement: () => HTMLDivElement | null
}
