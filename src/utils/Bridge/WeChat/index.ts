// 官方文档: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html

import back from './../utils/back'
import formatOpenLocationCoord from './../utils/formatOpenLocationCoord'
import getConfigPayload from './../utils/getConfigPayload'
import uploadServerId from './uploadServerId'
import getPreview from './getPreview'
import wechatConfig from './wechatConfig'
import wecomAgentConfig from './wecomAgentConfig'

// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import Clipboard from './../../Clipboard'
import Device from './../../Device'
import Toast from './../../../components/Toast'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Clipboard, Device, Toast } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  load: function (opts?: {
    getScriptSrc?: (ctx: { platform: string }) => string
    onSuccess?: (r: { status: string }) => void
    onError?: (r: { status: string; message?: string }) => void
  }) {
    const { getScriptSrc, onSuccess, onError } = opts || {}
    const platform = Device.platform
    if ((window.top ?? window).wx) {
      onSuccess?.({
        status: 'success'
      })
      return
    }

    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = true

    if (platform === 'wechat') {
      script.src = getScriptSrc?.({ platform }) || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    } else if (platform === 'wechatMiniProgram') {
      script.src = getScriptSrc?.({ platform }) || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    } else if (platform === 'wecom') {
      script.src =
        getScriptSrc?.({ platform }) || '//res.wx.qq.com/wwopen/js/jsapi/jweixin-1.0.0.js'
    } else if (platform === 'wecomMiniProgram') {
      script.src = getScriptSrc?.({ platform }) || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    }

    script.onload = function () {
      if (window.wx) {
        (window.top ?? window).wx = window.wx
      }

      onSuccess?.({
        status: 'success'
      })
    }
    script.onerror = function () {
      onError?.({
        status: 'error',
        message: `WeChat js ${LocaleUtil.locale(
          '加载失败',
          'lyrixi_866b795eae73791792b09d33d6595fe5'
        )}`
      })
    }

    if (script.src) document.body.appendChild(script)
  },
  config: async function (opts?: {
    getConfigUrl?: (ctx: { platform: string }) => Promise<string> | string
    formatHeaders?: (h: Record<string, string>, ctx: { platform: string }) => Promise<Record<string, string>>
    formatPayload?: (p: Record<string, unknown>, ctx: { platform: string }) => Promise<Record<string, unknown>>
    formatResponse?: (r: unknown, ctx: { platform: string }) => Promise<unknown>
    onSuccess?: (r: unknown) => void
    onError?: (r: unknown) => void
  }) {
    const { getConfigUrl, formatHeaders, formatPayload, formatResponse, onSuccess, onError } = opts || {}
    let platform = Device.platform

    // 获取配置url
    let url = ''
    if (typeof getConfigUrl === 'function') {
      url = await getConfigUrl({ platform })
    }
    // 构建payload
    let payload: Record<string, unknown> = getConfigPayload() as Record<string, unknown>
    if (typeof formatPayload === 'function') {
      payload = (await formatPayload(payload, { platform })) as Record<string, unknown>
    }
    // 构建header
    let headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (typeof formatHeaders === 'function') {
      headers = await formatHeaders(headers, { platform })
    }

    const cfg = { url, headers, payload, formatResponse, onSuccess, onError }
    if (platform === 'wecom') {
      wecomAgentConfig(cfg)
    } else {
      wechatConfig(cfg)
    }
  },
  goHome: function () {
    window.history.go(-1)
  },
  back: function (delta) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function (opts?: {
    onSuccess?: (r: { status: string }) => void
    onError?: (r: unknown) => void
  }) {
    const { onSuccess } = opts || {}
    if (['wechatMiniProgram', 'wecomMiniProgram'].includes(Device.platform || '')) {
      ;(window.top ?? window).wx?.miniProgram?.navigateBack?.({})
    } else {
      ;(window.top ?? window).wx?.closeWindow?.()
    }
    onSuccess?.({ status: 'success' })
  },
  onBack: function (opts?: {
    onError?: (r: unknown) => void
    onSuccess?: (r: { status: string }) => boolean | void | Promise<boolean | void>
  }) {
    const { onError, onSuccess } = opts || {}
    ;(window.top ?? window).wx?.onHistoryBack?.(() => {
      const back = async () => {
        let isBack = await onSuccess?.({ status: 'success' })
        // 不允许返回, 则需要再次监听返回
        if (isBack === false) {
          this.onBack({ onError, onSuccess })
        }
        // 允许返回
        else {
          this.back(-1)
        }
      }

      back()
      return false
    })
  },
  openLocation: function (opts?: {
    latitude?: number
    longitude?: number
    type?: string
    name?: string
    address?: string
    scale?: number
    onSuccess?: (r: { status: string }) => void
    onError?: (r: { status: string; message?: string }) => void
  }) {
    const { latitude, longitude, type, name, address, scale, onSuccess, onError } = opts || {}
    if (!latitude || !longitude || !type) return
    if (Device.device === 'pc' || Device.platform === 'wechat') {
      let message = `WeChat ${LocaleUtil.locale(
        'openLocation仅可在企业微信或APP中使用',
        'lyrixi_0e963a39eb4b363f9465618162b7d7d5',

        ['openLocation']
      )}`
      Toast.show({
        content: message
      })
      onError?.({ status: 'error', message: message })
      return
    }

    let coord = formatOpenLocationCoord({ latitude, longitude, type })
    console.log('调用企业微信地图...', { latitude, longitude, type, name, address, scale })

    ;(window.top ?? window).wx?.openLocation?.({
      latitude: coord.latitude, // 纬度，浮点数，范围为90 ~ -90
      longitude: coord.longitude, // 经度，浮点数，范围为180 ~ -180。
      name: name, // 位置名
      address: address, // 地址详情说明
      scale: scale || 12, // 地图缩放级别,整型值,范围从1~28。默认为最大
      success: () => {
        onSuccess?.({ status: 'success' })
      },
      fail: (error) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `WeChat ${LocaleUtil.locale('打开地图失败', 'lyrixi_3dd680a6b28a8b59516034e54bc595b7')}`
        })
      }
    })
  },
  getLocation: function (opts?: {
    type?: string
    onSuccess?: (r: Record<string, unknown>) => void
    onError?: (r: { status: string; message?: string }) => void
    onCancel?: (r: { status: string; message?: string }) => void
  }) {
    const { type, onSuccess, onError, onCancel } = opts || {}
    if (Device.device === 'pc') {
      console.log('PC端微信不支持定位...', type)
      return
    }

    console.log('调用微信定位...', type)
    ;(window.top ?? window).wx?.getLocation?.({
      type: type,
      success: (res) => {
        console.error('微信定位成功', res)
        onSuccess?.({
          status: 'success',
          longitude: res.longitude,
          latitude: res.latitude,
          type: type || 'gcj02',
          accuracy: res.accuracy
        })
      },
      fail: (error) => {
        console.error('微信定位失败', error)
        onError?.({ status: 'error', message: error?.errMsg || '' })
      },
      cancel: (error) => {
        console.error('拒绝微信定位', error)
        onCancel?.({ status: 'cancel', message: error?.errMsg || '' })
      },
    })
  },
  scanCode: function (opts?: {
    scanType?: string[]
    onSuccess?: (r: { status: string; resultStr?: string }) => void
    onError?: (r: { status: string; message?: string }) => void
    onCancel?: (r: { status: string; message?: string }) => void
  }) {
    const { scanType, onSuccess, onError, onCancel } = opts || {}
    if (Device.device === 'pc') {
      Toast.show({
        content: `WeChat ${LocaleUtil.locale(
          'scanQRCode仅可在移动端微信或APP中使用',
          'lyrixi_035ccd9e16f7b411f76b8369ce82e0a7'
        )}`
      })
      return
    }

    let desc: string[] = []
    if (scanType?.includes('qrCode')) {
      desc.push(`WeChat ${LocaleUtil.locale('二维码', 'lyrixi_22b03c024d815ad327e8b95d684ced38')}`)
    }
    if (scanType?.includes('barCode')) {
      desc.push(`WeChat ${LocaleUtil.locale('条码', 'lyrixi_39f76a9bd32adf43a7200f93ff35a2f5')}`)
    }

    ;(window.top ?? window).wx?.scanQRCode?.({
      needResult: 1,
      scanType: scanType || ['qrCode', 'barCode'],
      desc: desc.join('/'),
      success: (res) => {
        let resultStr = res.resultStr
        if (res.resultStr.indexOf('QR,') >= 0) {
          resultStr = res.resultStr.substring('QR,'.length)
        } else if (res.resultStr.indexOf('EAN_13,') >= 0) {
          resultStr = res.resultStr.substring('EAN_13,'.length)
        } else if (res.resultStr.indexOf('EAN_8,') >= 0) {
          resultStr = res.resultStr.substring('EAN_8,'.length)
        } else if (res.resultStr.indexOf('AZTEC,') >= 0) {
          resultStr = res.resultStr.substring('AZTEC,'.length)
        } else if (res.resultStr.indexOf('DATAMATRIX,') >= 0) {
          resultStr = res.resultStr.substring('DATAMATRIX,'.length)
        } else if (res.resultStr.indexOf('UPCA,') >= 0) {
          resultStr = res.resultStr.substring('UPCA,'.length)
        } else if (res.resultStr.indexOf('UPC_A,') >= 0) {
          resultStr = res.resultStr.substring('UPC_A,'.length)
        } else if (res.resultStr.indexOf('UPCE,') >= 0) {
          resultStr = res.resultStr.substring('UPCE,'.length)
        } else if (res.resultStr.indexOf('UPC_E,') >= 0) {
          resultStr = res.resultStr.substring('UPC_E,'.length)
        } else if (res.resultStr.indexOf('CODABAR,') >= 0) {
          resultStr = res.resultStr.substring('CODABAR,'.length)
        } else if (res.resultStr.indexOf('CODE_39,') >= 0) {
          resultStr = res.resultStr.substring('CODE_39,'.length)
        } else if (res.resultStr.indexOf('CODE_93,') >= 0) {
          resultStr = res.resultStr.substring('CODE_93,'.length)
        } else if (res.resultStr.indexOf('CODE_128,') >= 0) {
          resultStr = res.resultStr.substring('CODE_128,'.length)
        } else if (res.resultStr.indexOf('ITF,') >= 0) {
          resultStr = res.resultStr.substring('ITF,'.length)
        } else if (res.resultStr.indexOf('MAXICODE,') >= 0) {
          resultStr = res.resultStr.substring('MAXICODE,'.length)
        } else if (res.resultStr.indexOf('PDF_417,') >= 0) {
          resultStr = res.resultStr.substring('PDF_417,'.length)
        } else if (res.resultStr.indexOf('RSS_14,') >= 0) {
          resultStr = res.resultStr.substring('RSS_14,'.length)
        } else if (res.resultStr.indexOf('RSSEXPANDED,') >= 0) {
          resultStr = res.resultStr.substring('RSSEXPANDED,'.length)
        }
        onSuccess?.({
          status: 'success',
          resultStr: resultStr
        })
      },
      fail: (error) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      },
      cancel: (error) => {
        onCancel?.({ status: 'cancel', message: error?.errMsg || '' })
      }
    })
  },
  chooseMedia: function (opts?: {
    count?: number
    sourceType?: string[]
    sizeType?: string[]
    mediaType?: string[]
    maxDuration?: number
    onSuccess?: (r: { status: string; localFiles?: unknown[] }) => void
    onError?: (r: { status: string; message?: string; code?: string }) => void
    onCancel?: (r: { status: string; message?: string }) => void
  }) {
    const { count, sourceType, sizeType, mediaType, maxDuration, onSuccess, onError, onCancel } =
      opts || {}
    if (Device.device === 'pc') {
      let message = `WeChat ${LocaleUtil.locale(
        'chooseImage仅可在移动端微信或APP中使用',
        'lyrixi_0d4b28b9305da17cfaae5c59beeb647f'
      )}`
      Toast.show({
        content: message
      })
      onError?.({ status: 'error', code: 'PC_NOT_IMPLENMENTED', message: message })
      return
    }

    const handleSuccess = async function (res) {
      // res.localIds 为数组，每一项是本地临时图片ID
      let localFiles: Array<Record<string, unknown>> = []
      for (let localId of res?.localIds) {
        // 缩略图用base64显示, 非缩略图用localId显示
        let preview = await getPreview(localId)
        let localFile = {
          fileThumbnail: preview,
          fileUrl: localId,
          filePath: localId,
          fileType: 'image'
        }
        localFiles.push(localFile)
      }
      onSuccess?.({
        status: 'success',
        localFiles: localFiles
      })
    }
    const handleError = function (error) {
      onError?.({ status: 'error', message: error?.errMsg || '' })
    }

    const chooseImageParams = {
      count,
      sourceType,
      sizeType,
      success: handleSuccess,
      fail: handleError,
      cancel: (error) => {
        onCancel?.({ status: 'cancel', message: error?.errMsg || '' })
      }
    }
    console.log('调用微信chooseImage:', chooseImageParams)
    ;(window.top ?? window).wx?.chooseImage?.(chooseImageParams)

    // 测试
    // setTimeout(() => {
    //   onSuccess?.({
    //     status: 'success',
    //     localFiles: [
    //       {
    //         fileUrl: '111',
    //         filePath: '111',
    //         fileType: 'image'
    //       },
    //       {
    //         fileUrl: '222',
    //         filePath: '222',
    //         fileType: 'image'
    //       }
    //     ]
    //   })
    // }, 1000)
  },
  uploadFile: async function (opts?: {
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
    onSuccess?: (r: unknown) => void
    onError?: (r: unknown) => void
  }) {
    const { localFile, getUploadUrl, formatHeaders, formatPayload, formatResponse, onSuccess, onError } =
      opts || {}
    if (Device.device === 'pc') {
      let message = `WeChat ${LocaleUtil.locale(
        'uploadImage仅可在移动端微信或APP中使用',
        'lyrixi_ae91b536a324063be22015b86480e967'
      )}`
      Toast.show({
        content: message
      })
      onError?.({ status: 'error', code: 'PC_NOT_IMPLENMENTED', message: message })
      return
    }

    let url = (await getUploadUrl?.({ platform: 'wechat' })) || ''
    if (!url || typeof url !== 'string') {
      onError &&
        onError({
          status: 'error',
          message: `url error`
        })
      return
    }

    console.log('调用微信uploadImage:', {
      localId: localFile?.filePath
    })

    const wx = (window.top ?? window).wx
    if (!wx?.uploadImage) return
    wx.uploadImage({
      localId: localFile?.filePath,
      isShowProgressTips: 0,
      success: async function (res) {
        let serverId = res.serverId
        if (!localFile) return
        let payload: Record<string, unknown> = {
          serverId: serverId,
          filePath: localFile.filePath,
          fileType: localFile.fileType
        }
        if (typeof formatPayload === 'function') {
          payload = (await formatPayload(payload, { platform: 'wechat' })) as Record<string, unknown>
        }
        let headers: Record<string, string> = { 'Content-Type': 'multipart/form-data' }
        if (typeof formatHeaders === 'function') {
          headers = await formatHeaders(headers, { platform: 'wechat' })
        }

        console.log('调用微信uploadServerId:', {
          url: url,
          headers: headers,
          payload: payload
        })

        let response = (await uploadServerId({
          url: url,
          headers: headers,
          payload: payload
        })) as { status: string; [key: string]: unknown }

        console.log('调用微信uploadServerId成功:', response)

        if (response.status === 'success' && typeof formatResponse === 'function') {
          response = (await formatResponse(response, { platform: 'wechat' })) as typeof response
        }

        if (response.status === 'success') {
          onSuccess?.(response)
        } else {
          onError?.(response)
        }
      },
      fail: function (error) {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      }
    })
  },
  previewMedia: function (opts?: {
    index?: number
    sources?: Array<
      Record<string, unknown> & {
        localFile?: { tempFileUrl?: string }
        fileUrl?: string
        fileName?: string
        fileSize?: number
        filePath?: string
        fileType?: string
      }
    >
    onSuccess?: (r: { status: string }) => void
    onError?: (r: { status: string; message?: string }) => void
    onCancel?: (r: { status: string; message?: string }) => void
  }) {
    const { index, sources, onSuccess, onError, onCancel } = opts || {}
    if (Device.device === 'pc') {
      Toast.show({
        content: `WeChat ${LocaleUtil.locale(
          'previewMedia仅可在移动端微信或APP中使用',
          'lyrixi_ef5f764cfc033f4bc441c4de232b2954'
        )}`
      })
      return
    }
    const srcList = sources || []
    let urls = srcList.map((item) => item?.localFile?.tempFileUrl || item?.fileUrl)
    let current = index !== undefined ? srcList[index] : undefined

    // 预览视频
    if (current?.fileType === 'video') {
      if (Device.platform === 'wecom') {
        ;(window.top ?? window).wx?.previewFile?.({
          url: current.fileUrl,
          name: current.fileName || current.filePath,
          size: current.fileSize
        })
        return
      }
      Clipboard.copyText(String(current.fileUrl ?? ''))
      return
    }

    // 预览图片
    ;(window.top ?? window).wx?.previewImage?.({
      urls: urls,
      current: urls[index || 0],
      success: () => {
        onSuccess?.({
          status: 'success'
        })
      },
      fail: (error) => {
        console.log('微信previewImage失败:', error)
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `WeChat ${LocaleUtil.locale('预览失败', 'lyrixi_6a3a5ef00db03994963efebe08432ce1')}`
        })
      },
      cancel: (error) => {
        onCancel?.({ status: 'cancel', message: error?.errMsg || '' })
      }
    })
  },
  previewFile: function (opts?: {
    fileUrl?: string
    onSuccess?: (r: { status: string }) => void
    onError?: (r: { status: string; message?: string }) => void
  }) {
    const { fileUrl, onSuccess, onError } = opts || {}
    if (Device.device === 'pc' || Device.platform === 'wechat') {
      let message = `WeChat ${LocaleUtil.locale(
        'previewFile仅可在企业微信或APP中使用',
        'lyrixi_ad0af8df508f1f949dcdc1144711b986',

        ['previewFile']
      )}`
      Toast.show({
        content: message
      })
      onError && onError({ status: 'error', message: message })
      return
    }

    ;(window.top ?? window).wx?.previewFile?.({
      url: fileUrl,
      onSuccess: () => {
        onSuccess?.({ status: 'success' })
      },
      fail: (error) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            `WeChat ${LocaleUtil.locale('预览失败', 'lyrixi_6a3a5ef00db03994963efebe08432ce1')}`
        })
      }
    })
  },
  share(opts?: {
    title?: string
    description?: string
    url?: string
    imageUrl?: string
    onSuccess?: (r?: unknown) => void
    onError?: (r?: { message?: string }) => void
  }) {
    const { title, description, url, imageUrl, onSuccess, onError } = opts || {}
    // 微信服务号中分享
    if (Device.platform === 'wechat') {
      ;(window.top ?? window).wx?.updateAppMessageShareData?.({
        title: title || '',
        desc: description || '',
        link: url || '',
        imgUrl: imageUrl || '',
        onSuccess: function (res) {
          onSuccess?.({ status: 'success' })
        },
        onError: function (err) {
          console.log('WeChat Share onError:', err)
          Toast.show({
            content:
              err?.errMsg ||
              `WeChat ${LocaleUtil.locale('分享失败', 'lyrixi_e8e25af006ef2ebbdb317e1d7c035a0f')}`
          })
          onError &&
            onError({
              message:
                err?.errMsg ||
                `WeChat ${LocaleUtil.locale('分享失败', 'lyrixi_e8e25af006ef2ebbdb317e1d7c035a0f')}`
            })
        }
      })
    }
    // 企业微信中分享
    else if (Device.platform === 'wecom') {
      ;(window.top ?? window).wx?.invoke?.(
        'shareAppMessage',
        {
          title: title || '',
          desc: description || '',
          link: url || '',
          imgUrl: imageUrl || ''
        },
        function (res: Record<string, unknown>) {
          console.log('WeCom Share result:', res)

          if (res.err_msg === 'shareAppMessage:ok') {
            onSuccess && onSuccess()
          } else {
            onError &&
              onError({
                message:
                  (typeof res.errMsg === 'string' ? res.errMsg : undefined) ||
                  `WeChat ${LocaleUtil.locale(
                    '分享失败',
                    'lyrixi_e8e25af006ef2ebbdb317e1d7c035a0f'
                  )}`
              })
          }
        }
      )
    }
    // 小程序中不支持h5分享，所以需要复制链接
    else {
      Clipboard.copyText(url || '')
      onSuccess &&
        onSuccess({
          status: 'success'
        })
    }
  }
}

export default Bridge
