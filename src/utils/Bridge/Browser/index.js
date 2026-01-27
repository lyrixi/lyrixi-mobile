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
  load: function ({ onSuccess } = {}) {
    onSuccess?.({
      status: 'success'
    })
  },
  config: async function ({ onSuccess } = {}) {
    onSuccess?.({
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
  onBack: function () {
    Toast.show({
      content: `Browser ${LocaleUtil.locale(
        '此平台不支持',
        'noKey_60a7978c99ee3bd2f538096ee46727ca'
      )} onBack`
    })
  },
  setTitle: function ({ title, onSuccess, onError } = {}) {
    window.top.document.title = title
    onSuccess?.({ status: 'success' })
  },
  openWindow: function ({ url, target } = {}) {
    if (target === '_self') {
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
  tel: function ({ number, onSuccess, onError } = {}) {
    if (Device.device === 'pc') {
      Toast.show({
        content: `Browser ${LocaleUtil.locale(
          '此平台不支持',
          'noKey_60a7978c99ee3bd2f538096ee46727ca'
        )} tel`
      })
      return
    }
    if (isNaN(number)) {
      onError?.({
        status: 'error',
        message: `Browser ${LocaleUtil.locale(
          '电话号码格式错误',
          'noKey_219a4aae2d70f722737a324656fe4f13'
        )}`
      })
      return
    }
    window.location.href = 'tel:' + number
    onSuccess?.({ status: 'success' })
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
    let message = `Browser ${LocaleUtil.locale(
      'openLocation仅可在企业微信或APP中使用',
      'noKey_0e963a39eb4b363f9465618162b7d7d5',

      ['openLocation']
    )}`
    Toast.show({
      content: message
    })
    onError?.({ status: 'error', message: message })
  },
  getLocation: function ({ type, onSuccess, onError } = {}) {
    this.getBrowserLocation({ type, onSuccess, onError })
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
              message: `Browser ${LocaleUtil.locale(
                '定位失败',
                'noKey_9831baf6b76c1da7b69b463033b924cc'
              )}`
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
              message = `Browser ${LocaleUtil.locale(
                '定位失败,用户拒绝请求地理定位',
                'noKey_f8cfa8427bee70b3f5759bcbce99b4b3'
              )}`
              break
            case error.POSITION_UNAVAILABLE:
              code = 'POSITION_UNAVAILABLE'
              console.log(
                `Browser ${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'noKey_c9eb59bd4d16540b9f2295104060284f'
                )}`
              )
              message = `Browser ${LocaleUtil.locale(
                '定位失败,位置信息是不可用',
                'noKey_c9eb59bd4d16540b9f2295104060284f'
              )}`
              break
            case error.TIMEOUT:
              code = 'TIMEOUT'
              console.log(
                `Browser ${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'noKey_c9eb59bd4d16540b9f2295104060284f'
                )}`
              )
              message = `Browser ${LocaleUtil.locale(
                '定位失败,请求获取用户位置超时',
                'noKey_8a95092c3c8f57da8b4a619eeead5795'
              )}`
              break
            case error.UNKNOWN_ERROR:
              code = 'UNKNOWN_ERROR'
              console.log(
                `Browser ${LocaleUtil.locale(
                  '定位失败,位置信息是不可用',
                  'noKey_c9eb59bd4d16540b9f2295104060284f'
                )}`
              )
              message = `Browser ${LocaleUtil.locale(
                '定位失败,定位系统失效',
                'noKey_b7ad4da2f97870b26920561f33ab14ab'
              )}`
              break
            default:
              code = 'LOCATION_ERROR'
              console.log(
                `Browser ${LocaleUtil.locale('定位失败', 'noKey_9831baf6b76c1da7b69b463033b924cc')}`
              )
              message = `Browser ${LocaleUtil.locale(
                '定位失败',
                'noKey_9831baf6b76c1da7b69b463033b924cc'
              )}`
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
        message: `Browser ${LocaleUtil.locale(
          '此平台不支持',
          'noKey_60a7978c99ee3bd2f538096ee46727ca'
        )}`
      }
      onError?.(res)
    }
    return
  },
  scanCode: function ({ scanType, onSuccess, onError, onCancel } = {}) {
    if (!this.debug) {
      let message = `Browser ${LocaleUtil.locale(
        '此平台不支持',
        'noKey_60a7978c99ee3bd2f538096ee46727ca'
      )} scanCode`
      Toast.show({
        content: message
      })
      if (onError)
        onError({
          status: 'error',
          message: message
        })
      return
    }
    setTimeout(function () {
      if (onSuccess) onSuccess({ status: 'success', resultStr: '504823170310092750280333' })
    }, 500)
  },
  chooseMedia: function () {
    let message = `Browser ${LocaleUtil.locale(
      '此平台不支持',
      'noKey_60a7978c99ee3bd2f538096ee46727ca'
    )} chooseMedia`
    Toast.show({
      content: message
    })
  },
  uploadFile: async function ({
    localFile,
    getUploadUrl,
    formatHeaders,
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
    if (typeof formatHeaders === 'function') {
      header = await formatHeaders(header, { platform: 'browser' })
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
      message: `Browser ${LocaleUtil.locale(
        '此平台不支持',
        'noKey_60a7978c99ee3bd2f538096ee46727ca'
      )} previewMedia`
    })
  },
  previewFile: function ({ fileUrl, onSuccess, onError } = {}) {
    let message = `Browser ${LocaleUtil.locale(
      '此平台不支持',
      'noKey_60a7978c99ee3bd2f538096ee46727ca'
    )} previewFile`
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
