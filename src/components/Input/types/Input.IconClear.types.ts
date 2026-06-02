import type { IconProps } from '../../Icon/types'

export interface InputIconClearProps extends Omit<IconProps, 'className' | 'svg'> {
  svg?: IconProps['svg']
  iconClassName?: string
}
