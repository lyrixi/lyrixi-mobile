import type { CSSProperties, ReactNode } from 'react'

import type { ActionSheetComboProps } from '../../ActionSheet/types'

export interface ToolBarActionSheetStyleProps {
  // Value & Display Value
  direction?: string
  block?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
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
