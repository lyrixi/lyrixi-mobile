/** Lyrixi JSSDK 成功回调中的定位结果 */
export type BridgeLyrixiGetLocationSuccessResponse = {
  longitude?: number
  latitude?: number
  type?: string
  accuracy?: number
  speed?: number
  [key: string]: unknown
}

/** Lyrixi JSSDK 扫码成功回调 */
export type BridgeLyrixiScanCodeSuccessResponse = {
  content?: string
  resultStr?: string
  [key: string]: unknown
}

/** Lyrixi JSSDK 选择媒体成功回调 */
export type BridgeLyrixiChooseMediaSuccessResponse = {
  localFiles?: Array<{
    fileUrl?: string
    filePath?: string
    fileType?: string
    fileThumbnail?: string
    [key: string]: unknown
  }>
  [key: string]: unknown
}

/** Lyrixi JSSDK 获取手机号成功回调 */
export type BridgeLyrixiGetPhoneNumberSuccessResponse = {
  code?: string
  phoneNumber?: string
  [key: string]: unknown
}

/** Lyrixi JSSDK 人脸识别成功回调 */
export type BridgeLyrixiDetectFaceSuccessResponse = {
  match?: boolean
  confidence?: number
  [key: string]: unknown
}
