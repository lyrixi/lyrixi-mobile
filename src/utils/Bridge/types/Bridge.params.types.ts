import type {
  BridgeChooseMediaResultData,
  BridgeDetectFaceResultData,
  BridgeGetLocationResultData,
  BridgeScanCodeResultData,
  BridgeSuccessResult,
  BridgeCancelCallback,
  BridgeErrorCallback,
  BridgeSuccessCallback
} from './Bridge.callbacks.types'

/** {@link Bridge.load} */
export type BridgeLoadParams = {
  getScriptSrc?: (ctx: { platform: string }) => string | undefined
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}

/** {@link Bridge.config}（各端实现签名不一，回调放宽为 unknown 以兼容 App/initBridge 等调用） */
export type BridgeConfigParams = {
  getConfigUrl?: (ctx: { platform: string }) => Promise<string> | string
  formatHeaders?: (headers: Record<string, string>, ctx: { platform: string }) => unknown
  formatPayload?: (payload: Record<string, unknown>, ctx: { platform: string }) => unknown
  formatResponse?: (response: unknown, ctx: { platform: string }) => unknown
  onSuccess?: (result: unknown) => void
  onError?: (result: unknown) => void
} & Record<string, unknown>

/** {@link Bridge.closeWindow} */
export type BridgeCloseWindowParams = {
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}

/** {@link Bridge.onBack} */
export type BridgeOnBackParams = {
  /** 返回 `true` / `undefined` 等表示允许返回；返回 `false` 表示拦截返回 */
  onSuccess?: (r: BridgeSuccessResult<undefined>) => boolean | void | Promise<boolean | void>
  onError?: BridgeErrorCallback
}

/** {@link Bridge.setTitle} */
export type BridgeSetTitleParams = {
  title?: string
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}

/** {@link Bridge.openWindow} */
export type BridgeOpenWindowParams = {
  url?: string
  title?: string
  target?: string
}

/** {@link Bridge.goHome} */
export type BridgeGoHomeParams = {
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}

/** {@link Bridge.tel} */
export type BridgeTelParams = {
  number?: string | number
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}

/** {@link Bridge.openLocation} */
export type BridgeOpenLocationParams = {
  latitude?: number
  longitude?: number
  type?: string
  name?: string
  address?: string
  scale?: number
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}

/** {@link Bridge.getLocation} */
export type BridgeGetLocationParams = {
  type?: string
  onSuccess?: BridgeSuccessCallback<BridgeGetLocationResultData>
  onError?: BridgeErrorCallback
  onCancel?: BridgeCancelCallback
}

/** {@link Bridge.getBrowserLocation} */
export type BridgeGetBrowserLocationParams = {
  type?: string
  onSuccess?: BridgeSuccessCallback<BridgeGetLocationResultData>
  onError?: BridgeErrorCallback
}

/** {@link Bridge.scanCode} */
export type BridgeScanCodeParams = {
  scanType?: string[]
  onSuccess?: BridgeSuccessCallback<BridgeScanCodeResultData>
  onError?: BridgeErrorCallback
  onCancel?: BridgeCancelCallback
}

/** {@link Bridge.chooseMedia} */
export type BridgeChooseMediaParams = {
  count?: number
  sizeType?: string[]
  sourceType?: string[]
  mediaType?: string[]
  maxDuration?: number
  onSuccess?: BridgeSuccessCallback<BridgeChooseMediaResultData>
  onError?: BridgeErrorCallback
  onCancel?: BridgeCancelCallback
}

/** {@link Bridge.uploadFile} 本地文件描述（各端字段略有差异，允许扩展） */
export type BridgeUploadLocalFile = {
  path?: string
  filePath?: string
  fileType?: string
} & Record<string, unknown>

/**
 * {@link Bridge.uploadFile}
 * 各平台 / 业务层入参差异大（如 MediaUploader 的 getUploadUrl 会带 uploadItem），
 * 格式化回调在类型上记为 `unknown`，避免与各端逆变签名冲突；具体形态见 `Bridge.uploadFile` JSDoc。
 */
export type BridgeUploadFileParams = {
  localFile?: BridgeUploadLocalFile | unknown
  /** `(ctx) => url`，ctx 因业务扩展（如含 uploadItem） */
  getUploadUrl?: unknown
  formatHeaders?: unknown
  formatPayload?: unknown
  formatResponse?: unknown
  onSuccess?: BridgeSuccessCallback<Record<string, unknown>> | ((res: unknown) => void)
  onError?: BridgeErrorCallback | ((err: unknown) => void)
  onCancel?: BridgeCancelCallback | ((res: unknown) => void)
  /** Demo/历史：直传上传地址等 */
  url?: string
  headers?: Record<string, unknown>
  data?: Record<string, unknown>
} & Record<string, unknown>

/** {@link Bridge.previewMedia} 单条资源 */
export type BridgePreviewMediaSource = {
  fileUrl?: string
  fileType?: string
  poster?: string
} & Record<string, unknown>

/** {@link Bridge.previewMedia} */
export type BridgePreviewMediaParams = {
  index?: number
  sources?: BridgePreviewMediaSource[]
  /** 部分客户端入参：当前预览 URL */
  current?: string
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
  onCancel?: BridgeCancelCallback
} & Record<string, unknown>

/** {@link Bridge.previewFile} */
export type BridgePreviewFileParams = {
  fileUrl?: string
  /** 兼容旧写法，同 fileUrl */
  url?: string
  fileName?: string
  fileSize?: number
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}

/** {@link Bridge.share} */
export type BridgeShareParams = {
  platforms?: string[]
  title?: string
  description?: string
  url?: string
  imageUrl?: string
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}

/** {@link Bridge.detectFace} */
export type BridgeDetectFaceParams = {
  getConfig?: (ctx: {
    platform: string
  }) => Promise<Record<string, unknown>> | Record<string, unknown>
  onSuccess?: BridgeSuccessCallback<BridgeDetectFaceResultData>
  onError?: BridgeErrorCallback
}
