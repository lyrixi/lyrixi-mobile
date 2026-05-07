import type { CSSProperties, ReactNode } from 'react'

import type { ActionSheetComboProps } from './../../ActionSheet/types'

export interface ToolBarActionSheetStyleProps {
  direction?: string
  block?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
  size?: string | number | readonly string[]
  sizeEqual?: boolean
  radius?: string | number
  style?: CSSProperties
  className?: string
  arrowRender?: (props: { open: boolean | null }) => ReactNode
}

export type ToolBarActionSheetProps = ActionSheetComboProps & ToolBarActionSheetStyleProps
