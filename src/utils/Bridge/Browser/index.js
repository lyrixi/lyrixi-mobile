import uploadFile from './uploadFile'
import back from './../utils/back'

// 内库使用-start
import GeoUtil from './../../GeoUtil'
import LocaleUtil from './../../LocaleUtil'
import Device from './../../Device'
import Toast from './../../../components/Toast'
// 内库使用-end

/* 测试使用-start
import { GeoUtil, Device, Toast, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

let Browser = {
  platform: Device.platform,
  load: function (callback) {
    if (callback)
      callback({
        status: 'success'
      })
  },
  back: function (delta) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function () {
    window.history.go(-1)
  },
  onHistoryBack: function () {
    Toast.show({
      content: LocaleUtil.locale(
        'onHistoryBack仅可在企业微信或APP中使用',
        'lyrixi_onHistoryBack_prompt'
      )
    })
  },
  setTitle: function (params) {
    if (params && params.title) {
      if (typeof params.title === 'string') {
        window.top.document.title = params.title
      } else if (typeof params.title === 'function') {
        params.title()
      }
    }
  },
  openWindow: function (params = {}) {
    let url = params.url
    if (url && url.indexOf('h5:') === 0) url = url.replace(/^h5:/, '')
    else if (url && url.indexOf('webview:') === 0) url = url.replace(/^webview:/, '')
    if (params.target === '_self') {
      window.location.replace(url)
      return
    }
    if (Device.device === 'pc') {
      window.open(url)
      return
    }
    if (url) window.location.href = url
  },
  goHome: function () {
    window.history.go(-1)
  },
  tel: function (number) {
    if (Device.device === 'pc') {
      Toast.show({ content: LocaleUtil.locale('此功能仅可在手机中使用', 'lyrixi_only_mobile') })
      return
    }
    if (isNaN(number)) return
    window.location.href = 'tel:' + number
  },
  openLocation: function (params) {
    let message = LocaleUtil.locale(
      'openLocation仅可在企业微信或APP中使用',
      'lyrixi_open_location_prompt',
      ['openLocation']
    )
    Toast.show({
      content: message
    })
    params?.onError && params.onError({ status: 'error', message: message })
  },
  getLocation: function (params = {}) {
    this.getBrowserLocation(params)
  },
  getBrowserLocation: function (params) {
    if (!params.type) {
      params.type = 'gcj02'
    }

    if (this.debug) {
      console.log('模拟浏览器定位...', params)
      setTimeout(() => {
        let res = {
          status: 'success',
          message: '',
          speed: '0.0',
          accuracy: '3.0.0',
          type: params.type || 'wgs84'
        }
        if (params?.type === 'gcj02') {
          res.latitude = 39.909187
          res.longitude = 116.397451
        } else {
          res.latitude = 39.907783490367706
          res.longitude = 116.39120737493609
        }
        if (params.onSuccess) params.onSuccess(res)
      }, 2000)
      return
    }

    if (navigator.geolocation) {
      console.log('调用浏览器定位...', params)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let longitude = position.coords.longitude
          let latitude = position.coords.latitude
          if (!longitude || !latitude) {
            if (params.onError)
              params.onError({
                status: 'error',
                code: 'LATLNG_ERROR',
                message: `${LocaleUtil.locale('定位失败', 'lyrixi_location_failed')}`
              })
          }

          console.log('调用浏览器定位成功', longitude, latitude)
          if (params.type === 'gcj02') {
            const points = GeoUtil.coordtransform([longitude, latitude], 'wgs84', 'gcj02')
            longitude = points[0]
            latitude = points[1]
          }
          let res = {
            status: 'success',
            message: '',
            speed: position.coords.speed,
            accuracy: position.coords.accuracy,
            longitude: longitude,
            latitude: latitude,
            type: params.type || 'wgs84'
          }
          if (params.onSuccess) params.onSuccess(res)
        },
        (error) => {
          let code = ''
          let message = ''
          switch (error.code) {
            case error.PERMISSION_DENIED:
              code = 'PERMISSION_DENIED'
              message = `${LocaleUtil.locale(
                '定位失败,用户拒绝请求地理定位',
                'lyrixi_location_permission_denied_error'
              )}`
              break
            case error.POSITION_UNAVAILABLE:
              code = 'POSITION_UNAVAILABLE'
              console.log(
                `${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'lyrixi_location_unavailable_error'
                )}`
              )
              message = `${LocaleUtil.locale(
                '定位失败,位置信息是不可用',
                'lyrixi_location_unavailable_error'
              )}`
              break
            case error.TIMEOUT:
              code = 'TIMEOUT'
              console.log(
                `${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'lyrixi_location_unavailable_error'
                )}`
              )
              message = `${LocaleUtil.locale(
                '定位失败,请求获取用户位置超时',
                'lyrixi_location_timeout_error'
              )}`
              break
            case error.UNKNOWN_ERROR:
              code = 'UNKNOWN_ERROR'
              console.log(
                `${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'lyrixi_location_unavailable_error'
                )}`
              )
              message = `${LocaleUtil.locale(
                '定位失败,定位系统失效',
                'lyrixi_location_unknown_error'
              )}`
              break
            default:
              code = 'LOCATION_ERROR'
              console.log(`${LocaleUtil.locale('定位失败', 'lyrixi_location_failed')}`)
              message = `${LocaleUtil.locale('定位失败', 'lyrixi_location_failed')}`
          }
          let res = { status: 'error', code: code, message: message }
          console.log('调用浏览器定位失败', res)
          if (params.onError) params.onError(res)
        },
        {
          enableHighAccuracy: true,
          timeout: 8000,
          maximumAge: 0
        }
      )
    } else {
      console.log(`${LocaleUtil.locale('当前浏览器不支持定位', 'lyrixi_location_not_supported')}`)
      let res = {
        status: 'error',
        code: 'LOCATION_NOT_SUPPORTED_ERROR',
        message: `${LocaleUtil.locale('当前浏览器不支持定位', 'lyrixi_location_not_supported')}`
      }
      if (params.onError) params.onError(res)
    }
    return
  },
  scanQRCode: function (params = {}) {
    if (!this.debug) {
      Toast.show({
        content: LocaleUtil.locale('此功能仅可在微信或APP中使用', 'lyrixi_only_app_wechat', [
          'scanQRCode'
        ])
      })
      if (params.onError)
        params.onError({
          status: 'error',
          message: `scanQRCode:${LocaleUtil.locale(
            '扫码失败',
            'lyrixi_scanCode_failed'
          )}, ${LocaleUtil.locale('请稍后重试', 'lyrixi_try_again_later')}`
        })
      return
    }
    setTimeout(function () {
      if (params.onSuccess)
        params.onSuccess({ status: 'success', resultStr: '504823170310092750280333' })
    }, 500)
  },
  chooseMedia: function (params) {
    let message = LocaleUtil.locale(
      'chooseMedia仅可在移动端微信或APP中使用',
      'lyrixi_chooseMedia_prompt',
      ['chooseMedia']
    )
    Toast.show({
      content: message
    })
    params?.onError && params.onError({ status: 'error', message: message })
  },
  uploadFile: async function ({ localFile, url, header, payload, onSuccess, onError } = {}) {
    let result = await uploadFile({
      url: url,
      header: header,
      payload: {
        filePath: localFile.filePath,
        fileType: localFile.fileType,
        ...payload
      }
    })

    if (result.status === 'success') {
      onSuccess && onSuccess(result)
    } else {
      onError && onError(result)
    }
  },
  previewMedia: function (params = {}) {
    let message = LocaleUtil.locale(
      'previewMedia仅可在移动端微信或APP中使用',
      'lyrixi_previewMedia_prompt',
      ['previewMedia']
    )
    Toast.show({
      content: message
    })
    params?.onError && params.onError({ status: 'error', message: message })
  },
  previewFile: function ({ fileUrl, onSuccess, onError }) {
    let message = LocaleUtil.locale(
      'previewFile仅可在企业微信或APP中使用',
      'lyrixi_previewFile_prompt',
      ['previewFile']
    )
    Toast.show({
      content: message
    })
    onError && onError({ status: 'error', message: message })
  }
}
export default Browser
