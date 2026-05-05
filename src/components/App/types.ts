import type { ReactNode } from 'react'

export interface BridgeResultPayload {
  message?: string
}

export interface InitBridgeConfig {
  getScriptSrc?: () => string
  getConfigUrl?: () => string
  formatHeaders?: (...args: unknown[]) => unknown
  formatPayload?: (...args: unknown[]) => unknown
  formatResponse?: (...args: unknown[]) => unknown
}

export interface InitBridgeResult {
  status: 'success' | 'error'
  message: string | undefined
}

export interface MapConfig {
  type: 'bmap' | 'amap' | 'google'
  key: string
}

export interface ThemeConfig {
  fontSize?: 'm' | 'l' | 'xl'
}

export interface AppLoadResult {
  status: string
  message?: string
}

export interface AppProps {
  mapConfig?: MapConfig | null
  bridgeConfig?: InitBridgeConfig | null
  language?: string | null
  debugElement?: HTMLElement | null
  preload?: (() => Promise<AppLoadResult>) | null
  themeConfig?: ThemeConfig | null
  children?: ReactNode
}
