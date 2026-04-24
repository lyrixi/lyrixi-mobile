/**
 * 类型声明供 TS 使用（实现见 instance.js，来自 d-project QR 库，运行时无类型）
 */
export interface QROption {
  text: string
  width?: number
  height?: number
  colorDark?: string
  colorLight?: string
  correctLevel?: number
  [key: string]: unknown
}

export default class QRLib {
  static CorrectLevel: { L: number; M: number; Q: number; H: number }
  _htOption: QROption & { width?: number; height?: number; colorDark?: string; colorLight?: string }
  constructor(
    el: Element | null,
    options: {
      text: string
      width?: number
      height?: number
      colorDark?: string
      colorLight?: string
      correctLevel?: number
    }
  )
  makeCode(text: string): void
  clear(): void
}
