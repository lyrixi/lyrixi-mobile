import _ from 'lodash'
import back from './../utils/back'
import formatOpenLocationParams from './../utils/formatOpenLocationParams'

// 内库使用-start
import LocaleUtil from './../LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  // 特有方法
  setTitle: function (params) {
    window.top.lyrixi?.setTitle(params)
  },
  openWindow: function (params = {}) {
    window.top.lyrixi?.openWindow(params)
  },
  // 通用方法
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
  chooseMedia: function (params) {
    window.top.lyrixi?.chooseMedia(params)
  },
  uploadFile: function (params) {
    window.top.lyrixi.uploadFile(params)
  },
  previewMedia: function (params) {
    window.top.lyrixi?.previewMedia(params)
  },
  previewFile: function (params) {
    window.top.lyrixi?.previewFile(params)
  }
}

export default Bridge
