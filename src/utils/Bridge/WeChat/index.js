// 官方文档: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html

import _ from 'lodash'
import back from './../utils/back'
import formatOpenLocationParams from './../utils/formatOpenLocationParams'
import wrapCallback from './../utils/wrapCallback'
import uploadServerId from './uploadServerId'
import getPreview from './getPreview'

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
  getLocation: function ({ type, onSuccess, onError } = {}) {
    if (!params?.type) {
      params.type = 'gcj02'
    }
    if (Device.device === 'pc') {
      console.log('PC端微信不支持定位...', params)
      return
    }

    console.log('调用微信定位...', params)
    window.top.wx.getLocation({
      type: type,
      success: (res) => {
        onSuccess?.({
          status: 'success',
          longitude: res.longitude,
          latitude: res.latitude,
          type: type || 'gcj02',
          accuracy: res.accuracy
        })
      },
      fail: (error) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      }
    })
  },
  scanCode: function ({ scanType, onSuccess, onError, onCancel } = {}) {
    if (Device.device === 'pc') {
      Toast.show({
        content: LocaleUtil.locale(
          'scanQRCode仅可在移动端微信或APP中使用',
          'lyrixi.scanCode.prompt'
        )
      })
      return
    }

    window.top.wx.scanQRCode({
      needResult: 1,
      scanType: scanType || ['qrCode', 'barCode'],
      desc: desc || LocaleUtil.locale('二维码／条码'),
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
        onSuccess({
          status: 'success',
          resultStr: resultStr
        })
      },
      fail: (error) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      },
      cancel: onCancel
    })
  },
  chooseMedia: function ({
    count,
    sourceType,
    sizeType,
    mediaType,
    maxDuration,
    onSuccess,
    onError,
    onCancel
  } = {}) {
    if (Device.device === 'pc') {
      let message = LocaleUtil.locale(
        'chooseImage仅可在移动端微信或APP中使用',
        'lyrixi.chooseMedia.prompt'
      )
      Toast.show({
        content: message
      })
      onError?.({ status: 'error', code: 'PC_NOT_IMPLENMENTED', message: message })
      return
    }

    const handleSuccess = async function (res) {
      // res.localIds 为数组，每一项是本地临时图片ID
      let localFiles = []
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
      cancel: onCancel
    }
    console.log('调用微信chooseImage:', chooseImageParams)
    window.top.wx.chooseImage(chooseImageParams)

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
  uploadFile: async function ({
    localFile,
    getUploadUrl,
    formatHeader,
    formatPayload,
    formatResponse,
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

    console.log('调用微信uploadImage:', {
      localId: localFile?.filePath
    })

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
          payload = await formatPayload(payload, { platform: 'wechat' })
        }
        let header = { 'Content-Type': 'multipart/form-data' }
        if (typeof formatHeader === 'function') {
          header = await formatHeader(header, { platform: 'wechat' })
        }

        console.log('调用微信uploadServerId:', {
          url: url,
          header: header,
          payload: payload
        })

        let response = await uploadServerId({
          url: url,
          header: header,
          payload: payload
        })

        console.log('调用微信uploadServerId成功:', response)

        if (response.status === 'success' && typeof formatResponse === 'function') {
          response = await formatResponse(response, { platform: 'wechat' })
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
  previewMedia: function ({ index, sources, onSuccess, onError, onCancel } = {}) {
    if (Device.device === 'pc') {
      Toast.show({
        content: LocaleUtil.locale(
          'previewMedia仅可在移动端微信或APP中使用',
          'lyrixi.previewMedia.prompt'
        )
      })
      return
    }
    let urls = sources.map((item) => item?.localFile?.tempFileUrl || item?.fileUrl)
    let current = sources?.[index]

    // 预览视频
    if (current?.fileType === 'video') {
      if (Device.platform === 'wecom') {
        window.top.wx.previewFile({
          url: current.fileUrl,
          name: current.fileName || current.filePath,
          size: current.fileSize
        })
        return
      }
      Clipboard.copyText(current.fileUrl)
      return
    }

    // 预览图片
    window.top.wx?.previewImage({
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
          message: error?.errMsg || LocaleUtil.locale('预览失败')
        })
      },
      onCancel: onCancel
    })
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
  },
  share({ title, description, url, imageUrl, onSuccess, onError } = {}) {
    // 微信服务号中分享
    if (Device.platform === 'wechat') {
      window.top.wx.updateAppMessageShareData({
        title: title || '',
        desc: description || '',
        link: url || '',
        imgUrl: imageUrl || '',
        onSuccess: function (res) {
          setOpen(true)
          onSuccess && onSuccess()
        },
        onError: function (err) {
          console.log('WeChat Share onError:', err)
          Toast.show({
            content: err?.errMsg || LocaleUtil.locale('分享失败')
          })
          onError &&
            onError({
              message: err?.errMsg || LocaleUtil.locale('分享失败')
            })
        }
      })
    }
    // 企业微信中分享
    else if (Device.platform === 'wecom') {
      window.top.wx.invoke(
        'shareAppMessage',
        {
          title: title || '',
          desc: description || '',
          link: url || '',
          imgUrl: imageUrl || ''
        },
        function (res) {
          console.log('WeCom Share result:', res)

          if (res.err_msg === 'shareAppMessage:ok') {
            onSuccess && onSuccess()
          } else {
            onError &&
              onError({
                message: res?.errMsg || LocaleUtil.locale('分享失败')
              })
          }
        }
      )
    }
    // 小程序中不支持h5分享，所以需要复制链接
    else {
      Clipboard.copyText(url)
      onSuccess &&
        onSuccess({
          status: 'success'
        })
    }
  }
}

export default Bridge
