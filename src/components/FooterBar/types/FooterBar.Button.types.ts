import type { CSSProperties } from 'react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

import type { ButtonProps } from '../../Button/types'
import type { ModalProps } from '../../Modal/types'
import type { ActionSheetItem } from '../../ActionSheet/types'

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
  portal?: ModalProps['portal']
  onClick?: ButtonProps['onClick']
}

export type FooterBarButtonComponents = ForwardRefExoticComponent<
  FooterBarButtonProps & RefAttributes<FooterBarButtonRef>
> & { componentName: string }
