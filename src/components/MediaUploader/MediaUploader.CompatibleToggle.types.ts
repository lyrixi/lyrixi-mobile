import type { ReactNode } from 'react'

export interface CompatibleToggleListItem {
  id: string
  name: ReactNode
}

export interface CompatibleToggleProps {
  compatible?: boolean | string
  compatiblePlatform?: string
  onCompatiblePlatformChange?: (platform: string) => void
}
