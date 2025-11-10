// 官方文档: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html

import _ from 'lodash'
import BridgeBase from './base'
import back from './utils/back'
import ready from './utils/ready'
import coordToFit from './utils/coordToFit'
import wrapCallback from './utils/wrapCallback'

// 内库使用-start
import LocaleUtil from './../LocaleUtil'
import Device from './../Device'
import Toast from './../../components/Toast'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Device, Toast } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  ...BridgeBase,
  ready: function (callback, options) {
    ready(callback, options, this.platform)
  },
  back: function (backLvl, options) {
    back(backLvl, options, Bridge)
  },
  /**
   * 定制功能
   */

  // 自定义操作
  invoke: function (api, params, callback) {
    if (!window.top.wx.invoke) {
      console.log('没有wx.invoke的方法')
      return
    }
    window.top.wx.invoke(api, params, callback)
  },
  // 关闭窗口
  closeWindow: function () {
    // 小程序内web-view关闭
    if (['wechatMiniprogram', 'wecomMiniprogram'].includes(Device.platform || '')) {
      window.top.wx.miniProgram.navigateBack({}) // eslint-disable-line
    }
    // 微信关闭
    window.top.wx.closeWindow() // eslint-disable-line
  },
  // 返回监听
  onHistoryBack: function (params) {
    if (typeof window.top.wx.onHistoryBack === 'function') {
      window.top.wx.onHistoryBack(params) // eslint-disable-line
    }
  },
  // 地图查看
  openLocation: function (params) {
    // 微信PC端不支持地图查看
    if (Device.device === 'pc' || this.platform === 'wechat') {
      let message = LocaleUtil.locale(
        'openLocation仅可在企业微信或APP中使用',
        'lyrixi_open_location_prompt',

        ['openLocation']
      )
      Toast.show({
        content: message
      })
      params?.onError && params.onError({ status: 'error', message: message })
      return
    }

    if (_.isEmpty(params)) return
    let newParams = coordToFit(params)
    console.log('调用企业微信地图...', newParams)

    const wrappedParams = wrapCallback(newParams)
    window.top.wx.openLocation(wrappedParams) // eslint-disable-line
  },
  /**
   * 获取当前地理位置
   * @param {Object} params
   * @prop {String} type 'wgs84'|'gcj02'坐标类型微信默认使用国际坐标'wgs84',
   * @return {Object} {latitude: '纬度', longitude: '经度', speed:'速度', accuracy:'位置精度'}
   */
  getLocation: function (params = {}) {
    if (!params?.type) {
      params.type = 'gcj02'
    }
    // 微信PC端不支持定位
    if (Device.device === 'pc') {
      console.log('PC端微信定位...', params)
      Bridge.getBrowserLocation?.(params)
      return
    }

    console.log('调用微信定位...', params)
    const wrappedParams = wrapCallback(params)
    window.top.wx.getLocation(wrappedParams)
  },
  /*
   * 扫描二维码并返回结果
   * 返回：{resultStr:''}
   * */
  scanQRCode(params = {}) {
    // 微信PC端不支持扫码
    if (Device.device === 'pc') {
      Toast.show({
        content: LocaleUtil.locale(
          'scanQRCode仅可在移动端微信或APP中使用',
          'lyrixi_scanQRCode_prompt',

          LocaleUtil.locale('', 'lyrixi_scancode')
        )
      })
      return
    }

    const { needResult, scanType, desc, onSuccess, ...othersParams } = params || {}

    // 自定义success处理，但要包装成标准格式
    const customSuccess = onSuccess
      ? function (res) {
          let wxRes = res
          // 如果没有设置prefix为false或者空,则清除前缀
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
          // 调用原始回调，传入标准格式
          onSuccess({
            status: 'success',
            ...wxRes
          })
        }
      : undefined

    const wrappedParams = wrapCallback({
      needResult: needResult || 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
      scanType: scanType || ['qrCode', 'barCode'],
      desc: desc || '二维码／条码',
      onSuccess: customSuccess,
      ...othersParams
    })

    window.top.wx.scanQRCode(wrappedParams)
  },
  chooseImage: function (params) {
    // 微信PC端不支持扫码
    if (Device.device === 'pc') {
      let message = LocaleUtil.locale(
        'chooseImage仅可在移动端微信或APP中使用',
        'lyrixi_chooseImage_prompt',

        LocaleUtil.locale('', 'lyrixi_chooseimage')
      )
      Toast.show({
        content: message
      })
      params?.onError?.({ status: 'PC_NOT_IMPLENMENTED', message: message })
      return
    }

    const wrappedParams = wrapCallback(params)
    window.top.wx.chooseImage(wrappedParams)
  },
  uploadImage: function (params) {
    // 微信PC端不支持扫码
    if (Device.device === 'pc') {
      let message = LocaleUtil.locale(
        'uploadImage仅可在移动端微信或APP中使用',
        'lyrixi_uploadImage_prompt',

        LocaleUtil.locale('', 'lyrixi_uploadimage')
      )
      Toast.show({
        content: message
      })
      params?.onError?.({ status: 'error', code: 'PC_NOT_IMPLENMENTED', message: message })
      return
    }
    const wrappedParams = wrapCallback(params)
    window.top.wx.uploadImage(wrappedParams)
  },
  previewImage: function (params) {
    // 微信PC端不支持扫码
    if (Device.device === 'pc') {
      Toast.show({
        content: LocaleUtil.locale(
          'previewImage仅可在移动端微信或APP中使用',
          'lyrixi_previewImage_prompt',

          LocaleUtil.locale('', 'lyrixi_previewimage')
        )
      })
      return
    }
    const wrappedParams = wrapCallback(params)
    window.top.wx.previewImage(wrappedParams)
  },
  /**
   * 文件操作: 预览文件
   * @param {Object} params
   * params: {
   *  url: '', // 需要预览文件的地址(必填，可以使用相对路径)
   *  name: '', // 需要预览文件的文件名(不填的话取url的最后部分)
   *  size: 1048576 // 需要预览文件的字节大小(必填)
   * }
   */
  previewFile: function (params) {
    // 微信PC端不支持预览文件
    if (Device.device === 'pc' || this.platform === 'wechat') {
      let message = LocaleUtil.locale(
        'previewFile仅可在企业微信或APP中使用',
        'lyrixi_previewFile_prompt',

        ['previewFile']
      )
      Toast.show({
        content: message
      })
      params?.onError && params.onError({ status: 'error', message: message })
      return
    }

    const wrappedParams = wrapCallback(params)
    window.top.wx.previewFile(wrappedParams)
  }
}

export default Bridge
