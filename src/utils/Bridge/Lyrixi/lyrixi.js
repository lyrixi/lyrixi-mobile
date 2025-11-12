import _ from 'lodash'
import back from './../utils/back'
import formatOpenLocationParams from './../utils/formatOpenLocationParams'
import wrapCallback from './../utils/wrapCallback'

// 内库使用-start
import LocaleUtil from './../LocaleUtil'
import Device from './../Device'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Device } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  platform: 'lyrixi',
  load: function (callback, options) {
    if (window.top.lyrixi) {
      if (callback) callback()
      return
    }

    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = 'defer'
    script.src =
      options.lyrixi?.src ||
      'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/lyrixi/lyrixi-0.0.1.js'

    script.onload = function () {
      if (window.lyrixi) {
        window.top.lyrixi = window.lyrixi
      }

      if (callback) {
        callback({
          status: 'success'
        })
      }
    }
    script.onerror = function () {
      if (callback) {
        callback({
          status: 'error',
          message: LocaleUtil.locale('乐栖js加载失败', 'lyrixi_lyrixi_js_load_failed')
        })
      }
    }

    if (script.src) document.body.appendChild(script)
  },
  back: function (delta) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function (params) {
    window.top.lyrixi?.closeWindow(params)
  },
  onHistoryBack: function (params) {
    window.top.lyrixi?.onHistoryBack(params)
  },
  openWindow: function (params = {}) {
    window.top.lyrixi?.openWindow(params)
  },
  openLocation: function (params) {
    if (_.isEmpty(params)) return
    let newParams = formatOpenLocationParams(params)
    console.log('调用地图...', newParams)

    window.top.lyrixi?.openLocation(newParams)
  },
  getLocation: function (params = {}) {
    if (!params.type) {
      params.type = 'gcj02'
    }
    console.log('调用定位...', params)
    window.top.lyrixi?.getLocation(params)
  },
  scanQRCode: function (params = {}) {
    const { needResult, scanType, desc, ...othersParams } = params || {}
    window.top.lyrixi?.scanQRCode({
      scanType: scanType || ['qrCode', 'barCode'],
      desc: desc || LocaleUtil.locale('二维码／条码'),
      ...othersParams
    })
  },
  chooseImage: function (params) {
    window.top.lyrixi?.chooseImage(params)
  },
  uploadImage: function (params) {
    window.top.lyrixi?.uploadFile(params)
  },
  previewImage: function (params) {
    window.top.lyrixi?.previewImage(params)
  },
  chooseFile: function (params) {
    window.top.lyrixi?.chooseFile(params)
  },
  uploadFile: function ({ localFile, url, header = {}, formData = {}, onSuccess, onError } = {}) {
    if (!localFile?.fileType || !localFile?.filePath) {
      onError &&
        onError({
          status: 'error',
          message: `localFile error`
        })
      return
    }
    if (!url || typeof url !== 'string') {
      onError &&
        onError({
          status: 'error',
          message: `url error`
        })
      return
    }

    console.log('调用乐栖uploadImage:', {
      url: url,
      header: header,
      fileName: localFile.fileName,
      filePath: localFile.filePath,
      fileType: localFile.fileType,
      formData: formData
    })

    const wrappedParams = wrapCallback({
      url: url,
      header: header,
      fileName: localFile.fileName,
      filePath: localFile.filePath,
      fileType: localFile.fileType,
      formData: formData,
      onSuccess: onSuccess,
      onError: onError
    })

    window.top.lyrixi.uploadFile(wrappedParams)
  },
  previewFile: function (params) {
    window.top.lyrixi?.previewFile(params)
  },
  invoke: function (api, params, callback) {
    window.top.lyrixi?.invoke(api, params, callback)
  },
  getAppVersion: function () {
    return Device.platformVersion
  }
}

export default Bridge
