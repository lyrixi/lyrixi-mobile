// 官方文档: https://opendocs.alipay.com/open/020oit?scene=SC00001851?pathHash=0f29c54b

import _ from 'lodash'
import back from './utils/back'
import formatOpenLocationParams from './../utils/formatOpenLocationParams'
import wrapCallback from './../utils/wrapCallback'

// 内库使用-start
import GeoUtil from './../GeoUtil'
import LocaleUtil from './../LocaleUtil'
import AssetUtil from './../AssetUtil'
import Device from './../Device'
// 内库使用-end

/* 测试使用-start
import { GeoUtil, LocaleUtil, AssetUtil, Device } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  load: function (callback, options) {
    if (window.top.ap) {
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
    script.src =
      options.alipayBridgeSrc ||
      '//gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js'

    script.onload = async function () {
      if (Device.platform === 'alipayMiniprogram') {
        await AssetUtil.loadJs(options.alipayMiniprogramBridgeSrc || 'https://appx/web-view.min.js')
        if (!window.my) {
          console.error('支付小程序js加载失败')
          if (callback) {
            callback({
              status: 'error',
              message: LocaleUtil.locale(
                '支付小程序js加载失败',
                'lyrixi_alipayMiniProgram_js_load_failed'
              )
            })
          }
          return
        }
        window.top.my = window.my
      }

      if (window.ap) {
        window.top.ap = window.ap
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
          message: LocaleUtil.locale('支付宝js加载失败', 'lyrixi_alipay_js_load_failed')
        })
      }
    }

    if (script.src) document.body.appendChild(script)
  },
  back: function (delta) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function () {
    window.top.ap?.popWindow()
  },
  onHistoryBack: function (params) {
    console.log('支付宝不支持监听物理返回')
  },
  openLocation: function (params) {
    if (_.isEmpty(params)) return
    let newParams = formatOpenLocationParams(params)
    console.log('调用支付宝地图...', newParams)

    const wrappedParams = wrapCallback({
      latitude: newParams.latitude,
      longitude: newParams.longitude,
      name: newParams.name || '',
      address: newParams.address || '',
      ...newParams
    })

    window.top.ap.openLocation(wrappedParams)
  },
  getLocation: function (params = {}) {
    const { type, onSuccess, onError, ...otherParams } = params || {}

    console.log('调用支付宝定位...', params)

    const handleSuccess = onSuccess
      ? function (res) {
          let latitude = res.latitude
          let longitude = res.longitude

          if (!longitude || !latitude) {
            console.error('支付宝定位失败', res)
            if (onError) {
              onError({
                status: 'error',
                message: LocaleUtil.locale('定位成功, 但没有经纬度')
              })
            }
            return
          }

          if (type === 'wgs84') {
            const points = GeoUtil.coordtransform([longitude, latitude], 'gcj02', 'wgs84')
            longitude = points[0]
            latitude = points[1]
          }

          onSuccess({
            status: 'success',
            longitude: longitude,
            latitude: latitude,
            type: type || 'gcj02',
            accuracy: res.accuracy
          })
        }
      : undefined

    const wrappedParams = wrapCallback({
      ...otherParams,
      type: '2',
      onSuccess: handleSuccess,
      onError: onError
    })

    window.top.ap.getLocation(wrappedParams)
  },
  scanQRCode: function (params = {}) {
    const { scanType, onSuccess, onError } = params || {}

    let type = ''
    if (scanType && scanType.length === 1) {
      if (scanType.includes('qrCode')) {
        type = 'qr'
      } else if (scanType.includes('barCode')) {
        type = 'bar'
      }
    }

    const handleSuccess = onSuccess
      ? function (res) {
          onSuccess({
            status: 'success',
            resultStr: res.code
          })
        }
      : undefined

    const wrappedParams = wrapCallback({
      type: type,
      onSuccess: handleSuccess,
      onError: onError
    })

    window.top.ap.scan(wrappedParams)
  },
  chooseImage: function (params) {
    console.log('调用支付宝选择图片暂未实现', params)
  },
  uploadImage: function (params) {
    console.log('调用支付宝选择图片暂未实现', params)
  },
  previewImage: function (params) {
    let index = params?.index || 0
    if (typeof params?.index !== 'number' && typeof params?.current === 'string') {
      index = params?.urls?.indexOf?.(params?.current)
      if (index < 0) index = 0
    }

    const wrappedParams = wrapCallback({
      urls: params?.urls,
      current: index,
      ...params
    })

    window.top.ap.previewImage(wrappedParams)
  }
}

export default Bridge
