import type { CSSProperties, ReactNode } from 'react'

import type { ActionSheetComboProps } from '../../ActionSheet/types'
import type { ButtonProps } from '../../Button/types'

export interface ToolBarActionSheetStyleProps {
  // Value & Display Value
  direction?: string
  block?: boolean
  color?: ButtonProps['color']
  variant?: ButtonProps['variant']
  size?: string | number | readonly string[]
  sizeEqual?: boolean
  radius?: string | number
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  arrowRender?: (props: { open: boolean | null }) => ReactNode
}

export type ToolBarActionSheetProps = ActionSheetComboProps & ToolBarActionSheetStyleProps

export type ToolBarActionSheetComboRenderParams = Parameters<
  NonNullable<ToolBarActionSheetProps['comboRender']>
>[0]
