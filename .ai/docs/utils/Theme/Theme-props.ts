/**
 * Theme API（AI 文档，生成代码时以此为准）
 */

export namespace Theme {
  /** 将 hex 颜色转为 rgb 字符串 */
  export function hexToRgb(...args: unknown[]): unknown

  /** 设置全局字体尺寸档位，可选 `'m'` | `'l'` | `'xl'` */
  export function setFontSize(fontSize: 'm' | 'l' | 'xl' | string): void
}
