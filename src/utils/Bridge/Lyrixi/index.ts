import back from './../utils/back'
import formatOpenLocationCoord from './../utils/formatOpenLocationCoord'
import type { BridgeSDKErrorResponse } from '../WeChat/BridgeSDKErrorResponse.types'

import type {
  FileItem,
  BridgeChooseMediaParams,
  BridgeChooseMediaResultData,
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
  BridgePreviewMediaSource,
  BridgeScanCodeParams,
  BridgeSetTitleParams,
  BridgeShareParams,
  BridgeTelParams,
  BridgeUploadFileParams,
  BridgeUploadLocalFile,
  BridgeSuccessResult,
  BridgeErrorResult
} from '../types'

// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import Clipboard from './../../Clipboard'
import Device from './../../Device'
import Toast from './../../../components/Toast'
import MathUtil from './../../MathUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Clipboard, Device, Toast, MathUtil } from 'lyrixi-mobile'
测试使用-end */

function getLyrixi() {
  return (window.top ?? window).lyrixi
}

let Bridge = {
  load: function (params?: BridgeLoadParams) {
    const { onSuccess } = params || {}
    onSuccess?.({ status: 'success', data: undefined })
  },
  config: function (params?: BridgeConfigParams) {
    const { onSuccess } = params || {}
    onSuccess?.({ status: 'success', data: undefined })
  },
  back: function (delta?: number) {
    back(delta, { closeWindow: this.closeWindow })
  },
  closeWindow: function (params?: BridgeCloseWindowParams) {
    const { onSuccess, onError } = params || {}
    getLyrixi()?.closeWindow?.({
      success: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `Lyrixi ${LocaleUtil.locale('关闭窗口失败', 'lyrixi_665ecd23e32150fd197a316177a3973f')}`
        })
      }
    })
  },
  onHistoryBack: function (params?: BridgeOnHistoryBackParams) {
    const { onError, onSuccess } = params || {}
    getLyrixi()?.onHistoryBack?.({
      success: () => {
        const handleBack = async () => {
          const isBack = await onSuccess?.({ status: 'success', data: undefined })
          if (isBack === false) {
            this.onHistoryBack({ onError, onSuccess })
          } else {
            this.back(-1)
          }
        }
        handleBack()
        return false
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      }
    })
  },
  setTitle: function (params?: BridgeSetTitleParams) {
    const { title, onSuccess, onError } = params || {}
    getLyrixi()?.setTitle?.({
      title: title,
      success: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `Lyrixi ${LocaleUtil.locale('设置标题失败', 'lyrixi_6dd527e00e48b7580176120795b07b46')}`
        })
      }
    })
  },
  openWindow: function (params?: BridgeOpenWindowParams) {
    const { url, title, target } = params || {}
    getLyrixi()?.openWindow?.({
      url,
      title,
      target,
      success: () => {},
      fail: () => {
        if (target === '_self') {
          if (url) window.location.replace(url)
          return
        }
        if (Device.device === 'pc') {
          if (url) window.open(url)
          return
        }
        if (url) window.location.href = url
      }
    })
  },
  tel: function (params?: BridgeTelParams) {
    const { number, onSuccess, onError } = params || {}
    if (!MathUtil.isNumber(number)) {
      onError?.({
        status: 'error',
        message: `Lyrixi ${LocaleUtil.locale(
          '电话号码格式错误',
          'lyrixi_219a4aae2d70f722737a324656fe4f13'
        )}`
      })
      return
    }
    getLyrixi()?.tel?.({
      number: String(number),
      success: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      }
    })
  },
  openLocation: function (params?: BridgeOpenLocationParams) {
    const { to, scale, onSuccess, onError } = params || {}
    const { latitude, longitude, type = 'wgs84', name, address } = to || {}
    if (!latitude || !longitude) return

    const coord = formatOpenLocationCoord({ latitude, longitude, type })
    getLyrixi()?.openLocation?.({
      latitude: coord?.latitude ?? 0,
      longitude: coord?.longitude ?? 0,
      name,
      address,
      scale: scale || 12,
      success: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `Lyrixi ${LocaleUtil.locale('打开地图失败', 'lyrixi_3dd680a6b28a8b59516034e54bc595b7')}`
        })
      }
    })
  },
  getLocation: function (params?: BridgeGetLocationParams) {
    const { type, onSuccess, onError, onCancel } = params || {}
    getLyrixi()?.getLocation?.({
      type: type || 'wgs84',
      success: (res: Record<string, unknown>) => {
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data: {
            longitude: (res.longitude as number) ?? 0,
            latitude: (res.latitude as number) ?? 0,
            type: (res.type as string) || type || 'wgs84',
            accuracy: res.accuracy as number | undefined
          }
        })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      },
      cancel: (error: BridgeSDKErrorResponse) => {
        onCancel?.({ status: 'cancel', message: error?.errMsg || '' })
      }
    })
  },
  scanCode: function (params?: BridgeScanCodeParams) {
    const { scanType, onSuccess, onError, onCancel } = params || {}
    getLyrixi()?.scanCode?.({
      scanType: scanType || ['qrCode', 'barCode'],
      success: (res: Record<string, unknown>) => {
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data: {
            content: String(res.content || res.resultStr || '')
          }
        })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      },
      cancel: (error: BridgeSDKErrorResponse) => {
        onCancel?.({ status: 'cancel', message: error?.errMsg || '' })
      }
    })
  },
  chooseMedia: function (params?: BridgeChooseMediaParams) {
    const { count, sourceType, sizeType, mediaType, maxDuration, onSuccess, onError, onCancel } =
      params || {}

    getLyrixi()?.chooseMedia?.({
      count,
      sourceType,
      sizeType,
      mediaType,
      maxDuration,
      success: (res: Record<string, unknown>) => {
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data: {
            localFiles: (res.localFiles as BridgeChooseMediaResultData['localFiles']) || []
          }
        })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      },
      cancel: (error: BridgeSDKErrorResponse) => {
        onCancel?.({ status: 'cancel', message: error?.errMsg || '' })
      }
    })
  },
  uploadFile: async function (params?: BridgeUploadFileParams) {
    const {
      localFile: rawLocalFile,
      getUploadUrl,
      formatHeaders,
      formatPayload,
      formatResponse,
      onSuccess,
      onError,
      onCancel
    } = params || {}
    const localFile = rawLocalFile as BridgeUploadLocalFile | undefined

    const url = (await getUploadUrl?.({ platform: 'lyrixi' })) || ''
    if (!url || typeof url !== 'string') {
      onError?.({ status: 'error', message: 'url error' })
      return
    }
    if (!localFile?.filePath || !localFile?.fileType) {
      onError?.({ status: 'error', message: 'localFile error' })
      return
    }

    let payload: Record<string, unknown> = {
      filePath: localFile.filePath,
      fileType: localFile.fileType
    }
    if (typeof formatPayload === 'function') {
      payload = (await formatPayload(payload, { platform: 'lyrixi' })) as Record<string, unknown>
    }
    let headers: Record<string, string> = { 'Content-Type': 'multipart/form-data' }
    if (typeof formatHeaders === 'function') {
      headers = (await formatHeaders(headers, { platform: 'lyrixi' })) as Record<string, string>
    }

    getLyrixi()?.uploadFile?.({
      url: url.startsWith('http') ? url : window.origin + url,
      header: headers,
      formData: payload,
      filePath: localFile.filePath,
      fileType: localFile.fileType,
      success: async (res: { data?: unknown; statusCode?: number }) => {
        if (res.statusCode !== undefined && res.statusCode !== 200) {
          onError?.({
            status: 'error',
            message: `Lyrixi ${LocaleUtil.locale(
              '网络异常，上传失败',
              'lyrixi_18904cde640c2efd37bc6ed3e9dedc77'
            )}`
          })
          return
        }

        let response: { code?: string; data?: unknown; status?: string } = {
          code: 'success',
          data: res.data
        }
        if (typeof res.data === 'string') {
          try {
            response.data = JSON.parse(res.data)
          } catch (e) {
            /* keep raw string */
          }
        }
        if (typeof formatResponse === 'function') {
          response = (await formatResponse(response, { platform: 'lyrixi' })) as typeof response
        }
        if (response.status === 'success') {
          onSuccess?.(response as BridgeSuccessResult<FileItem>)
        } else {
          onError?.(response as BridgeErrorResult)
        }
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      },
      cancel: (error: BridgeSDKErrorResponse) => {
        onCancel?.({ status: 'cancel', message: error?.errMsg || '' })
      }
    })
  },
  previewMedia: function (params?: BridgePreviewMediaParams) {
    const { index, sources, onSuccess, onError, onCancel } = params || {}
    type LyrixiPreviewSource = BridgePreviewMediaSource & {
      localFile?: { tempFileUrl?: string }
    }
    const srcList = (sources || []) as LyrixiPreviewSource[]
    const urls = srcList.map((item) => item?.localFile?.tempFileUrl || item?.fileUrl)
    const current = index !== undefined ? srcList[index] : undefined

    if (current?.fileType === 'video') {
      Clipboard.copyText(String(current.fileUrl ?? ''))
      return
    }

    getLyrixi()?.previewMedia?.({
      urls,
      index: index ?? 0,
      sources,
      success: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `Lyrixi ${LocaleUtil.locale('预览失败', 'lyrixi_6a3a5ef00db03994963efebe08432ce1')}`
        })
      },
      cancel: (error: BridgeSDKErrorResponse) => {
        onCancel?.({ status: 'cancel', message: error?.errMsg || '' })
      }
    })
  },
  previewFile: function (params?: BridgePreviewFileParams) {
    const { fileUrl, fileName, fileSize, onSuccess, onError } = params || {}
    getLyrixi()?.previewFile?.({
      fileUrl,
      fileName,
      fileSize,
      success: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `Lyrixi ${LocaleUtil.locale('预览失败', 'lyrixi_6a3a5ef00db03994963efebe08432ce1')}`
        })
      }
    })
  },
  share: function (params?: BridgeShareParams) {
    const { title, description, url, imageUrl, onSuccess, onError } = params || {}
    getLyrixi()?.share?.({
      title,
      description,
      url,
      imageUrl,
      success: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `Lyrixi ${LocaleUtil.locale('分享失败', 'lyrixi_e8e25af006ef2ebbdb317e1d7c035a0f')}`
        })
      }
    })
  },
  detectFace: async function (params?: BridgeDetectFaceParams) {
    const { getConfig, onSuccess, onError } = params || {}
    let nativeConfig: Record<string, unknown> = {}
    if (typeof getConfig === 'function') {
      nativeConfig = await getConfig({ platform: 'lyrixi' })
    }
    getLyrixi()?.detectFace?.({
      ...nativeConfig,
      success: (res: Record<string, unknown>) => {
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data: {
            match: Boolean(res.match),
            confidence: res.confidence as number | undefined
          }
        })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      }
    })
  },
  getPhoneNumber: function (params?: BridgeGetPhoneNumberParams) {
    const { onSuccess, onError, onCancel } = params || {}
    getLyrixi()?.getPhoneNumber?.({
      success: (res: Record<string, unknown>) => {
        onSuccess?.({
          status: 'success',
          code: String(res.code || ''),
          message: '',
          data: {
            code: String(res.code || ''),
            phoneNumber: String(res.phoneNumber || '')
          }
        })
      },
      fail: (error: BridgeSDKErrorResponse) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      },
      cancel: (error: BridgeSDKErrorResponse) => {
        onCancel?.({ status: 'cancel', message: error?.errMsg || '' })
      }
    })
  }
}

export default Bridge
