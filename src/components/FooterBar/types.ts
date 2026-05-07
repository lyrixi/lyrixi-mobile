import type { CSSProperties, ReactNode } from 'react'

import type { ButtonProps } from './../Button/types'
import type { ActionSheetItem } from './../ActionSheet/types'

export interface FooterBarRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface FooterBarProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export interface FooterBarButtonRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface FooterBarButtonProps extends Omit<ButtonProps, 'onClick'> {
  list?: ActionSheetItem[]
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: boolean | HTMLElement
  onClick?: ButtonProps['onClick']
}
