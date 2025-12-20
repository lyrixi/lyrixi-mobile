import uploadFile from './uploadFile'
import back from './../utils/back'

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
  closeWindow: function ({ onSuccess, onError } = {}) {
    window.history.go(-1)
    onSuccess?.({ status: 'success' })
  },
  onHistoryBack: function () {
    Toast.show({
      content: LocaleUtil.locale(
        'onHistoryBack仅可在企业微信或APP中使用',
        'lyrixi.onHistoryBack.prompt'
      )
    })
  },
  setTitle: function ({ title, onSuccess, onError } = {}) {
    window.top.document.title = title
    onSuccess?.({ status: 'success' })
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
      Toast.show({ content: LocaleUtil.locale('此功能仅可在手机中使用', 'lyrixi.only.mobile') })
      return
    }
    if (isNaN(number)) return
    window.location.href = 'tel:' + number
  },
  openLocation: function ({
    latitude,
    longitude,
    type,
    name,
    address,
    scale,
    onSuccess,
    onError
  } = {}) {
    if (!latitude || !longitude || !type) return
    let message = LocaleUtil.locale(
      'openLocation仅可在企业微信或APP中使用',
      'lyrixi.open.location.prompt',
      ['openLocation']
    )
    Toast.show({
      content: message
    })
    onError?.({ status: 'error', message: message })
  },
  getLocation: function (params = {}) {
    this.getBrowserLocation(params)
  },
  getBrowserLocation: function ({ type, onSuccess, onError } = {}) {
    if (this.debug) {
      console.log('模拟浏览器定位...', type)
      setTimeout(() => {
        let res = {
          status: 'success',
          message: '',
          speed: '0.0',
          accuracy: '3.0.0',
          type: type || 'wgs84'
        }
        if (type === 'gcj02') {
          res.latitude = 39.909187
          res.longitude = 116.397451
        } else {
          res.latitude = 39.907783490367706
          res.longitude = 116.39120737493609
        }
        onSuccess?.(res)
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
              message: `${LocaleUtil.locale('定位失败', 'lyrixi.location.failed')}`
            })
          }

          console.log('调用浏览器定位成功', { type, longitude, latitude })
          if (type === 'gcj02') {
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
            type: type || 'wgs84'
          }
          onSuccess?.(res)
        },
        (error) => {
          let code = ''
          let message = ''
          switch (error.code) {
            case error.PERMISSION_DENIED:
              code = 'PERMISSION_DENIED'
              message = `${LocaleUtil.locale(
                '定位失败,用户拒绝请求地理定位',
                'lyrixi.location.permission.denied.error'
              )}`
              break
            case error.POSITION_UNAVAILABLE:
              code = 'POSITION_UNAVAILABLE'
              console.log(
                `${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'lyrixi.location.unavailable.error'
                )}`
              )
              message = `${LocaleUtil.locale(
                '定位失败,位置信息是不可用',
                'lyrixi.location.unavailable.error'
              )}`
              break
            case error.TIMEOUT:
              code = 'TIMEOUT'
              console.log(
                `${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'lyrixi.location.unavailable.error'
                )}`
              )
              message = `${LocaleUtil.locale(
                '定位失败,请求获取用户位置超时',
                'lyrixi.location.timeout.error'
              )}`
              break
            case error.UNKNOWN_ERROR:
              code = 'UNKNOWN_ERROR'
              console.log(
                `${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'lyrixi.location.unavailable.error'
                )}`
              )
              message = `${LocaleUtil.locale(
                '定位失败,定位系统失效',
                'lyrixi.location.unknown.error'
              )}`
              break
            default:
              code = 'LOCATION_ERROR'
              console.log(`${LocaleUtil.locale('定位失败', 'lyrixi.location.failed')}`)
              message = `${LocaleUtil.locale('定位失败', 'lyrixi.location.failed')}`
          }
          let res = { status: 'error', code: code, message: message }
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
      let res = {
        status: 'error',
        code: 'LOCATION_NOT_SUPPORTED_ERROR',
        message: LocaleUtil.locale('此平台不支持{0}', 'lyrixi.bridge.not.supported', [
          'getLocation'
        ])
      }
      onError?.(res)
    }
    return
  },
  scanCode: function ({ scanType, onSuccess, onError, onCancel } = {}) {
    if (!this.debug) {
      Toast.show({
        content: LocaleUtil.locale('此平台不支持{0}', 'lyrixi.bridge.not.supported', ['scanCode'])
      })
      if (onError)
        onError({
          status: 'error',
          message: `scanCode:${LocaleUtil.locale(
            '扫码失败',
            'lyrixi.scanCode.failed'
          )}, ${LocaleUtil.locale('请稍后重试', 'lyrixi.try.again.later')}`
        })
      return
    }
    setTimeout(function () {
      if (onSuccess) onSuccess({ status: 'success', resultStr: '504823170310092750280333' })
    }, 500)
  },
  chooseMedia: function () {
    let message = LocaleUtil.locale('此平台不支持{0}', 'lyrixi.bridge.not.supported', [
      'chooseMedia'
    ])
    Toast.show({
      content: message
    })
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
    let url = (await getUploadUrl?.({ platform: 'browser' })) || ''
    if (!url || typeof url !== 'string') {
      onError &&
        onError({
          status: 'error',
          message: `url error`
        })
      return
    }
    let payload = { filePath: localFile.filePath, fileType: localFile.fileType }
    if (typeof formatPayload === 'function') {
      payload = await formatPayload(payload, { platform: 'browser' })
    }
    let header = { 'Content-Type': 'multipart/form-data' }
    if (typeof formatHeader === 'function') {
      header = await formatHeader(header, { platform: 'browser' })
    }

    let response = await uploadFile({
      url: url,
      header: header,
      payload: payload
    })

    if (response.status === 'success' && typeof formatResponse === 'function') {
      response = await formatResponse(response, { platform: 'browser' })
    }

    if (response.status === 'success') {
      onSuccess?.(response)
    } else {
      onError?.(response)
    }
  },
  previewMedia: function ({ index, sources, onSuccess, onError, onCancel } = {}) {
    onError?.({
      status: 'error',
      message: LocaleUtil.locale(
        'previewMedia仅可在移动端微信或APP中使用',
        'lyrixi.previewMedia.prompt',
        ['previewMedia']
      )
    })
  },
  previewFile: function ({ fileUrl, onSuccess, onError }) {
    let message = LocaleUtil.locale(
      'previewFile仅可在企业微信或APP中使用',
      'lyrixi.previewFile.prompt',
      ['previewFile']
    )
    Toast.show({
      content: message
    })
    onError && onError({ status: 'error', message: message })
  },
  share({ title, description, url, imageUrl, onSuccess, onError } = {}) {
    Clipboard.copyText(url)
    onSuccess &&
      onSuccess({
        status: 'success'
      })
  }
}
export default Browser
