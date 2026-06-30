import type { CSSProperties, ReactNode } from 'react'

import type { ModalProps } from '../../Modal/types'

import type { ActionSheetItem } from './ActionSheet.common.types'

export interface ActionSheetModalProps {
  // Value & Display Value
  value?: ActionSheetItem | null
  list?: ActionSheetItem[]
  // Status
  open?: boolean
  maskClosable?: boolean
  allowClear?: boolean
  // Style
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  groupStyle?: CSSProperties
  groupClassName?: string
  // Elements
  portal?: ModalProps['portal']
  title?: ReactNode
  cancelNode?: ReactNode
  cancelVisible?: boolean
  itemRender?: (
    item: ActionSheetItem,
    options: { onChange: (item: ActionSheetItem) => void }
  ) => ReactNode
  // Events
  onChange?: (value: ActionSheetItem | null) => void
  onCancel?: () => void
  onClose?: () => void
}
