// 官方文档: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html

import _ from 'lodash'
import back from './../utils/back'
import formatOpenLocationParams from './../utils/formatOpenLocationParams'
import wrapCallback from './../utils/wrapCallback'
import uploadServerId from './uploadServerId'
import getPreview from './getPreview'

// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import Device from './../../Device'
import Toast from './../../../components/Toast'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Device, Toast } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  load: function (callback, options) {
    const platform = Device.platform
    if (window.top.wx) {
      if (callback) {
        callback({
          status: 'success'
        })
      }
      return
    }

    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = 'defer'

    if (platform === 'wechat') {
      script.src = options.wechat?.src || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    } else if (platform === 'wechatMiniProgram') {
      script.src = options.wechatMiniProgram?.src || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    } else if (platform === 'wecom') {
      script.src = options.wecom?.src || '//res.wx.qq.com/wwopen/js/jsapi/jweixin-1.0.0.js'
    } else if (platform === 'wecomMiniProgram') {
      script.src = options.wecomMiniProgram?.src || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    }

    script.onload = function () {
      if (window.wx) {
        window.top.wx = window.wx
      }

      if (callback)
        callback({
          status: 'success'
        })
    }
    script.onerror = function () {
      if (callback) {
        callback({
          status: 'error',
          message: LocaleUtil.locale('微信js加载失败', 'lyrixi.weChat.js.load.failed')
        })
      }
    }

    if (script.src) document.body.appendChild(script)
  },
  back: function (delta) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function () {
    if (['wechatMiniProgram', 'wecomMiniProgram'].includes(Device.platform || '')) {
      window.top.wx.miniProgram.navigateBack({})
    }
    window.top.wx.closeWindow()
  },
  onHistoryBack: function (params) {
    if (typeof window.top.wx.onHistoryBack === 'function') {
      window.top.wx.onHistoryBack(params)
    }
  },
  openLocation: function (params) {
    if (Device.device === 'pc' || Device.platform === 'wechat') {
      let message = LocaleUtil.locale(
        'openLocation仅可在企业微信或APP中使用',
        'lyrixi.open.location.prompt',
        ['openLocation']
      )
      Toast.show({
        content: message
      })
      params?.onError && params.onError({ status: 'error', message: message })
      return
    }

    if (_.isEmpty(params)) return
    let newParams = formatOpenLocationParams(params)
    console.log('调用企业微信地图...', newParams)

    const wrappedParams = wrapCallback(newParams)
    window.top.wx.openLocation(wrappedParams)
  },
  getLocation: function (params = {}) {
    if (!params?.type) {
      params.type = 'gcj02'
    }
    if (Device.device === 'pc') {
      console.log('PC端微信定位...', params)
      return
    }

    console.log('调用微信定位...', params)
    const wrappedParams = wrapCallback(params)
    window.top.wx.getLocation(wrappedParams)
  },
  scanQRCode: function (params = {}) {
    if (Device.device === 'pc') {
      Toast.show({
        content: LocaleUtil.locale(
          'scanQRCode仅可在移动端微信或APP中使用',
          'lyrixi.scanQRCode.prompt'
        )
      })
      return
    }

    const { needResult, scanType, desc, onSuccess, ...othersParams } = params || {}

    const handleSuccess = onSuccess
      ? function (res) {
          let wxRes = res
          if (!params.prefix) {
            if (res.resultStr.indexOf('QR,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('QR,'.length)
            } else if (res.resultStr.indexOf('EAN_13,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('EAN_13,'.length)
            } else if (res.resultStr.indexOf('EAN_8,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('EAN_8,'.length)
            } else if (res.resultStr.indexOf('AZTEC,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('AZTEC,'.length)
            } else if (res.resultStr.indexOf('DATAMATRIX,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('DATAMATRIX,'.length)
            } else if (res.resultStr.indexOf('UPCA,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('UPCA,'.length)
            } else if (res.resultStr.indexOf('UPC_A,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('UPC_A,'.length)
            } else if (res.resultStr.indexOf('UPCE,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('UPCE,'.length)
            } else if (res.resultStr.indexOf('UPC_E,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('UPC_E,'.length)
            } else if (res.resultStr.indexOf('CODABAR,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('CODABAR,'.length)
            } else if (res.resultStr.indexOf('CODE_39,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('CODE_39,'.length)
            } else if (res.resultStr.indexOf('CODE_93,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('CODE_93,'.length)
            } else if (res.resultStr.indexOf('CODE_128,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('CODE_128,'.length)
            } else if (res.resultStr.indexOf('ITF,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('ITF,'.length)
            } else if (res.resultStr.indexOf('MAXICODE,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('MAXICODE,'.length)
            } else if (res.resultStr.indexOf('PDF_417,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('PDF_417,'.length)
            } else if (res.resultStr.indexOf('RSS_14,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('RSS_14,'.length)
            } else if (res.resultStr.indexOf('RSSEXPANDED,') >= 0) {
              wxRes.resultStr = res.resultStr.substring('RSSEXPANDED,'.length)
            }
          }
          onSuccess({
            status: 'success',
            ...wxRes
          })
        }
      : undefined

    const wrappedParams = wrapCallback({
      needResult: needResult || 1,
      scanType: scanType || ['qrCode', 'barCode'],
      desc: desc || '二维码／条码',
      onSuccess: handleSuccess,
      ...othersParams
    })

    window.top.wx.scanQRCode(wrappedParams)
  },
  chooseMedia: function (params) {
    if (Device.device === 'pc') {
      let message = LocaleUtil.locale(
        'chooseImage仅可在移动端微信或APP中使用',
        'lyrixi.chooseMedia.prompt'
      )
      Toast.show({
        content: message
      })
      params?.onError?.({ status: 'PC_NOT_IMPLENMENTED', message: message })
      return
    }

    const handleSuccess = async function (res) {
      // res.localIds 为数组，每一项是本地临时图片ID
      let localFiles = []
      for (let localId of res?.localIds) {
        let localFile = { path: localId }
        let preview = await getPreview(localId)
        localFile.fileUrl = preview
        localFiles.push(localFile)
      }
      params.onSuccess &&
        params.onSuccess({
          status: 'success',
          localFiles: localFiles
        })
    }
    const handleError = function (error) {
      params.onError && params.onError({ status: 'error', message: error?.errMsg || '' })
    }

    window.top.wx.chooseImage({
      ...params,
      success: handleSuccess,
      fail: handleError
    })
  },
  uploadFile: async function ({
    localFile,
    getUploadUrl,
    formatHeader,
    formatPayload,
    formatResult,
    onSuccess,
    onError
  } = {}) {
    if (Device.device === 'pc') {
      let message = LocaleUtil.locale(
        'uploadImage仅可在移动端微信或APP中使用',
        'lyrixi.uploadMedia.prompt'
      )
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

    window.top.wx.uploadImage({
      localId: localFile?.filePath,
      isShowProgressTips: 0,
      success: async function (res) {
        let serverId = res.serverId
        let payload = {
          serverId: serverId,
          filePath: localFile.filePath,
          fileType: localFile.fileType
        }
        if (typeof formatPayload === 'function') {
          payload = await formatPayload(payload, { platform: 'dingtalk' })
        }
        let header = { 'Content-Type': 'multipart/form-data' }
        if (typeof formatHeader === 'function') {
          header = await formatHeader(header, { platform: 'dingtalk' })
        }

        let result = await uploadServerId({
          url: url,
          header: header,
          payload: payload
        })

        if (typeof formatResult === 'function') {
          result = await formatResult(result, { platform: 'wechat' })
        }

        onSuccess && onSuccess(result)
      },
      fail: function (error) {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      }
    })
  },
  previewMedia: function (params) {
    if (Device.device === 'pc') {
      Toast.show({
        content: LocaleUtil.locale(
          'previewMedia仅可在移动端微信或APP中使用',
          'lyrixi.previewMedia.prompt'
        )
      })
      return
    }
    const wrappedParams = wrapCallback({
      urls: params?.sources.map((item) => item.fileUrl),
      index: params.index || 0,
      onSuccess: params?.onSuccess,
      onError: params?.onError
    })
    window.top.wx.previewImage(wrappedParams)
  },
  previewFile: function ({ fileUrl, onSuccess, onError }) {
    if (Device.device === 'pc' || Device.platform === 'wechat') {
      let message = LocaleUtil.locale(
        'previewFile仅可在企业微信或APP中使用',
        'lyrixi.previewFile.prompt',
        ['previewFile']
      )
      Toast.show({
        content: message
      })
      onError && onError({ status: 'error', message: message })
      return
    }

    const wrappedParams = wrapCallback({ url: fileUrl, onSuccess: onSuccess, onError: onError })
    window.top.wx.previewFile(wrappedParams)
  }
}

export default Bridge
