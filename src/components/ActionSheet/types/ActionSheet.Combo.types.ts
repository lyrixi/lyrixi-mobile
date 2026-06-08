import type { ComponentType, CSSProperties, ReactNode, RefObject, SVGProps } from 'react'

import type { ComboRef } from '../../Combo/types'
import type { ModalProps } from '../../Modal/types'

import type { ActionSheetItem } from './ActionSheet.common.types'

export interface ActionSheetComboHandle {
  close: () => void
  open: () => void
}

export interface ActionSheetComboProps {
  // Combo: Value & Display Value
  value?: ActionSheetItem | null
  placeholder?: string
  formatter?: (...args: unknown[]) => string
  autoSize?: boolean
  separator?: string
  mode?: string
  // Combo: Status
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  // Combo: Style
  style?: CSSProperties
  className?: string
  // Combo: Elements
  comboRender?: (props: {
    comboRef: RefObject<ComboRef | null>
    open: boolean
    onClick: () => void
  }) => ReactNode
  children?: ReactNode
  leftIconRender?: ReactNode
  leftIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  rightIconRender?: ReactNode
  rightIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  clearRender?: () => ReactNode
  // Modal: Value & Display Value
  list?: ActionSheetItem[]
  // Modal: Status
  maskClosable?: boolean
  // Modal: Style
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  // Modal: Elements
  portal?: ModalProps['portal']
  title?: ReactNode
  cancelNode?: ReactNode
  cancelVisible?: boolean
  itemRender?: (
    item: ActionSheetItem,
    helpers: { onChange: (item: ActionSheetItem) => void }
  ) => ReactNode
  // Events
  onBeforeOpen?: () => Promise<boolean | void>
  onOpen?: () => void
  onClose?: () => void
  onClick?: () => void
  onChange?: (value: ActionSheetItem | null) => void
}
