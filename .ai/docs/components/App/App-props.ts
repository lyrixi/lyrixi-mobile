/**
 * App Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface AppLoadResult {
  status: string
  message?: string
}

export interface AppProps {
  /** 地图配置，默认 `null` */
  mapConfig?: { type: 'bmap' | 'amap' | 'google'; key: string } | null
  /** 桥接配置，默认 `null` */
  bridgeConfig?: AppInitBridgeConfig | null
  /** 语言配置，默认 `null`，如 `'zh_CN' | 'en_US' | 'ja_JP'` */
  language?: string | null
  /** 调试触发元素，默认 `null`；点击 10 次唤醒 vconsole 调试面板 */
  debugElement?: HTMLElement | null
  /** 预加载函数，默认 `null`；返回 `{ status: 'success' | 'error'; message?: string }` */
  preload?: (() => Promise<AppLoadResult>) | null
  /** 主题配置，默认 `null` */
  themeConfig?: { fontSize: 'm' | 'l' | 'xl' } | null
  /** 应用内容 */
  children?: ReactNode
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

export interface AppMapConfig {
  type: 'bmap' | 'amap' | 'google'
  key: string
}

export interface AppThemeConfig {
  fontSize?: 'm' | 'l' | 'xl'
}
