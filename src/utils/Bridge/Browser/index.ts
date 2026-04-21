import uploadFile from './uploadFile'
import back from './../utils/back'
import type { SuccessCallback, ErrorCallback, CancelCallback, SuccessResult, ErrorResult } from '../types'

// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import Clipboard from './../../Clipboard'
import GeoUtil from './../../GeoUtil'
import Device from './../../Device'
import Toast from './../../../components/Toast'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Clipboard, GeoUtil, Device, Toast } from 'lyrixi-mobile'
测试使用-end */

let Browser = {
  /** 调试开关：为 true 时 getBrowserLocation / scanCode 等走模拟逻辑 */
  debug: false,
  load: function (opts?: { onSuccess?: SuccessCallback }) {
    const { onSuccess } = opts || {}
    onSuccess?.({
      status: 'success',
      data: undefined
    })
  },
  config: async function (opts?: { onSuccess?: SuccessCallback }) {
    const { onSuccess } = opts || {}
    onSuccess?.({
      status: 'success',
      data: undefined
    })
  },
  back: function (delta?: number) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function (opts?: {
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
  }) {
    const { onSuccess } = opts || {}
    window.history.go(-1)
    onSuccess?.({ status: 'success', data: undefined })
  },
  onBack: function () {
    Toast.show({
      content: `Browser ${LocaleUtil.locale(
        '此平台不支持',
        'lyrixi_60a7978c99ee3bd2f538096ee46727ca'
      )} onBack`
    })
  },
  setTitle: function (opts?: {
    title?: string
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
  }) {
    const { title, onSuccess } = opts || {}
    const topWin = window.top ?? window
    topWin.document.title = title ?? ''
    onSuccess?.({ status: 'success', data: undefined })
  },
  openWindow: function (opts?: { url?: string; target?: string }) {
    const { url, target } = opts || {}
    if (target === '_self') {
      if (url) window.location.replace(url)
      return
    }
    if (Device.device === 'pc') {
      if (url) window.open(url)
      return
    }
    if (url) window.location.href = url
  },
  goHome: function () {
    window.history.go(-1)
  },
  tel: function (opts?: {
    number?: string | number
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
  }) {
    const { number, onSuccess, onError } = opts || {}
    if (Device.device === 'pc') {
      Toast.show({
        content: `Browser ${LocaleUtil.locale(
          '此平台不支持',
          'lyrixi_60a7978c99ee3bd2f538096ee46727ca'
        )} tel`
      })
      return
    }
    if (number == null || Number.isNaN(Number(number))) {
      onError?.({
        status: 'error',
        message: `Browser ${LocaleUtil.locale(
          '电话号码格式错误',
          'lyrixi_219a4aae2d70f722737a324656fe4f13'
        )}`
      })
      return
    }
    window.location.href = 'tel:' + number
    onSuccess?.({ status: 'success', data: undefined })
  },
  openLocation: function (opts?: {
    latitude?: number
    longitude?: number
    type?: string
    name?: string
    address?: string
    scale?: number
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
  }) {
    const { latitude, longitude, type, onError } = opts || {}
    if (!latitude || !longitude || !type) return
    let message = `Browser ${LocaleUtil.locale(
      'openLocation仅可在企业微信或APP中使用',
      'lyrixi_0e963a39eb4b363f9465618162b7d7d5',

      ['openLocation']
    )}`
    Toast.show({
      content: message
    })
    onError?.({ status: 'error', message: message })
  },
  getLocation: function (opts?: {
    type?: string
    onSuccess?: SuccessCallback<Record<string, unknown>>
    onError?: ErrorCallback
  }) {
    this.getBrowserLocation(opts)
  },
  getBrowserLocation: function (opts?: {
    type?: string
    onSuccess?: SuccessCallback<Record<string, unknown>>
    onError?: ErrorCallback
  }) {
    const { type, onSuccess, onError } = opts || {}
    if (this.debug) {
      console.log('模拟浏览器定位...', type)
      setTimeout(() => {
        const data =
          type === 'gcj02'
            ? {
                message: '',
                speed: '0.0',
                accuracy: '3.0.0',
                type: type || 'wgs84',
                latitude: 39.909187,
                longitude: 116.397451
              }
            : {
                message: '',
                speed: '0.0',
                accuracy: '3.0.0',
                type: type || 'wgs84',
                latitude: 39.907783490367706,
                longitude: 116.39120737493609
              }
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data
        })
      }, 2000)
      return
    }

    if (navigator.geolocation) {
      console.log('调用浏览器定位...', type)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let longitude = position.coords.longitude
          let latitude = position.coords.latitude
          if (!longitude || !latitude) {
            onError?.({
              status: 'error',
              code: 'LATLNG_ERROR',
              message: `Browser ${LocaleUtil.locale(
                '定位失败',
                'lyrixi_9831baf6b76c1da7b69b463033b924cc'
              )}`
            })
          }

          console.log('调用浏览器定位成功', { type, longitude, latitude })
          if (type === 'gcj02') {
            const points = GeoUtil.coordtransform([longitude, latitude], 'wgs84', 'gcj02')
            longitude = points[0]
            latitude = points[1]
          }
          onSuccess?.({
            status: 'success',
            code: '',
            message: '',
            data: {
              message: '',
              speed: position.coords.speed,
              accuracy: position.coords.accuracy,
              longitude: longitude,
              latitude: latitude,
              type: type || 'wgs84'
            }
          })
        },
        (error) => {
          let code = ''
          let message = ''
          switch (error.code) {
            case error.PERMISSION_DENIED:
              code = 'PERMISSION_DENIED'
              message = `Browser ${LocaleUtil.locale(
                '定位失败,用户拒绝请求地理定位',
                'lyrixi_f8cfa8427bee70b3f5759bcbce99b4b3'
              )}`
              break
            case error.POSITION_UNAVAILABLE:
              code = 'POSITION_UNAVAILABLE'
              console.log(
                `Browser ${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'lyrixi_c9eb59bd4d16540b9f2295104060284f'
                )}`
              )
              message = `Browser ${LocaleUtil.locale(
                '定位失败,位置信息是不可用',
                'lyrixi_c9eb59bd4d16540b9f2295104060284f'
              )}`
              break
            case error.TIMEOUT:
              code = 'TIMEOUT'
              console.log(
                `Browser ${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'lyrixi_c9eb59bd4d16540b9f2295104060284f'
                )}`
              )
              message = `Browser ${LocaleUtil.locale(
                '定位失败,请求获取用户位置超时',
                'lyrixi_8a95092c3c8f57da8b4a619eeead5795'
              )}`
              break
            case 0:
              code = 'UNKNOWN_ERROR'
              console.log(
                `Browser ${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'lyrixi_c9eb59bd4d16540b9f2295104060284f'
                )}`
              )
              message = `Browser ${LocaleUtil.locale(
                '定位失败,定位系统失效',
                'lyrixi_b7ad4da2f97870b26920561f33ab14ab'
              )}`
              break
            default:
              code = 'LOCATION_ERROR'
              console.log(
                `Browser ${LocaleUtil.locale('定位失败', 'lyrixi_9831baf6b76c1da7b69b463033b924cc')}`
              )
              message = `Browser ${LocaleUtil.locale(
                '定位失败',
                'lyrixi_9831baf6b76c1da7b69b463033b924cc'
              )}`
          }
          let res: ErrorResult = { status: 'error', code: code, message: message }
          console.log('调用浏览器定位失败', res)
          onError?.(res)
        },
        {
          enableHighAccuracy: true,
          timeout: 8000,
          maximumAge: 0
        }
      )
    } else {
      let res: ErrorResult = {
        status: 'error',
        code: 'LOCATION_NOT_SUPPORTED_ERROR',
        message: `Browser ${LocaleUtil.locale(
          '此平台不支持',
          'lyrixi_60a7978c99ee3bd2f538096ee46727ca'
        )}`
      }
      onError?.(res)
    }
    return
  },
  scanCode: function (opts?: {
    scanType?: string[]
    onSuccess?: SuccessCallback<{ content: string }>
    onError?: ErrorCallback
    onCancel?: CancelCallback
  }) {
    const { scanType, onSuccess, onError, onCancel } = opts || {}
    if (!this.debug) {
      let message = `Browser ${LocaleUtil.locale(
        '此平台不支持',
        'lyrixi_60a7978c99ee3bd2f538096ee46727ca'
      )} scanCode`
      Toast.show({
        content: message
      })
      if (onError)
        onError({
          status: 'error',
          message: message
        })
      return
    }
    setTimeout(function () {
      if (onSuccess)
        onSuccess({
          status: 'success',
          code: '',
          message: '',
          data: { content: '504823170310092750280333' }
        })
    }, 500)
  },
  chooseMedia: function () {
    let message = `Browser ${LocaleUtil.locale(
      '此平台不支持',
      'lyrixi_60a7978c99ee3bd2f538096ee46727ca'
    )} chooseMedia`
    Toast.show({
      content: message
    })
  },
  uploadFile: async function (opts?: {
    localFile?: { filePath?: string; fileType?: string }
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
  }) {
    const { localFile, getUploadUrl, formatHeaders, formatPayload, formatResponse, onSuccess, onError } =
      opts || {}
    let url = (await getUploadUrl?.({ platform: 'browser' })) || ''
    if (!url || typeof url !== 'string') {
      onError &&
        onError({
          status: 'error',
          message: `url error`
        })
      return
    }
    if (!localFile?.filePath || !localFile?.fileType) {
      onError?.({ status: 'error', message: 'localFile error' })
      return
    }
    let payload: Record<string, unknown> = { filePath: localFile.filePath, fileType: localFile.fileType }
    if (typeof formatPayload === 'function') {
      payload = (await formatPayload(payload, { platform: 'browser' })) as Record<string, unknown>
    }
    let headers: Record<string, string> = { 'Content-Type': 'multipart/form-data' }
    if (typeof formatHeaders === 'function') {
      headers = await formatHeaders(headers, { platform: 'browser' })
    }

    let response = (await uploadFile({
      url: url,
      headers: headers,
      payload: payload
    })) as { status: string; [key: string]: unknown }

    if (response.status === 'success' && typeof formatResponse === 'function') {
      response = (await formatResponse(response, { platform: 'browser' })) as typeof response
    }

    if (response.status === 'success') {
      onSuccess?.(response as SuccessResult<Record<string, unknown>>)
    } else {
      onError?.(response as ErrorResult)
    }
  },
  previewMedia: function (opts?: {
    index?: number
    sources?: unknown[]
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
    onCancel?: CancelCallback
  }) {
    const { onError } = opts || {}
    onError?.({
      status: 'error',
      message: `Browser ${LocaleUtil.locale(
        '此平台不支持',
        'lyrixi_60a7978c99ee3bd2f538096ee46727ca'
      )} previewMedia`
    })
  },
  previewFile: function (opts?: {
    fileUrl?: string
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
  }) {
    const { onError } = opts || {}
    let message = `Browser ${LocaleUtil.locale(
      '此平台不支持',
      'lyrixi_60a7978c99ee3bd2f538096ee46727ca'
    )} previewFile`
    Toast.show({
      content: message
    })
    onError && onError({ status: 'error', message: message })
  },
  share(opts?: {
    title?: string
    description?: string
    url?: string
    imageUrl?: string
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
  }) {
    const { url, onSuccess } = opts || {}
    Clipboard.copyText(url || '')
    onSuccess &&
      onSuccess({
        status: 'success',
        data: undefined
      })
  }
}
export default Browser
