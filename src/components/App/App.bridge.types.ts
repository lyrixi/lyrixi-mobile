export interface AppBridgeResultPayload {
  message?: string
}

export interface AppInitBridgeConfig {
  getScriptSrc?: () => string
  getConfigUrl?: () => string
  formatHeaders?: (...args: unknown[]) => unknown
  formatPayload?: (...args: unknown[]) => unknown
  formatResponse?: (...args: unknown[]) => unknown
}

export interface AppInitBridgeResult {
  status: 'success' | 'error'
  message: string | undefined
}
