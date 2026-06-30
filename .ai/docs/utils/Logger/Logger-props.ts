/**
 * Logger API（AI 文档，生成代码时以此为准）
 */

export namespace Logger {
  /** 初始化日志功能，覆盖 console.info；可选配置 Storage types */
  export function config(options?: { types?: string[] }): boolean

  /** 写入日志 */
  export function setLogs(...args: unknown[]): unknown

  /** 读取日志 */
  export function getLogs(...args: unknown[]): unknown

  /** 清除日志 */
  export function clearLogs(...args: unknown[]): unknown

  /** 上报日志到服务器 */
  export function uploadLogs(...args: unknown[]): unknown
}
