import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export type KeyboardAction = 'number' | 'dot' | 'minus' | 'delete'

export interface KeyboardButtonActionProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  className?: string
  children?: ReactNode
}

export interface KeyboardButtonNumberProps {
  onClick?: (value: ReactNode) => void
  className?: string
  children?: ReactNode
}

export interface KeyboardButtonQuickProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  className?: string
  children?: ReactNode
}

export interface KeyboardNumberRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface KeyboardNumberProps {
  safeArea?: boolean
  portal?: HTMLElement
  value?: string
  onChange?: (value: string, options: { action: KeyboardAction }) => void
  dot?: boolean
  minus?: boolean
  okNode?: ReactNode
  okVisible?: boolean
  cancelNode?: ReactNode
  cancelVisible?: boolean
  onOk?: (value: string) => Promise<boolean | undefined> | boolean | undefined
  onCancel?: () => void
  modalStyle?: CSSProperties
  modalClassName?: string
  open?: boolean
  onOpen?: () => void
  onClose?: () => void
}
