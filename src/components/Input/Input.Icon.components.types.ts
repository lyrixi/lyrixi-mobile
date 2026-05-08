import type { IconProps } from '../Icon/types'

export interface IconClearProps extends Omit<IconProps, 'className'> {
  iconClassName?: string
}

export interface IconLeftArrowProps extends Omit<IconProps, 'className'> {
  iconClassName?: string
}

export interface IconRightArrowProps extends Omit<IconProps, 'className'> {
  padding?: number
  iconClassName?: string
}
