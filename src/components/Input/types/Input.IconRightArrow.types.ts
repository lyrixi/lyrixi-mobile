import type { IconProps } from '../../Icon/types'

export interface InputIconRightArrowProps extends Omit<IconProps, 'className' | 'svg'> {
  svg?: IconProps['svg']
  iconClassName?: string
}
