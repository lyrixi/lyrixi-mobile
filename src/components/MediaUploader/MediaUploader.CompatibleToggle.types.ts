import type { ReactNode } from 'react'

export interface MediaUploaderCompatibleToggleListItem {
  id: string
  name: ReactNode
}

export interface MediaUploaderCompatibleToggleProps {
  compatible?: boolean | string
  compatiblePlatform?: string
  onCompatiblePlatformChange?: (platform: string) => void
}
