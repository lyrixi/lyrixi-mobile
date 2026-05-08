import type { ReactNode } from 'react'

import type { AppInitBridgeConfig } from './App.bridge.types'
import type { AppMapConfig, AppThemeConfig } from './App.config.types'

export interface AppLoadResult {
  status: string
  message?: string
}

export interface AppProps {
  mapConfig?: AppMapConfig | null
  bridgeConfig?: AppInitBridgeConfig | null
  language?: string | null
  debugElement?: HTMLElement | null
  preload?: (() => Promise<AppLoadResult>) | null
  themeConfig?: AppThemeConfig | null
  children?: ReactNode
}
