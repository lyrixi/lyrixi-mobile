import _ from 'lodash'
import BridgeBase from './base'
import Device from 'library/utils/Device'

// 内库使用-start
import LocaleUtil from './../LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  ...BridgeBase,
  ready: function (callback, options) {
    ready(callback, options, this.platform)
  },
  back: function (backLvl, options) {
    BridgeBase._back(backLvl, options, Bridge)
  },
  /**
   * 定制功能
   */
  platform: 'lyrixi',
  // 自定义操作
  invoke: function (api, params, callback) {
    window.top.lyrixi?.invoke(api, params, callback)
  },
  // 获得版本信息
  getAppVersion: function () {
    return Device.platformVersion
  },
  /**
   * 打开新的窗口
   * @param {Object} params {title: '自定义标题', url: 'url', target: '_self'}}
   */
  openWindow: function (params = {}) {
    window.top.lyrixi?.openWindow(params) // eslint-disable-line
  },
  // 关闭窗口
  closeWindow: function (params) {
    window.top.lyrixi?.closeWindow(params) // eslint-disable-line
  },
  // 返回监听
  onHistoryBack: function (params) {
    window.top.lyrixi?.onHistoryBack(params) // eslint-disable-line
  },
  // 导航
  openLocation: function (params) {
    if (_.isEmpty(params)) return
    let newParams = BridgeBase._coordToFit(params)
    console.log('调用地图...', newParams)

    window.top.lyrixi?.openLocation(newParams)
  },
  /**
   * 获取当前地理位置
   * @param {Object} params
   * @prop {String} type 'wgs84'|'gcj02'坐标类型微信默认使用国际坐标'wgs84',
   * @return {Object} {latitude: '纬度', longitude: '经度', speed:'速度', accuracy:'位置精度'}
   */
  getLocation: function (params = {}) {
    if (!params.type) {
      params.type = 'gcj02'
    }
    console.log('调用定位...', params)
    window.top.lyrixi?.getLocation(params)
  },
  /**
   * 扫描二维码并返回结果
   * @param {Object} params
   * @return {Object} {resultStr: ''}
   */
  scanQRCode: function (params = {}) {
    const { needResult, scanType, desc, ...othersParams } = params || {}
    window.top.lyrixi?.scanQRCode({
      needResult: needResult || 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
      scanType: scanType || ['qrCode', 'barCode'],
      desc: desc || LocaleUtil.locale('二维码／条码'),
      ...othersParams
    })
  },
  // 文件选择
  chooseFile: function (params) {
    window.top.lyrixi?.chooseFile(params) // eslint-disable-line
  },
  // 文件上传
  uploadFile: function ({ localFile, url, header = {}, formData = {}, onSuccess, onError } = {}) {
    // Determine whether the params are valid
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
      // Hard coding is fine
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
    window.top.lyrixi?.previewFile(params) // eslint-disable-line
  },
  previewImage: function (params) {
    window.top.lyrixi?.previewImage(params) // eslint-disable-line
  }
}

export default Bridge
