// 官方文档: https://open.dingtalk.com/document/development/jsapi-overview

import back from './../utils/back'
import formatOpenLocationCoord from './../utils/formatOpenLocationCoord'
import getConfigPayload from './../utils/getConfigPayload'
import compressImage from './compressImage'
import config from './config'
import type {
  SuccessCallback,
  ErrorCallback,
  CancelCallback,
  SuccessResult,
  ErrorResult,
  SDKResult
} from '../types'

// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import Clipboard from './../../Clipboard'
import GeoUtil from './../../GeoUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Clipboard, GeoUtil } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  // 特有方法
  setTitle: function (params?: {
    title?: string
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
  }) {
    const { title, onSuccess, onError } = params || {}
    ;(window.top ?? window).dd?.setNavigationTitle?.({
      title: title,
      success: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      fail: (error: SDKResult) => {
        onError?.({
          status: 'error',
          message:
            error?.errorMessage ||
            `DingTalk ${LocaleUtil.locale(
              '设置标题失败',
              'lyrixi_6dd527e00e48b7580176120795b07b46'
            )}`
        })
      }
    })
  },
  // 通用方法
  load: function (params?: {
    getScriptSrc?: (ctx: { platform: string }) => string
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
  }) {
    const { getScriptSrc, onSuccess, onError } = params || {}
    if ((window.top ?? window).dd) {
      onSuccess?.({
        status: 'success',
        data: undefined
      })
      return
    }

    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = true
    script.src =
      getScriptSrc?.({ platform: 'dingtalk' }) ||
      '//g.alicdn.com/dingding/dingtalk-jsapi/3.0.25/dingtalk.open.js'

    script.onload = function () {
      if (window.dd) {
        ;(window.top ?? window).dd = window.dd
      }

      onSuccess?.({
        status: 'success',
        data: undefined
      })
    }
    script.onerror = function () {
      onError?.({
        status: 'error',
        message: `DingTalk js ${LocaleUtil.locale(
          '加载失败',
          'lyrixi_866b795eae73791792b09d33d6595fe5'
        )}`
      })
    }

    document.body.appendChild(script)
  },
  config: async function (params?: {
    getConfigUrl?: (ctx: { platform: string }) => Promise<string> | string
    formatHeaders?: (
      h: Record<string, string>,
      ctx: { platform: string }
    ) => Promise<Record<string, string>>
    formatPayload?: (
      p: Record<string, unknown>,
      ctx: { platform: string }
    ) => Promise<Record<string, unknown>>
    formatResponse?: (r: unknown, ctx: { platform: string }) => Promise<unknown>
    onSuccess?: (r: unknown) => void
    onError?: (r: unknown) => void
  }) {
    const { getConfigUrl, formatHeaders, formatPayload, formatResponse, onSuccess, onError } =
      params || {}
    // 获取配置url
    let url = ''
    if (typeof getConfigUrl === 'function') {
      url = await getConfigUrl({ platform: 'dingtalk' })
    }
    // 构建payload
    let payload: Record<string, unknown> = getConfigPayload() as Record<string, unknown>
    if (typeof formatPayload === 'function') {
      payload = (await formatPayload(payload, { platform: 'dingtalk' })) as Record<string, unknown>
    }
    // 构建header
    let headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (typeof formatHeaders === 'function') {
      headers = await formatHeaders(headers, { platform: 'dingtalk' })
    }

    config({ url, headers, payload, formatResponse, onSuccess, onError })
  },
  goHome: function () {
    window.history.go(-1)
  },
  back: function (delta?: number) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function (params?: { onSuccess?: SuccessCallback; onError?: ErrorCallback }) {
    const { onSuccess, onError } = params || {}
    if ((window.top ?? window).dd?.env?.platform === 'pc') {
      ;(window.top ?? window).dd?.quitPage?.({
        success: () => {
          onSuccess?.({ status: 'success', data: undefined })
        },
        fail: (error: SDKResult) => {
          onError?.({
            status: 'error',
            message:
              error?.errorMessage ||
              `DingTalk ${LocaleUtil.locale(
                '关闭窗口失败',
                'lyrixi_665ecd23e32150fd197a316177a3973f'
              )}`
          })
        }
      })
      return
    }

    ;(window.top ?? window).dd?.closePage?.({
      success: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      fail: (error: SDKResult) => {
        onError?.({
          status: 'error',
          message:
            error?.errorMessage ||
            `DingTalk ${LocaleUtil.locale(
              '关闭窗口失败',
              'lyrixi_665ecd23e32150fd197a316177a3973f'
            )}`
        })
      }
    })
  },
  onBack: function () {
    console.log('钉钉不支持监听物理返回')
  },
  openLocation: function (params?: {
    latitude?: number
    longitude?: number
    type?: string
    name?: string
    address?: string
    scale?: number
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
  }) {
    const { latitude, longitude, type, name, address, scale, onSuccess, onError } = params || {}
    if (!latitude || !longitude || !type) return
    let coord = formatOpenLocationCoord({ latitude, longitude, type })
    console.log('调用钉钉地图...', { latitude, longitude, type, name, address, scale })
    ;(window.top ?? window).dd?.openLocation?.({
      title: name || '',
      address: address || '',
      latitude: coord?.latitude ?? 0,
      longitude: coord?.longitude ?? 0,
      onSuccess: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      onError: (error: SDKResult) => {
        onError?.({
          status: 'error',
          message:
            error?.errorMessage ||
            `DingTalk ${LocaleUtil.locale(
              '打开地图失败',
              'lyrixi_3dd680a6b28a8b59516034e54bc595b7'
            )}`
        })
      }
    })
  },
  getLocation: function (params?: {
    type?: string
    onSuccess?: SuccessCallback<Record<string, unknown>>
    onError?: ErrorCallback
  }) {
    const { type, onSuccess, onError } = params || {}
    console.log('调用钉钉定位...', type)
    ;(window.top ?? window).dd?.getLocation?.({
      type: 0,
      useCache: false,
      coordinate: '1',
      cacheTimeout: 20,
      withReGeocode: false,
      targetAccuracy: '200',
      onSuccess: (res: SDKResult) => {
        console.log('钉钉定位完成', res)
        let latitude = res.latitude ?? 0
        let longitude = res.longitude ?? 0
        let currentType = 'gcj02'
        let isInChina = GeoUtil.isInChina([longitude, latitude])
        if (isInChina) {
          currentType = 'gcj02'
        } else {
          currentType = 'wgs84'
        }

        const points = GeoUtil.coordtransform([longitude, latitude], currentType, type ?? 'wgs84')
        if (points) {
          longitude = points[0]
          latitude = points[1]
        }

        const data = {
          type: type,
          latitude: latitude,
          longitude: longitude,
          accuracy: res.accuracy
        }
        console.log('转换后坐标', data)
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data
        })
      },
      onError: (error: SDKResult) => {
        onError?.({ status: 'error', message: error?.errorMessage || '' })
      }
    })
  },
  scanCode: function (params?: {
    scanType?: string[]
    onSuccess?: SuccessCallback<{ content: string }>
    onError?: ErrorCallback
    onCancel?: () => void
  }) {
    const { scanType, onSuccess, onError, onCancel } = params || {}
    let type = 'all'
    if (scanType && scanType.length === 1) {
      if (scanType.includes('qrCode')) {
        type = 'qrCode'
      } else if (scanType.includes('barCode')) {
        type = 'barCode'
      }
    }

    ;(window.top ?? window).dd?.biz?.util?.scan?.({
      type: type,
      onSuccess: (res: SDKResult) => {
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data: { content: res.text || '' }
        })
      },
      onError: (error: SDKResult) => {
        onError?.({ status: 'error', message: error?.errorMessage || '' })
      },
      onCancel: onCancel
    })
  },
  chooseMedia: function (params?: {
    count?: number
    sourceType?: string[]
    sizeType?: string[]
    mediaType?: string[]
    maxDuration?: number
    onSuccess?: SuccessCallback<{ localFiles: unknown[] }>
    onError?: ErrorCallback
    onCancel?: () => void
  }) {
    const {
      count: countIn,
      sourceType,
      sizeType,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      mediaType,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      maxDuration,
      onSuccess,
      onError,
      onCancel
    } = params || {}
    let count = countIn || 9
    if (sourceType?.length === 1 && sourceType.includes('camera') && count > 1) {
      count = 1
    }

    const handleSuccess = async function (res: {
      files?: Array<Record<string, unknown> & { path?: string; fileType?: string }>
    }) {
      let localFiles: Array<Record<string, unknown>> = []
      for (let file of res.files || []) {
        let localFile: Record<string, unknown> = {
          fileThumbnail: file.path,
          fileUrl: file.path,
          filePath: file.path,
          fileType: 'image',
          fileExtension: file.fileType
        }

        if ((sizeType || []).includes('compressed')) {
          localFile = (await compressImage(
            localFile as Parameters<typeof compressImage>[0]
          )) as Record<string, unknown>
        }

        localFiles.push(localFile)
      }

      onSuccess?.({
        status: 'success',
        code: '',
        message: '',
        data: {
          localFiles: localFiles
        }
      })
    }

    const handleError = function (error: SDKResult) {
      if (
        error?.errorCode === '11' ||
        error?.errorCode === '-1' ||
        error?.errorCode === 11 ||
        error?.errorCode === -1
      ) {
        onCancel?.()
      } else {
        console.error('钉钉uploadImage失败:', error)
        onError?.({
          status: 'error',
          code: String(error?.errorCode ?? '') || undefined,
          message: error?.errorMessage || ''
        })
      }
    }

    console.log('调用钉钉chooseImage:', {
      count: count,
      secret: false,
      position: 'back',
      sourceType: sourceType || ['camera', 'album']
    })
    ;(window.top ?? window).dd?.chooseImage?.({
      count: count,
      secret: false,
      position: 'back',
      sourceType: sourceType || ['camera', 'album'],
      success: handleSuccess,
      fail: handleError
    })
  },
  uploadFile: async function (params?: {
    localFile?: { filePath?: string; fileType?: string; [key: string]: unknown }
    getUploadUrl?: (ctx: { platform: string }) => Promise<string | undefined>
    formatHeaders?: (
      h: Record<string, string>,
      ctx: { platform: string }
    ) => Promise<Record<string, string>>
    formatPayload?: (
      p: Record<string, unknown>,
      ctx: { platform: string }
    ) => Promise<Record<string, unknown>>
    formatResponse?: (r: unknown, ctx: { platform: string }) => Promise<unknown>
    onSuccess?: SuccessCallback<Record<string, unknown>>
    onError?: ErrorCallback
    onCancel?: CancelCallback
  }) {
    const {
      localFile,
      getUploadUrl,
      formatHeaders,
      formatPayload,
      formatResponse,
      onSuccess,
      onError,
      onCancel
    } = params || {}
    const url = (await getUploadUrl?.({ platform: 'dingtalk' })) || ''
    if (!localFile?.fileType || !localFile?.filePath) {
      onError?.({
        status: 'error',
        message: `localFile error`
      })
      return
    }
    if (!url || typeof url !== 'string') {
      onError?.({
        status: 'error',
        message: `url error`
      })
      return
    }

    let payload: Record<string, unknown> = {
      filePath: localFile.filePath,
      fileType: localFile.fileType
    }
    if (typeof formatPayload === 'function') {
      payload = (await formatPayload(payload, { platform: 'dingtalk' })) as Record<string, unknown>
    }
    let headers: Record<string, string> = { 'Content-Type': 'multipart/form-data' }
    if (typeof formatHeaders === 'function') {
      headers = await formatHeaders(headers, { platform: 'dingtalk' })
    }

    const handleSuccess = async function (res: SDKResult) {
      console.log('钉钉uploadImage成功:', res)
      const { data, statusCode } = res
      if (statusCode !== 200) {
        onError?.({
          status: 'error',
          message: `DingTalk ${LocaleUtil.locale(
            '网络异常，上传失败',
            'lyrixi_18904cde640c2efd37bc6ed3e9dedc77'
          )}`
        })
        return
      }

      let response: { code: string; data: unknown; status?: string } = {
        code: 'success',
        data: data
      }
      if (typeof data === 'string') {
        try {
          response.data = JSON.parse(data)
        } catch (e) {}
      }

      if (typeof formatResponse === 'function') {
        response = (await formatResponse(response, { platform: 'dingtalk' })) as typeof response
      }

      if (response.status === 'success') {
        onSuccess?.(response as SuccessResult<Record<string, unknown>>)
      } else {
        onError?.(response as ErrorResult)
      }
    }

    console.log('调用钉钉uploadFile:', {
      url: url.startsWith('http') ? url : window.origin + url,
      headers: headers,
      formData: payload,
      fileName: 'file', // 文件名必传，但其实没什么用, 因为在formData也可以传
      filePath: localFile.filePath,
      fileType: localFile.fileType
    })
    ;(window.top ?? window).dd?.uploadFile?.({
      url: url.startsWith('http') ? url : window.origin + url,
      header: headers,
      formData: payload,
      fileName: 'file', // 文件名必传，但其实没什么用, 因为在formData也可以传
      filePath: localFile.filePath,
      fileType: localFile.fileType,
      success: handleSuccess,
      fail: (error: SDKResult) => {
        onError?.({
          status: 'error',
          code: String(error?.errorCode ?? '') || undefined,
          message: error?.errorMessage || ''
        })
      },
      cancel: (error: SDKResult) => {
        onCancel?.({
          status: 'cancel',
          code: String(error?.errorCode ?? '') || undefined,
          message: error?.errorMessage || ''
        })
      }
    })
  },
  previewMedia: function (params?: {
    index?: number
    sources?: Array<
      Record<string, unknown> & {
        localFile?: { tempFileUrl?: string }
        fileUrl?: string
        fileType?: string
      }
    >
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
    onCancel?: CancelCallback
  }) {
    const { index, sources, onSuccess, onError, onCancel } = params || {}
    const srcList = sources || []
    let urls = srcList.map((item) => item?.localFile?.tempFileUrl || item?.fileUrl)
    let current = index !== undefined ? srcList[index] : undefined

    // 预览视频
    if (current?.fileType === 'video') {
      Clipboard.copyText(String(current.fileUrl ?? ''))
      return
    }

    // 预览图片
    ;(window.top ?? window).dd?.previewImage?.({
      urls: urls,
      current: index ?? 0,
      success: () => {
        onSuccess?.({
          status: 'success',
          data: undefined
        })
      },
      fail: (error: SDKResult) => {
        console.log('钉钉previewImage失败:', error)
        onError?.({
          status: 'error',
          code: String(error?.errorCode ?? '') || undefined,
          message:
            error?.errorMessage ||
            `DingTalk ${LocaleUtil.locale('预览失败', 'lyrixi_6a3a5ef00db03994963efebe08432ce1')}`
        })
      },
      cancel: (error: SDKResult) => {
        onCancel?.({
          status: 'cancel',
          code: String(error?.errorCode ?? '') || undefined,
          message: error?.errorMessage || ''
        })
      }
    })
  },
  /**
   * 人脸识别活体检测（钉钉 ATM BLE）
   * @see dd.biz.ATMBle.exclusiveLiveCheck
   */
  detectFace: async function (params?: {
    getConfig?: (ctx: {
      platform: string
    }) => Promise<Record<string, unknown>> | Record<string, unknown>
    onSuccess?: SuccessCallback<{ match: boolean; confidence: number | undefined }>
    onError?: ErrorCallback
  }) {
    const { getConfig, onSuccess, onError } = params || {}
    let config: Record<string, unknown> = {}
    if (typeof getConfig === 'function') {
      config = await getConfig({ platform: 'dingtalk' })
    }
    ;(window.top ?? window).dd?.biz?.ATMBle?.exclusiveLiveCheck?.({
      ...config,
      onSuccess: (res: SDKResult) => {
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data: {
            match: res?.photoStatus === 1,
            confidence: undefined
          }
        })
      },
      onFail: (err: SDKResult) => {
        onError?.({
          status: 'error',
          code: err?.errorCode !== undefined ? String(err.errorCode) : undefined,
          message: err?.errorMessage
        })
      }
    })
  },
  share(params?: {
    title?: string
    description?: string
    url?: string
    imageUrl?: string
    onSuccess?: () => void
    onError?: ErrorCallback
  }) {
    const { title, description, url, imageUrl, onSuccess, onError } = params || {}
    ;(window.top ?? window).dd?.biz?.util?.share?.({
      type: 0, // 分享类型，0:全部组件 默认；1:只能分享到钉钉；2:不能分享，只有刷新按钮
      url: url,
      title: title,
      content: description,
      image: imageUrl,
      onSuccess: function () {
        onSuccess?.()
      },
      onFail: function (err: SDKResult) {
        console.log('DingTalk Share onError:', err)
        onError?.({
          status: 'error',
          message:
            err?.errMsg ||
            `DingTalk ${LocaleUtil.locale('分享失败', 'lyrixi_e8e25af006ef2ebbdb317e1d7c035a0f')}`
        })
      }
    })
  }
}

export default Bridge
