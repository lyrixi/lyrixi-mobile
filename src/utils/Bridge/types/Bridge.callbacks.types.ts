/** openLocation 坐标入参（Bridge 内格式化用） */
export interface BridgeOpenLocationCoord {
  longitude: number
  latitude: number
  type: string
  isInChina?: boolean
  [key: string]: unknown
}

// --- 适配层成功结果：`BridgeSuccessResult<T>` 中的 `data`（各桥一致，以 WeChat 为典型）---

/** {@link Bridge.getLocation} 成功时 `data` */
export type BridgeGetLocationResultData = {
  longitude: number
  latitude: number
  type: string
  accuracy?: number
}

/** {@link Bridge.scanCode} 成功时 `data` */
export type BridgeScanCodeResultData = {
  content: string
}

/** {@link Bridge.chooseMedia} 单条本地媒体（微信 chooseImage 映射后的项） */
export type BridgeChooseMediaLocalFile = {
  fileThumbnail?: string
  fileUrl?: string
  filePath?: string
  fileType?: string
} & Record<string, unknown>

/** {@link Bridge.chooseMedia} 成功时 `data` */
export type BridgeChooseMediaResultData = {
  localFiles: BridgeChooseMediaLocalFile[]
}

/** {@link Bridge.detectFace} 成功时 `data` */
export type BridgeDetectFaceResultData = {
  match: boolean
  confidence: number | undefined
}

/** {@link Bridge.getPhoneNumber} 成功时 `data` */
export type BridgeGetPhoneNumberResultData = {
  code: string
  phoneNumber: string
}

/** 成功结果固定形状；无业务载荷时 `T` 为 `undefined`，`data` 为 `undefined`。 */
export type BridgeSuccessResult<T = undefined> = {
  status: 'success'
  code?: string
  message?: string
  data: T
}

/** 失败：固定结构 */
export type BridgeErrorResult = {
  status: 'error'
  code?: string
  message?: string
}

/** 取消：固定结构 */
export type BridgeCancelResult = {
  status: 'cancel'
  code?: string
  message?: string
}

export type BridgeSuccessCallback<T = undefined> = (result: BridgeSuccessResult<T>) => void

export type BridgeErrorCallback = (result: BridgeErrorResult) => void

export type BridgeCancelCallback = (result: BridgeCancelResult) => void
