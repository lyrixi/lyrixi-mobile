/** 运行时代码挂载到 window 的扩展（Locale 等） */
export {}

/** 与 window.wx 对齐的宽松类型，避免为每个 API 维护完整签名 */
type WeixinJsSdk = {
  config?: (cfg: Record<string, unknown>) => void
  error?: (cb: (err: unknown) => void) => void
  ready?: (cb: () => void) => void
  invoke?: (name: string, data: Record<string, unknown>, cb: (res: Record<string, unknown>) => void) => void
  agentConfig?: (cfg: Record<string, unknown>) => void
  chooseImage?: (opts: Record<string, unknown>) => void
  uploadImage?: (opts: Record<string, unknown>) => void
  previewImage?: (opts: Record<string, unknown>) => void
  previewFile?: (opts: Record<string, unknown>) => void
  updateAppMessageShareData?: (opts: Record<string, unknown>) => void
  openLocation?: (opts: Record<string, unknown>) => void
  getLocation?: (opts: Record<string, unknown>) => void
  scanQRCode?: (opts: Record<string, unknown>) => void
  getLocalImgData?: (opts: Record<string, unknown>) => void
  closeWindow?: () => void
  onHistoryBack?: (cb: () => void) => void
  miniProgram?: { navigateBack: (opts: Record<string, unknown>) => void }
}

declare global {
  interface Window {
    lyrixiLocaleData?: Record<string, string>
    lyrixiLocaleLanguage?: string
    dayjsPlugin?: string[]
    _debug_?: unknown
    /** legacy IE */
    clipboardData?: { setData: (format: string, data: string) => void }
    /** legacy Firefox */
    netscape?: { security?: { PrivilegeManager?: { enablePrivilege: (cap: string) => void } } }
    /** 微信 / 企业微信 JSSDK（运行时注入，方法表随官方文档扩展） */
    wx?: WeixinJsSdk
    /** 飞书 JSSDK */
    tt?: {
      openLocation?: (opts: Record<string, unknown>) => void
      getLocation?: (opts: Record<string, unknown>) => void
      scanCode?: (opts: Record<string, unknown>) => void
      previewImage?: (opts: Record<string, unknown>) => void
      share?: (opts: Record<string, unknown>) => void
      closeWindow?: (opts: Record<string, unknown>) => void
    }
    h5sdk?: { config?: (cfg: Record<string, unknown>) => void }
    /** 支付宝 H5 JSSDK（运行时注入） */
    ap?: {
      popWindow?: () => void
      openLocation?: (opts: Record<string, unknown>) => void
      getLocation?: (opts: Record<string, unknown>) => void
      scan?: (opts: Record<string, unknown>) => void
    }
    /** 支付宝小程序 web-view 等 */
    my?: unknown
    /** 钉钉 JSSDK */
    dd?: {
      config?: (opts: Record<string, unknown>) => void
      error?: (cb: (err: { errorMessage?: string }) => void) => void
      ready?: (cb: () => void) => void
      env?: { platform?: string }
      quitPage?: (opts: Record<string, unknown>) => void
      setNavigationTitle?: (opts: Record<string, unknown>) => void
      closePage?: (opts: Record<string, unknown>) => void
      openLocation?: (opts: Record<string, unknown>) => void
      getLocation?: (opts: Record<string, unknown>) => void
      chooseImage?: (opts: Record<string, unknown>) => void
      uploadFile?: (opts: Record<string, unknown>) => void
      previewImage?: (opts: Record<string, unknown>) => void
      compressImage?: (opts: Record<string, unknown>) => void
      biz?: {
        util?: {
          scan?: (opts: Record<string, unknown>) => void
          share?: (opts: Record<string, unknown>) => void
        }
      }
    }
  }

  interface Navigator {
    browserLanguage?: string
  }
}
