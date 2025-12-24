import back from './utils/back'
import formatOpenLocationCoord from './utils/formatOpenLocationCoord'
import Browser from './Browser'
import WeChat from './WeChat'
import Alipay from './Alipay'
import DingTalk from './DingTalk'
import Lark from './Lark'

// 内库使用-start
import Device from './../Device'
// 内库使用-end

/* 测试使用-start
import { Device } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  // 存储自定义 Bridge
  _customBridges: {},
  // 添加自定义 Bridge
  addBridge(platform, customBridge) {
    if (!platform || !customBridge) {
      console.error('Bridge.addBridge: platform and customBridge are required')
      return
    }
    this._customBridges[platform] = customBridge
  },
  // 内部方法：获取当前 Bridge
  _getCurrentBridge(currentPlatform) {
    const platform = currentPlatform || Device.platform

    // 1. 先检查自定义 Bridge
    if (this._customBridges?.[platform]) {
      return { ...Browser, ...this._customBridges[platform] }
    }

    // 2. 再使用默认 Bridge 选择逻辑
    if (
      platform === 'wechat' ||
      platform === 'wecom' ||
      platform === 'wechatMiniProgram' ||
      platform === 'wecomMiniProgram'
    ) {
      return { ...Browser, ...WeChat }
    } else if (platform === 'alipay' || platform === 'alipayMiniProgram') {
      return { ...Browser, ...Alipay }
    } else if (platform === 'dingtalk') {
      return { ...Browser, ...DingTalk }
    } else if (platform === 'lark') {
      return { ...Browser, ...Lark }
    } else {
      return Browser
    }
  },

  // 方法转发
  /**
   * 加载平台 SDK
   * @param {Object} params - 配置选项（可选）
   * @param {String} params.wechat?.src - 微信 JS SDK 地址
   * @param {String} params.wechatMiniProgram?.src - 微信 JS SDK 地址
   * @param {String} params.wecom?.src - 企业微信 JS SDK 地址
   * @param {String} params.alipay?.src - 支付宝 JS SDK 地址
   * @param {String} params.alipayMiniProgram?.src - 支付宝小程序 JS SDK 地址
   * @param {String} params.dingtalk?.src - 钉钉 JS SDK 地址
   * @param {String} params.lark?.src - 飞书 JS SDK 地址
   * @param {String} params.[Device.platform]?.src - 自定义平台 JS SDK 地址
   * @param {Function} params.onSuccess - 成功回调
   * @param {Function} params.onError - 失败回调
   * @returns {void}
   */
  load(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    return bridge.load(params)
  },
  /**
   * 返回上一页或关闭窗口, 根据url参数isFromApp决定返回方式
   * @description isFromApp=1时, 调用Bridge.closeWindow()
   * @description isFromApp=home时, 调用Bridge.goHome()
   * @description isFromApp包含confirm-close时, 提示用户是否关闭窗口, 如果用户确认关闭, 调用Bridge.closeWindow()
   * @description isFromApp包含confirm时, 提示用户是否返回上一页, 如果用户确认返回, 调用window.history.go(delta)
   * @description 其他情况调用window.history.go(delta)
   * @param {Number} delta - 返回的页面数，默认为 1
   * @returns {void}
   */
  back(delta, platform) {
    return this._getCurrentBridge(platform).back(delta)
  },
  /**
   * 关闭窗口
   * @param {Object} params - 关闭窗口参数（可选）
   * @param {Function} params.onSuccess - 成功回调
   * @param {Function} params.onError - 失败回调
   * @returns {void}
   */
  closeWindow(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    return bridge.closeWindow(params)
  },
  /**
   * 监听物理返回键或手势返回
   * @param {Object} params - 监听返回参数
   * @param {Function} params.onSuccess - 阻止返回成功回调, 返回true表示允许返回, false表示不允许返回
   * @param {Function} params.onError - 阻止返回失败回调
   * @returns {void}
   */
  onBack(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    return bridge.onBack(params)
  },
  /**
   * 修改原生标题
   * @param {Object} params - 标题参数
   * @param {String} params.title - 标题文本或返回标题的函数
   * @param {Function} params.onSuccess - 成功回调
   * @param {Function} params.onError - 失败回调
   * @returns {void}
   */
  setTitle(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    if (bridge.setTitle) {
      return bridge.setTitle(params)
    }
    return undefined
  },
  /**
   * 打开新的窗口
   * @param {Object} params - 窗口参数
   * @param {String} params.url - 要打开的 URL
   * @param {String} params.title - 窗口标题
   * @param {String} params.target - 打开方式，'_self' 表示当前窗口
   * @returns {void}
   */
  openWindow(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    if (bridge.openWindow) {
      return bridge.openWindow(params)
    }
    return undefined
  },
  /**
   * 返回首页
   * @param {Object} params - 返回首页参数
   * @param {Function} params.onSuccess - 成功回调
   * @param {Function} params.onError - 失败回调
   * @returns {void}
   */
  goHome(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    if (bridge.goHome) {
      return bridge.goHome(params)
    }
    return undefined
  },
  /**
   * 拨打电话
   * @param {String|Number} number - 电话号码
   * @returns {void}
   */
  tel(number, platform) {
    const bridge = this._getCurrentBridge(platform)
    if (bridge.tel) {
      return bridge.tel(number)
    }
    return undefined
  },
  /**
   * 打开地图查看位置
   * @param {Object} params - 地图参数
   * @param {Number} params.latitude - 纬度
   * @param {Number} params.longitude - 经度
   * @param {String} params.type - 坐标类型，'wgs84'|'gcj02'，默认为 'wgs84'
   * @param {String} params.name - 位置名称
   * @param {String} params.address - 位置地址
   * @param {Number} params.scale - 地图缩放级别
   * @param {Function} params.onSuccess - 成功回调
   * @param {Function} params.onError - 失败回调
   * @returns {void}
   */
  openLocation(
    { latitude, longitude, type = 'wgs84', name, address, scale, onSuccess, onError } = {},
    platform
  ) {
    return this._getCurrentBridge(platform).openLocation({
      latitude,
      longitude,
      type,
      name,
      address,
      scale,
      onSuccess,
      onError
    })
  },
  /**
   * 获取当前地理位置
   * @param {Object} params - 定位参数
   * @param {String} params.type - 坐标类型，'wgs84'|'gcj02'，默认为 'wgs84'
   * @param {Function} params.onSuccess - 成功回调，返回 {status: 'success', latitude: Number, longitude: Number, speed: Number, accuracy: Number, type: String}
   * @param {Function} params.onError - 失败回调，返回 {status: 'error', code: String, message: String}
   * @returns {void}
   */
  getLocation({ type = 'wgs84', onSuccess, onError } = {}, platform) {
    return this._getCurrentBridge(platform).getLocation({ type, onSuccess, onError })
  },
  /**
   * 获取浏览器地理位置（所有平台都可以调用）
   * @param {Object} params - 定位参数
   * @param {String} params.type - 坐标类型，'wgs84'|'gcj02'，默认为 'gcj02'
   * @param {Function} params.onSuccess - 成功回调，返回 {status: 'success', latitude: Number, longitude: Number, speed: Number, accuracy: Number, type: String}
   * @param {Function} params.onError - 失败回调，返回 {status: 'error', code: String, message: String}
   * @returns {void}
   */
  getBrowserLocation(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    if (bridge.getBrowserLocation) {
      return bridge.getBrowserLocation(params)
    }
    return undefined
  },
  /**
   * 扫描二维码并返回结果
   * @param {Object} params - 扫码参数
   * @param {Array<String>} params.scanType - 扫码类型，['qrCode', 'barCode']，默认为 ['qrCode', 'barCode']
   * @param {Function} params.onSuccess - 成功回调，返回 {status: 'success', resultStr: String}
   * @param {Function} params.onError - 失败回调
   * @param {Function} params.onCancel - 取消回调
   * @returns {void}
   */
  scanCode(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    if (bridge.scanCode) {
      return bridge.scanCode(params)
    }
    return undefined
  },
  /**
   * 媒体操作: 视频图片选择
   * @param {Object} params - 选择图片参数
   * @param {Number} params.count - 最多可以选择的图片张数，默认为 9
   * @param {Array<String>} params.sizeType - 图片大小，['original', 'compressed']，默认为 ['original', 'compressed']
   * @param {Array<String>} params.sourceType - 图片来源，['camera', 'album']，默认为 ['camera', 'album']
   * @param {Array<String>} params.mediaType - 媒体类型，['image', 'video', 'mix']，默认为 ['image']
   * @param {Number} params.maxDuration - 视频最大时长，单位秒，默认为 10
   * @param {Function} params.onSuccess - 成功回调，返回 {status: 'success', localFiles: Array<{fileUrl: 预览url, filePath: 上传url或id, fileType: 文件类型(image|video|file)}>}
   * @param {Function} params.onError - 失败回调
   * @param {Function} params.onCancel - 取消回调
   * @returns {void}
   */
  chooseMedia(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    if (bridge.chooseMedia) {
      return bridge.chooseMedia(params)
    }
    return undefined
  },
  /**
   * 文件操作: 文件上传
   * @param {Object} params - 上传图片参数
   * @param {Object} params.localFile - 需要上传的图片的本地文件, { path: String, type: String } (必填)
   * @param {String} params.getUploadUrl - 上传地址 (必填), function({ platform: String }) => String
   * @param {Object} params.formatHeader - 格式化请求头, function({ 'Content-Type': 'multipart/form-data', Cookie: document.cookie }, { platform: String }) => Object
   * @param {Object} params.formatPayload - 格式化表单数据 function(payload, { platform: String }), 返回 {Object}
   * @param {Object} params.formatResponse - 格式化上传结果 function(payload, { platform: String }), 返回 {status: 'success|error', result: Object}
   * @param {Function} params.onSuccess - 成功回调，返回 {status: 'success', result: Object}
   * @param {Function} params.onError - 失败回调
   * @param {Function} params.onCancel - 取消回调
   * @returns {void}
   */
  uploadFile(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    if (bridge.uploadFile) {
      return bridge.uploadFile(params)
    }
    return undefined
  },
  /**
   * 媒体操作: 预览视频图片
   * @param {Object} params - 预览图片参数
   * @param {Number} params.index - 当前显示图片索引，默认 0
   * @param {Array<String>} params.sources - 需要预览的图片 http 链接列表，[{fileUrl: '全路径', fileType: 'image|video', poster: '视频封面图片全路径'}]
   * @param {Function} params.onSuccess - 成功回调
   * @param {Function} params.onError - 失败回调
   * @param {Function} params.onCancel - 取消回调
   * @returns {void}
   */
  previewMedia(params, platform) {
    return this._getCurrentBridge(platform).previewMedia(params)
  },
  /**
   * 文件操作: 预览文件
   * @param {Object} params - 预览文件参数
   * @param {String} params.fileUrl - 需要预览文件的地址(必填)
   * @param {String} params.fileName - 需要预览文件的文件名(不填的话取url的最后部分)
   * @param {Number} params.fileSize - 需要预览文件的字节大小
   * @param {Function} params.onSuccess - 成功回调
   * @param {Function} params.onError - 失败回调
   * @returns {void}
   */
  previewFile(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    if (bridge.previewFile) {
      return bridge.previewFile(params)
    }
    return undefined
  },
  /**
   * 消息分享
   * @param {Object} params - 分享参数
   * @param {Array<String>} params.platforms - 分享平台, 微信、企微、飞书、钉钉都不支持, 默认分享到当前平台
   * @param {String} params.title - 分享标题(必填)
   * @param {String} params.description - 分享副标题
   * @param {Number} params.url - 分享连接
   * @param {String} params.imageUrl - 分享连接的图片
   * @param {Function} params.onSuccess - 分享成功回调
   * @param {Function} params.onError - 分享失败回调
   * @returns {void}
   */
  share(params, platform) {
    const bridge = this._getCurrentBridge(platform)
    if (bridge.share) {
      return bridge.share(params)
    }
    return undefined
  }
}

// Expose 工具类（静态属性）
Bridge.utils = {
  back: back,
  formatOpenLocationCoord: formatOpenLocationCoord
}

export default Bridge
