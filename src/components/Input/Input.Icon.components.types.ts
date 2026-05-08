import type { IconProps } from '../Icon/types'

export interface InputIconClearProps extends Omit<IconProps, 'className'> {
  iconClassName?: string
}

export interface InputIconLeftArrowProps extends Omit<IconProps, 'className'> {
  iconClassName?: string
}

export interface InputIconRightArrowProps extends Omit<IconProps, 'className'> {
  padding?: number
  iconClassName?: string
}
