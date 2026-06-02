import type { CSSProperties } from 'react'

import type { SelectListProps } from './Select.common.types'

export interface SelectMainProps extends SelectListProps {
  className?: string
  style?: CSSProperties
}

export interface SelectMainRef {
  mainElement: HTMLDivElement | null
  getMainElement: () => HTMLDivElement | null
}
