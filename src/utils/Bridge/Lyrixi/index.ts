import back from './../utils/back'

import type {
  BridgeChooseMediaParams,
  BridgeCloseWindowParams,
  BridgeConfigParams,
  BridgeDetectFaceParams,
  BridgeGetLocationParams,
  BridgeGetPhoneNumberParams,
  BridgeLoadParams,
  BridgeOnHistoryBackParams,
  BridgeOpenLocationParams,
  BridgeOpenWindowParams,
  BridgePreviewFileParams,
  BridgePreviewMediaParams,
  BridgeScanCodeParams,
  BridgeSetTitleParams,
  BridgeShareParams,
  BridgeUploadFileParams
} from '../types'

function getLyrixi() {
  return (window.top ?? window).lyrixi
}

function whenLyrixiReady(fn: () => void) {
  const lyrixi = getLyrixi()
  if (lyrixi) {
    if (lyrixi.ready) {
      lyrixi.ready(fn)
    } else {
      fn()
    }
    return
  }
  const timer = window.setInterval(() => {
    const sdk = getLyrixi()
    if (sdk) {
      window.clearInterval(timer)
      if (sdk.ready) {
        sdk.ready(fn)
      } else {
        fn()
      }
    }
  }, 100)
}

let Bridge = {
  load: function (params?: BridgeLoadParams) {
    const { onSuccess } = params || {}
    whenLyrixiReady(() => {
      onSuccess?.({ status: 'success', data: undefined })
    })
  },
  config: function (params?: BridgeConfigParams) {
    const { onSuccess } = params || {}
    whenLyrixiReady(() => {
      onSuccess?.({ status: 'success', data: undefined })
    })
  },
  back: function (delta?: number) {
    back(delta, { closeWindow: this.closeWindow })
  },
  closeWindow: function (params?: BridgeCloseWindowParams) {
    getLyrixi()?.closeWindow?.(params)
  },
  onHistoryBack: function (params?: BridgeOnHistoryBackParams) {
    getLyrixi()?.onHistoryBack?.(params)
  },
  setTitle: function (params?: BridgeSetTitleParams) {
    getLyrixi()?.setTitle?.(params)
  },
  openWindow: function (params?: BridgeOpenWindowParams) {
    getLyrixi()?.openWindow?.(params)
  },
  openLocation: function (params?: BridgeOpenLocationParams) {
    getLyrixi()?.openLocation?.(params)
  },
  getLocation: function (params?: BridgeGetLocationParams) {
    getLyrixi()?.getLocation?.(params)
  },
  scanCode: function (params?: BridgeScanCodeParams) {
    getLyrixi()?.scanCode?.(params)
  },
  chooseMedia: function (params?: BridgeChooseMediaParams) {
    getLyrixi()?.chooseMedia?.(params)
  },
  uploadFile: function (params?: BridgeUploadFileParams) {
    getLyrixi()?.uploadFile?.(params)
  },
  previewMedia: function (params?: BridgePreviewMediaParams) {
    getLyrixi()?.previewMedia?.(params)
  },
  previewFile: function (params?: BridgePreviewFileParams) {
    getLyrixi()?.previewFile?.(params)
  },
  share: function (params?: BridgeShareParams) {
    getLyrixi()?.share?.(params)
  },
  detectFace: function (params?: BridgeDetectFaceParams) {
    getLyrixi()?.detectFace?.(params)
  },
  getPhoneNumber: function (params?: BridgeGetPhoneNumberParams) {
    getLyrixi()?.getPhoneNumber?.(params)
  }
}

export default Bridge
