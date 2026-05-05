import type { CSSProperties, ReactNode } from 'react'

export interface ResultProps {
  status: string
  title?: string | null | ReactNode
  description?: ReactNode
  full?: boolean
  style?: CSSProperties
  className?: string
  imageRender?: (() => ReactNode) | null
  imageUrl?: string | null
  children?: ReactNode
}
