import Button from '../Button'
import Icon from '../ButtonIcon'
import Text from '../ButtonText'

export type ButtonComponents = typeof Button & {
  Icon: typeof Icon
  Text: typeof Text
  componentName: string
}
