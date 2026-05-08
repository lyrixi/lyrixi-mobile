import type { ReactNode } from 'react'

export interface StepsNodeProps {
  iconChildren?: ReactNode
  iconRender?: (params: { children: ReactNode; className: string; status?: string }) => ReactNode
  status?: string
  rail?: boolean
  title?: ReactNode
  description?: ReactNode
}
