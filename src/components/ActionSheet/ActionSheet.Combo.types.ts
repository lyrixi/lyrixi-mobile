import type { CSSProperties, ReactNode, RefObject } from 'react'

import type { ComboRef } from './../Combo/types'

import type { ActionSheetItem } from './ActionSheet.Modal.types'

export interface ActionSheetComboHandle {
  close: () => void
  open: () => void
}

export interface ActionSheetComboProps {
  value?: ActionSheetItem | null
  placeholder?: string
  formatter?: (...args: unknown[]) => string
  autoSize?: boolean
  separator?: string
  mode?: string
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  style?: CSSProperties
  className?: string
  comboRender?: (props: {
    comboRef: RefObject<ComboRef | null>
    open: boolean
    onClick: () => void
  }) => ReactNode
  children?: ReactNode
  leftIconNode?: ReactNode
  rightIconNode?: ReactNode
  clearRender?: () => ReactNode
  list?: ActionSheetItem[]
  maskClosable?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: boolean | HTMLElement
  title?: ReactNode
  cancelNode?: ReactNode
  cancelVisible?: boolean
  itemRender?: (
    item: ActionSheetItem,
    helpers: { onChange: (item: ActionSheetItem) => void }
  ) => ReactNode
  onBeforeOpen?: () => Promise<boolean | void>
  onOpen?: () => void
  onClose?: () => void
  onClick?: () => void
  onChange?: (value: ActionSheetItem | null) => void
}
