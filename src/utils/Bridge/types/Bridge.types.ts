/**
 * Bridge 类型唯一出口：业务与其它模块请从此文件引入类型（适配层 `BridgeSuccessResult` / 入参等）。
 */

import type {
  BridgeChooseMediaParams,
  BridgeCloseWindowParams,
  BridgeConfigParams,
  BridgeDetectFaceParams,
  BridgeGetPhoneNumberParams,
  BridgeGetBrowserLocationParams,
  BridgeGetLocationParams,
  BridgeLoadParams,
  BridgeOnHistoryBackParams,
  BridgeOpenLocationParams,
  BridgeOpenWindowParams,
  BridgePreviewFileParams,
  BridgePreviewMediaParams,
  BridgeScanCodeParams,
  BridgeSetTitleParams,
  BridgeShareParams,
  BridgeTelParams,
  BridgeUploadFileParams
} from './Bridge.params.types'

/**
 * `_getCurrentBridge` Bridge实例类型
 */
export interface BridgeAdapter {
  load: (params?: BridgeLoadParams) => void
  config: (params?: BridgeConfigParams) => void | Promise<void>
  back: (delta?: number) => void
  closeWindow: (params?: BridgeCloseWindowParams) => void
  onHistoryBack: (params?: BridgeOnHistoryBackParams) => void
  setTitle?: (params?: BridgeSetTitleParams) => void
  openWindow?: (params?: BridgeOpenWindowParams) => void
  tel?: (params?: BridgeTelParams) => void
  openLocation: (params?: BridgeOpenLocationParams) => void
  getLocation: (params?: BridgeGetLocationParams) => void
  getBrowserLocation?: (params?: BridgeGetBrowserLocationParams) => void
  scanCode?: (params?: BridgeScanCodeParams) => void
  chooseMedia?: (params?: BridgeChooseMediaParams) => void
  uploadFile?: (params?: BridgeUploadFileParams) => void
  previewMedia: (params?: BridgePreviewMediaParams) => void
  previewFile?: (params?: BridgePreviewFileParams) => void
  share?: (params?: BridgeShareParams) => void
  detectFace?: (params?: BridgeDetectFaceParams) => void
  getPhoneNumber?: (params?: BridgeGetPhoneNumberParams) => void
}
