import { ButtonColor } from './types/Button.Color.types'
import { ButtonVariant } from './types/Button.Variant.types'

export interface ResolvedButtonStyle {
  textColor: string
  backgroundColor: string
  borderColor: string
  border: 'none' | 'solid' | 'dashed'
}

function themeLightenBg(color: `${ButtonColor}`): string {
  return `${color}-lighten`
}

export default function resolveVariantStyle(
  variant: `${ButtonVariant}`,
  color: `${ButtonColor}`
): ResolvedButtonStyle {
  if (color === ButtonColor.default) {
    switch (variant) {
      case ButtonVariant.solid:
        return {
          textColor: 'default',
          backgroundColor: 'white',
          borderColor: 'default',
          border: 'solid'
        }
      case ButtonVariant.text:
        return {
          textColor: 'default',
          backgroundColor: 'transparent',
          borderColor: 'default',
          border: 'none'
        }
      case ButtonVariant.outlined:
        return {
          textColor: 'default',
          backgroundColor: 'transparent',
          borderColor: 'default',
          border: 'solid'
        }
      case ButtonVariant.filled:
        return {
          textColor: 'default',
          backgroundColor: 'default',
          borderColor: 'default',
          border: 'none'
        }
      case ButtonVariant.dashed:
        return {
          textColor: 'default',
          backgroundColor: 'default',
          borderColor: 'default',
          border: 'dashed'
        }
      default:
        return {
          textColor: 'default',
          backgroundColor: 'white',
          borderColor: 'default',
          border: 'solid'
        }
    }
  }

  switch (variant) {
    case ButtonVariant.filled:
      return {
        textColor: 'white',
        backgroundColor: color,
        borderColor: color,
        border: 'solid'
      }
    case ButtonVariant.solid:
      return {
        textColor: color,
        backgroundColor: themeLightenBg(color),
        borderColor: color,
        border: 'none'
      }
    case ButtonVariant.text:
      return {
        textColor: color,
        backgroundColor: 'transparent',
        borderColor: color,
        border: 'none'
      }
    case ButtonVariant.outlined:
      return {
        textColor: color,
        backgroundColor: 'transparent',
        borderColor: color,
        border: 'solid'
      }
    case ButtonVariant.dashed:
      return {
        textColor: color,
        backgroundColor: themeLightenBg(color),
        borderColor: color,
        border: 'dashed'
      }
    default:
      return {
        textColor: color,
        backgroundColor: 'transparent',
        borderColor: color,
        border: 'none'
      }
  }
}
