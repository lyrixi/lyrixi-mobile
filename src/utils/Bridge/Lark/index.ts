// 官方文档: https://open.feishu.cn/document/client-docs/h5/
// 鉴权: https://open.feishu.cn/document/uYjL24iN/uQjMuQjMuQjM/authentication/h5sdkconfig

import back from './../utils/back'
import formatOpenLocationCoord from './../utils/formatOpenLocationCoord'
import getConfigPayload from './../utils/getConfigPayload'
import config from './config'
import type { SuccessCallback, ErrorCallback, CancelCallback, SDKResult } from '../types'

// 内库使用-start
import GeoUtil from './../../GeoUtil'
import Clipboard from './../../Clipboard'
import LocaleUtil from './../../LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { GeoUtil, Clipboard, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  load: function (params?: {
    getScriptSrc?: (ctx: { platform: string }) => string
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
  }) {
    const { getScriptSrc, onSuccess, onError } = params || {}
    const top = window.top ?? window
    if (top.tt && top.h5sdk) {
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
      getScriptSrc?.({ platform: 'lark' }) ||
      '//lf-scm-cn.feishucdn.com/lark/op/h5-js-sdk-1.5.34.js'

    script.onload = function () {
      if (window.tt && window.h5sdk) {
        top.tt = window.tt
        top.h5sdk = window.h5sdk
      }

      onSuccess?.({
        status: 'success',
        data: undefined
      })
    }
    script.onerror = function () {
      onError?.({
        status: 'error',
        message: `Lark js ${LocaleUtil.locale(
          '加载失败',
          'lyrixi_866b795eae73791792b09d33d6595fe5'
        )}`
      })
    }

    if (script.src) document.body.appendChild(script)
  },
  config: async function (params?: {
    getConfigUrl?: (ctx: { platform: string }) => Promise<string> | string
    formatHeaders?: (h: Record<string, string>, ctx: { platform: string }) => Promise<Record<string, string>>
    formatPayload?: (p: Record<string, unknown>, ctx: { platform: string }) => Promise<Record<string, unknown>>
    formatResponse?: (r: unknown, ctx: { platform: string }) => Promise<unknown>
    onSuccess?: (r: unknown) => void
    onError?: (r: unknown) => void
  }) {
    const { getConfigUrl, formatHeaders, formatPayload, formatResponse, onSuccess, onError } = params || {}
    // 获取配置url
    let url = ''
    if (typeof getConfigUrl === 'function') {
      url = await getConfigUrl({ platform: 'lark' })
    }
    // 构建payload
    let payload: Record<string, unknown> = getConfigPayload() as Record<string, unknown>
    if (typeof formatPayload === 'function') {
      payload = (await formatPayload(payload, { platform: 'lark' })) as Record<string, unknown>
    }
    // 构建header
    let headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (typeof formatHeaders === 'function') {
      headers = await formatHeaders(headers, { platform: 'lark' })
    }

    config({ url, headers, payload, formatResponse, onSuccess, onError })
  },
  goHome: function () {
    window.history.go(-1)
  },
  back: function (delta?: number) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function (params?: {
    onSuccess?: SuccessCallback
    onError?: ErrorCallback
  }) {
    const { onSuccess, onError } = params || {}
    ;(window.top ?? window).tt?.closeWindow?.({
      success: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      fail: (error: SDKResult) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `Lark ${LocaleUtil.locale('关闭窗口失败', 'lyrixi_665ecd23e32150fd197a316177a3973f')}`
        })
      }
    })
  },
  onBack: function () {
    console.log('飞书不支持监听物理返回')
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
    const { latitude, longitude, type, name, address, scale: scaleIn, onSuccess, onError } = params || {}
    if (!latitude || !longitude || !type) return
    let coord = formatOpenLocationCoord({ latitude, longitude, type })
    let scale = scaleIn ?? 12
    console.log('调用飞书地图...', { latitude, longitude, type, name, address, scale })

    if (scale < 5) {
      scale = 5
    } else if (scale > 18) {
      scale = 18
    }

    ;(window.top ?? window).tt?.openLocation?.({
      latitude: coord?.latitude ?? 0,
  longitude: coord?.longitude ?? 0,
      scale: scale,
      name: name,
      address: address,
      success: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      fail: (error: SDKResult) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `Lark ${LocaleUtil.locale('打开地图失败', 'lyrixi_3dd680a6b28a8b59516034e54bc595b7')}`
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
    let targetType = type || 'gcj02'
    console.log('调用飞书定位...', type)

    ;(window.top ?? window).tt?.getLocation?.({
      type: targetType,
      success: (res: SDKResult) => {
        console.error('飞书定位成功', res)

        let data: Record<string, unknown> = {
          longitude: res.longitude,
          latitude: res.latitude,
          type: res.type,
          accuracy: res.accuracy
        }

        if (res.type && res.type !== targetType) {
          const points = GeoUtil.coordtransform([res.longitude ?? 0, res.latitude ?? 0], res.type ?? 'wgs84', targetType)

          if (points) {
            data = {
              longitude: points[0],
              latitude: points[1],
              type: targetType,
              accuracy: res.accuracy
            }
          }
        }

        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data
        })
      },
      fail: (error: SDKResult) => {
        console.error('飞书定位失败', error)
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `Lark ${LocaleUtil.locale('定位失败', 'lyrixi_9831baf6b76c1da7b69b463033b924cc')}`
        })
      }
    })
  },
  scanCode: function (params?: {
    scanType?: string[]
    onSuccess?: SuccessCallback<{ content: string }>
    onError?: ErrorCallback
    onCancel?: CancelCallback
  }) {
    const { scanType, onSuccess, onError, onCancel } = params || {}
    ;(window.top ?? window).tt?.scanCode?.({
      scanType: scanType,
      barCodeInput: true,
      success: (res: SDKResult) => {
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data: { content: res.resultStr || '' }
        })
      },
      fail: (error: SDKResult) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      },
      cancel: (error: SDKResult) => {
        onCancel?.({ status: 'cancel', message: error?.errMsg || '' })
      }
    })
  },
  chooseMedia: function () {
    console.log('调用飞书选择媒体暂未实现')
  },
  uploadFile: function () {
    console.log('调用飞书上传文件暂未实现')
  },
  previewMedia: function (params?: {
    index?: number
    sources?: Array<Record<string, unknown> & { localFile?: { tempFileUrl?: string }; fileUrl?: string; fileType?: string }>
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
    ;(window.top ?? window).tt?.previewImage?.({
      urls: urls,
      current: index !== undefined ? urls[index] : urls[0],
      success: () => {
        onSuccess?.({
          status: 'success',
          data: undefined
        })
      },
      fail: (error: SDKResult) => {
        console.log('飞书previewImage失败:', error)
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `Lark ${LocaleUtil.locale('预览失败', 'lyrixi_6a3a5ef00db03994963efebe08432ce1')}`
        })
      },
      onCancel: onCancel
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
    ;(window.top ?? window).tt?.share?.({
      channelType: ['wx', 'wx_timeline', 'system'],
      contentType: 'url',
      title: title,
      content: description,
      url: url,
      image: imageUrl,
      success() {
        onSuccess && onSuccess()
      },
      fail(err: SDKResult) {
        console.log('Lark Share onError:', err)

        onError?.({
          status: 'error',
          message:
            err?.message ||
            `Lark ${LocaleUtil.locale('分享失败', 'lyrixi_e8e25af006ef2ebbdb317e1d7c035a0f')}`
        })
      }
    })
  }
}

export default Bridge
