/** 运行时代码挂载到 window 的扩展（Locale 等） */
export {}

declare global {
  interface Window {
    lyrixiLocaleData?: Record<string, unknown>
    lyrixiLocaleLanguage?: string
    dayjsPlugin?: unknown
    _debug_?: unknown
  }

  interface Navigator {
    browserLanguage?: string
  }
}
