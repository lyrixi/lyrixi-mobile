import type { IconSVGElement } from '../Icon/types'

// 内库使用-start
import Icons from '../../icons'
// 内库使用-end

function getDefaultIconSvg(type: string): IconSVGElement | null {
  switch (type) {
    case 'success':
      return Icons.CircleOk
    case 'info':
      return Icons.CircleInfo
    case 'warning':
      return Icons.CircleWarning
    case 'error':
      return Icons.CircleClose
    default:
      return null
  }
}

export default getDefaultIconSvg
