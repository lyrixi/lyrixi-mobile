import back from './utils/back'
import formatOpenLocationParams from './utils/formatOpenLocationParams'
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
  _getCurrentBridge() {
    const platform = Device.platform

    // 1. 先检查自定义 Bridge
    if (this._customBridges?.[platform]) {
      return { ...Browser, ...this._customBridges[platform] }
    }

    // 2. 再使用默认 Bridge 选择逻辑
    if (
      platform === 'wechat' ||
      platform === 'wecom' ||
      platform === 'wechatMiniprogram' ||
      platform === 'wecomMiniprogram'
    ) {
      return { ...Browser, ...WeChat }
    } else if (platform === 'alipay' || platform === 'alipayMiniprogram') {
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
   * @param {Function} callback - 加载完成回调函数
   * @param {Object} options - 配置选项（可选）
   * @param {String} options.wechat?.src - 微信 JS SDK 地址
   * @param {String} options.wecom?.src - 企业微信 JS SDK 地址
   * @param {String} options.alipayBridgeSrc - 支付宝 JS SDK 地址
   * @param {String} options.dingtalkBridgeSrc - 钉钉 JS SDK 地址
   * @param {String} options.larkBridgeSrc - 飞书 JS SDK 地址
   * @param {String} options.lyrixi?.src - 乐栖 JS SDK 地址
   * @returns {void}
   */
  load(callback, options) {
    const bridge = this._getCurrentBridge()
    if (options !== undefined) {
      return bridge.load(callback, options)
    }
    return bridge.load(callback)
  },
  /**
   * 返回上一页或关闭窗口
   * @param {Number} delta - 返回的页面数，默认为 1
   * @returns {void}
   */
  back(delta) {
    return this._getCurrentBridge().back(delta)
  },
  /**
   * 关闭窗口
   * @param {Object} params - 关闭窗口参数（可选）
   * @returns {void}
   */
  closeWindow(params) {
    const bridge = this._getCurrentBridge()
    if (params !== undefined) {
      return bridge.closeWindow(params)
    }
    return bridge.closeWindow()
  },
  /**
   * 监听物理返回键
   * @param {Object} params - 监听参数（可选）
   * @param {Function} params.onBack - 返回键回调函数
   * @returns {void}
   */
  onHistoryBack(params) {
    const bridge = this._getCurrentBridge()
    if (params !== undefined) {
      return bridge.onHistoryBack(params)
    }
    return bridge.onHistoryBack()
  },
  /**
   * 修改原生标题
   * @param {Object} params - 标题参数
   * @param {String|Function} params.title - 标题文本或返回标题的函数
   * @param {Function} params.onSuccess - 成功回调
   * @param {Function} params.onError - 失败回调
   * @returns {void}
   */
  setTitle(params) {
    const bridge = this._getCurrentBridge()
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
  openWindow(params) {
    const bridge = this._getCurrentBridge()
    if (bridge.openWindow) {
      return bridge.openWindow(params)
    }
    return undefined
  },
  /**
   * 返回首页
   * @returns {void}
   */
  goHome() {
    const bridge = this._getCurrentBridge()
    if (bridge.goHome) {
      return bridge.goHome()
    }
    return undefined
  },
  /**
   * 拨打电话
   * @param {String|Number} number - 电话号码
   * @returns {void}
   */
  tel(number) {
    const bridge = this._getCurrentBridge()
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
   * @param {String} params.name - 位置名称
   * @param {String} params.address - 位置地址
   * @param {Number} params.scale - 地图缩放级别
   * @param {Function} params.onSuccess - 成功回调
   * @param {Function} params.onError - 失败回调
   * @returns {void}
   */
  openLocation(params) {
    return this._getCurrentBridge().openLocation(params)
  },
  /**
   * 获取当前地理位置
   * @param {Object} params - 定位参数
   * @param {String} params.type - 坐标类型，'wgs84'|'gcj02'，默认为 'gcj02'
   * @param {Function} params.onSuccess - 成功回调，返回 {status: 'success', latitude: Number, longitude: Number, speed: Number, accuracy: Number, type: String}
   * @param {Function} params.onError - 失败回调，返回 {status: 'error', code: String, message: String}
   * @returns {void}
   */
  getLocation(params) {
    return this._getCurrentBridge().getLocation(params)
  },
  /**
   * 获取浏览器地理位置（所有平台都可以调用）
   * @param {Object} params - 定位参数
   * @param {String} params.type - 坐标类型，'wgs84'|'gcj02'，默认为 'gcj02'
   * @param {Function} params.onSuccess - 成功回调，返回 {status: 'success', latitude: Number, longitude: Number, speed: Number, accuracy: Number, type: String}
   * @param {Function} params.onError - 失败回调，返回 {status: 'error', code: String, message: String}
   * @returns {void}
   */
  getBrowserLocation(params) {
    const bridge = this._getCurrentBridge()
    if (bridge.getBrowserLocation) {
      return bridge.getBrowserLocation(params)
    }
    return undefined
  },
  /**
   * 扫描二维码并返回结果
   * @param {Object} params - 扫码参数
   * @param {Number} params.needResult - 是否需要返回扫描结果，0 为不需要，1 为需要，默认为 1
   * @param {Array<String>} params.scanType - 扫码类型，['qrCode', 'barCode']，默认为 ['qrCode', 'barCode']
   * @param {String} params.desc - 扫码说明文字
   * @param {Boolean} params.prefix - 是否保留前缀，默认为 false
   * @param {Function} params.onSuccess - 成功回调，返回 {status: 'success', resultStr: String}
   * @param {Function} params.onError - 失败回调
   * @param {Function} params.onCancel - 取消回调
   * @returns {void}
   */
  scanQRCode(params) {
    const bridge = this._getCurrentBridge()
    if (bridge.scanQRCode) {
      return bridge.scanQRCode(params)
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
   * @param {Function} params.onSuccess - 成功回调，返回 {status: 'success', localFiles: Array<{preview: String, path: String, type: String}>}
   * @param {Function} params.onError - 失败回调
   * @param {Function} params.onCancel - 取消回调
   * @returns {void}
   */
  chooseImage(params) {
    const bridge = this._getCurrentBridge()
    if (bridge.chooseImage) {
      return bridge.chooseImage(params)
    }
    return undefined
  },
  /**
   * 图片操作: 文件上传
   * @param {Object} params - 上传图片参数
   * @param {Object} params.localFile - 需要上传的图片的本地文件, { path: String, type: String } (必填)
   * @param {String} params.url - 上传地址 (必填)
   * @param {Object} params.header - 请求头, 默认为 { 'Content-Type': 'multipart/form-data', Cookie: document.cookie }
   * @param {Object} params.payload - 表单数据, 默认为 {}
   * @param {Function} params.onSuccess - 成功回调，返回 {status: 'success', result: Object}
   * @param {Function} params.onError - 失败回调
   * @returns {void}
   */
  uploadImage(params) {
    const bridge = this._getCurrentBridge()
    if (bridge.uploadImage) {
      return bridge.uploadImage(params)
    }
    return undefined
  },
  /**
   * 图片操作: 预览图片
   * @param {Object} params - 预览图片参数
   * @param {Number} params.index - 当前显示图片索引，默认 0
   * @param {String} params.current - 当前显示图片的 http 链接
   * @param {Array<String>} params.urls - 需要预览的图片 http 链接列表
   * @param {Function} params.onSuccess - 成功回调
   * @param {Function} params.onError - 失败回调
   * @returns {void}
   */
  previewImage(params) {
    return this._getCurrentBridge().previewImage(params)
  },
  /**
   * 文件操作: 预览文件
   * @param {Object} params - 预览文件参数
   * @param {String} params.url - 需要预览文件的地址(必填，可以使用相对路径)
   * @param {String} params.name - 需要预览文件的文件名(不填的话取url的最后部分)
   * @param {Number} params.size - 需要预览文件的字节大小(必填)
   * @param {Function} params.onSuccess - 成功回调
   * @param {Function} params.onError - 失败回调
   * @returns {void}
   */
  previewFile(params) {
    const bridge = this._getCurrentBridge()
    if (bridge.previewFile) {
      return bridge.previewFile(params)
    }
    return undefined
  },
  /**
   * 获取 platform 属性
   * @returns {String} 当前平台名称
   */
  get platform() {
    return this._getCurrentBridge().platform
  }
}

// Expose 工具类（静态属性）
Bridge.utils = {
  back: back,
  formatOpenLocationParams: formatOpenLocationParams
}

export default Bridge
