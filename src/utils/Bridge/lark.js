// 官方文档: https://open.feishu.cn/document/client-docs/h5/
// 鉴权: https://open.feishu.cn/document/uYjL24iN/uQjMuQjMuQjM/authentication/h5sdkconfig

import _ from 'lodash'
import BridgeBase from './base'
import back from './utils/back'
import ready from './utils/ready'
import coordToFit from './utils/coordToFit'
import wrapCallback from './utils/wrapCallback'

// 内库使用-start
import GeoUtil from './../GeoUtil'
import LocaleUtil from './../LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { GeoUtil, LocaleUtil } from 'lyrixi-mobile'
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
  // 关闭窗口
  closeWindow: function (params) {
    const wrappedParams = wrapCallback(params)
    window.top.tt.closeWindow(wrappedParams)
  },
  // 返回监听
  onHistoryBack: function (params) {
    console.log('飞书不支持监听物理返回')
  },
  // 地图查看
  openLocation: function (params) {
    if (_.isEmpty(params)) return
    let newParams = coordToFit(params)
    console.log('调用飞书地图...', newParams)

    let scale = params?.scale
    if (!scale) {
      scale = 12
    } else if (scale < 5) {
      scale = 5
    } else if (scale > 18) {
      scale = 18
    }

    const wrappedParams = wrapCallback({
      latitude: newParams.latitude,
      longitude: newParams.longitude,
      scale: scale,
      name: newParams.name,
      address: newParams.address,
      onSuccess: newParams.onSuccess,
      onError: newParams.onError
    })

    window.top.tt.openLocation(wrappedParams)
  },
  /**
   * 获取当前地理位置
   * @param {Object} params
   * params: {
   * type {String}: 'wgs84'|'gcj02'坐标类型微信默认使用国际坐标'wgs84',
   * }
   * @returns {Object} {latitude: '纬度', longitude: '经度', speed:'速度', accuracy:'位置精度'}
   */
  getLocation: function (params = {}) {
    const { type, onSuccess, onError } = params || {}
    let targetType = type || 'gcj02'
    console.log('调用飞书定位...', params)

    // 自定义success处理，但要包装成标准格式
    const customSuccess = onSuccess
      ? function (res) {
          if (!res.longitude || !res.latitude) {
            console.error('飞书定位失败', res)
            if (onError) {
              onError({
                status: 'error',
                message: LocaleUtil.locale('定位成功, 但没有经纬度')
              })
            }
            return
          }

          let result = {
            status: 'success',
            longitude: res.longitude,
            latitude: res.latitude,
            type: res.type,
            accuracy: res.accuracy
          }

          // If result type not params type, transform result type to params type
          if (res.type && res.type !== targetType) {
            const points = GeoUtil.coordtransform(
              [res.longitude, res.latitude],
              res.type,
              targetType
            )

            result = {
              status: 'success',
              longitude: points[0],
              latitude: points[1],
              type: targetType,
              accuracy: res.accuracy
            }
          }

          onSuccess(result)
        }
      : undefined

    const wrappedParams = wrapCallback({
      // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      type: targetType,
      onSuccess: customSuccess,
      onError: onError
    })

    window.top.tt.getLocation(wrappedParams)
  },
  /**
   * 扫码
   * @param {Object} params
   * @returns {Object} {latitude: '纬度', longitude: '经度', speed:'速度', accuracy:'位置精度'}
   */
  scanQRCode(params = {}) {
    const { scanType, onSuccess, onError } = params || {}

    const wrappedParams = wrapCallback({
      scanType: scanType,
      barCodeInput: true,
      onSuccess: onSuccess,
      onError: onError
    })

    window.top.tt.scanCode(wrappedParams)
  },
  /**
   * 照片预览
   * @param {Object} params
     {
       index: 0, // 当前显示图片索引，默认 0
       current: '', // 当前显示图片的http链接
       urls: [] // 需要预览的图片http链接列表
     }
   */
  previewImage: function (params) {
    let index = params?.index || 0
    if (typeof params?.index !== 'number' && typeof params?.current === 'string') {
      index = params?.urls?.indexOf?.(params.current)
      if (index < 0) index = 0
    }
    let current = params?.urls?.[index]

    const wrappedParams = wrapCallback({
      urls: params?.urls,
      current: current,
      onSuccess: params?.onSuccess,
      onError: params?.onError
    })

    window.top.tt.previewImage(wrappedParams)
  }
}

export default Bridge
