import type { IconProps } from '../../Icon/types'

export interface InputIconLeftArrowProps extends Omit<IconProps, 'className' | 'svg'> {
  svg?: IconProps['svg']
  iconClassName?: string
}
