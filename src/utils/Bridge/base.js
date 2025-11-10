// 内库使用-start
import Device from './../Device'
import Toast from './../../components/Toast'
import GeoUtil from './../GeoUtil'
import LocaleUtil from './../LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { GeoUtil, Device, Toast, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  platform: Device.platform,
  // 自定义操作
  invoke: function () {
    Toast.show({
      content: LocaleUtil.locale('invoke仅可在微信或APP中使用', 'lyrixi_invoke_prompt', ['invoke'])
    })
  },
  // 获得版本信息
  getAppVersion: function () {
    return Device.platformVersion
  },
  // 拨打电话
  tel: function (number) {
    if (Device.device === 'pc') {
      Toast.show({ content: LocaleUtil.locale('此功能仅可在手机中使用', 'lyrixi_only_mobile') })
      return
    }
    if (isNaN(number)) return
    window.location.href = 'tel:' + number
  },
  /**
   * 获取当前地理位置, 所有平台都可以调用
   * @param {Object} params
   * @prop {String} type 'wgs84'|'gcj02'坐标类型微信默认使用国际坐标'wgs84',
   * @return {Object} {latitude: '纬度', longitude: '经度', speed:'速度', accuracy:'位置精度'}
   */
  getBrowserLocation: function (params) {
    if (!params.type) {
      params.type = 'gcj02'
    }

    // debug模拟定位
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

    // 调用浏览器定位
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
          enableHighAccuracy: true, // 指示浏览器获取高精度的位置，默认为false
          timeout: 8000, // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
          maximumAge: 0 // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
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
  /**
   * 修改原生标题
   * @param {Object} params {title: '自定义标题'}
   */
  setTitle: function (params) {
    if (params && params.title) {
      if (typeof params.title === 'string') {
        window.top.document.title = params.title
      } else if (typeof params.title === 'function') {
        params.title()
      }
    }
  },
  // 返回首页
  goHome: function () {
    window.history.go(-1)
  },
  // 打开新的窗口
  openWindow: function (params = {}) {
    if (params.url) window.location.href = params.url
  },
  // 兼容方法
  logOut: function () {
    console.log('logOut方法仅在app上工作')
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
  chooseImage: function (params) {
    let message = LocaleUtil.locale(
      'chooseImage仅可在移动端微信或APP中使用',
      'lyrixi_chooseImage_prompt',

      ['chooseImage']
    )
    Toast.show({
      content: message
    })
    params?.onError && params.onError({ status: 'error', message: message })
  },
  uploadImage: function (params) {
    let message = LocaleUtil.locale(
      'uploadImage仅可在移动端微信或APP中使用',
      'lyrixi_uploadImage_prompt',
      ['uploadImage']
    )
    Toast.show({
      content: message
    })
    params?.onError && params.onError({ status: 'error', message: message })
  },
  previewImage: function (params = {}) {
    let message = LocaleUtil.locale(
      'previewImage仅可在移动端微信或APP中使用',
      'lyrixi_previewImage_prompt',
      ['previewImage']
    )
    Toast.show({
      content: message
    })
    params?.onError && params.onError({ status: 'error', message: message })
  },
  previewFile: function (params = {}) {
    let message = LocaleUtil.locale(
      'previewFile仅可在企业微信或APP中使用',
      'lyrixi_previewFile_prompt',

      ['previewFile']
    )
    Toast.show({
      content: message
    })
    params?.onError && params.onError({ status: 'error', message: message })
  }
}
export default Bridge
