import type { CSSProperties, MouseEvent, ReactNode } from 'react'

/** Modal / Combo 列表项数据 */
export interface ActionSheetItem {
  id: string | number
  name: ReactNode
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export interface ActionSheetModalProps {
  value?: ActionSheetItem | null
  list?: ActionSheetItem[]
  open?: boolean
  maskClosable?: boolean
  allowClear?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  groupStyle?: CSSProperties
  groupClassName?: string
  portal?: boolean | HTMLElement
  title?: ReactNode
  cancelNode?: ReactNode
  cancelVisible?: boolean
  itemRender?: (
    item: ActionSheetItem,
    helpers: { onChange: (item: ActionSheetItem) => void }
  ) => ReactNode
  onChange?: (value: ActionSheetItem | null) => void
  onCancel?: () => void
  onClose?: () => void
}
