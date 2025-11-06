// Device
let Device = (function () {
  let userAgent = navigator.userAgent
  let ua = userAgent.toLowerCase()
  // 内核
  let kernel = ''
  if (ua.indexOf('trident') > -1) {
    kernel = 'trident'
  } else if (ua.indexOf('presto') > -1) {
    kernel = 'presto'
  } else if (ua.indexOf('applewebkit') > -1) {
    kernel = 'webkit'
  } else if (ua.indexOf('gecko') > -1 && ua.indexOf('khtml') === -1) {
    kernel = 'gecko'
  }
  // 设备
  let device = ''
  if (ua.match(/applewebkit.*mobile.*/)) {
    device = 'mobile'
  } else {
    device = 'pc'
  }
  // 系统
  let os = ''
  let osVersion = ''
  let androidExp = ua.match(/android\s*(\d*\.*\d*)/)
  let iosExp = ua.match(/cpu iphone os (.*?) like mac os/)
  let harmonyExp = ua.match(/openharmony\s*(\d*\.*\d*)/)
  if (androidExp) {
    os = 'android'
    osVersion = androidExp[1]
  } else if (iosExp) {
    os = 'ios'
    osVersion = iosExp[1]
  } else if (harmonyExp) {
    os = 'harmony'
    osVersion = harmonyExp[1]
  }

  // 平台
  let platform = ''
  let platformVersion = ''
  let platformMatch = null
  function updatePlatform() {
    // 微信小程序
    if (ua.indexOf('miniprogram') > -1 && ua.indexOf('micromessenger') > -1) {
      if (ua.indexOf('wxwork') > -1) {
        platform = 'wecomMiniprogram'
        platformMatch = ua.match(/wxwork\/([\w.]*)/)
      } else if (ua.indexOf('micromessenger') > -1) {
        platform = 'wechatMiniprogram'
        platformMatch = ua.match(/micromessenger\/([\w.]*)/)
      }
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // 企业微信
    else if (ua.indexOf('wxwork') > -1) {
      platform = 'wecom'
      platformMatch = ua.match(/wxwork\/([\w.]*)/)
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // 微信
    else if (ua.indexOf('micromessenger') > -1) {
      platform = 'wechat'
      platformMatch = ua.match(/micromessenger\/([\w.]*)/)
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // 支付宝
    else if (ua.indexOf('alipay') > -1) {
      platform = 'alipay'
      if (ua.indexOf('miniprogram') > -1) {
        platform = 'alipayMiniprogram'
      }
      platformMatch = ua.match(/alipayclient\/([\w.]*)/)
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // 钉钉
    else if (ua.indexOf('dingtalk') > -1) {
      platform = 'dingtalk'
      platformMatch = ua.match(/dingtalk\/([\w.]*)/)
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // 飞书
    else if (ua.indexOf('lark') > -1) {
      platform = 'lark'
      platformMatch = ua.match(/lark\/([\w.]*)/)
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // QQ
    else if (ua.indexOf('mqqbrowser') > -1) {
      platform = 'qq'
    }
    // UC
    else if (ua.indexOf('ucbrowser') > -1) {
      platform = 'uc'
    }
    // 其它浏览器
    else {
      platform = 'browser'
      const platformMatch = ua.match(/version\/([\d.]+)/)
      platformVersion = platformMatch?.[1] || ''
    }
  }
  updatePlatform()

  // 获取地址栏参数
  function getUrlParameter(argName, argSearch) {
    let url = window.location.href
    if (argSearch) url = argSearch
    let params = {}
    // 如果url中包含?说明有参数
    if (url?.indexOf?.('?') !== -1) {
      if (!argName) return '?' + url.split('?')[1]
      // 获取所有参数options: 如?a=1&b=2转为['a=1','b=2']
      let options = url.split('?')[1]?.split('&')
      if (options?.length) {
        for (let i = 0; i < options.length; i++) {
          // 获取单项option: 如'a=1'转为['a', '1']
          let option = options[i].split('=')
          if (option.length === 2) {
            if (argName) {
              if (argName === option[0]) return option[1]
            } else {
              params[option[0]] = option[1]
            }
          }
        }
      }
    }
    if (Object.keys(params).length) return params
    return ''
  }
  // 获取屏幕宽高
  function getScreenWidth() {
    if (window.innerWidth) return window.innerWidth
    if (window.screen.width) return window.screen.width
    if (window.screen.availWidth) return window.screen.availWidth
  }
  function getScreenHeight() {
    if (window.innerHeight) return window.innerHeight
    if (window.screen.height) return window.screen.height
    if (window.screen.availHeight) return window.screen.availHeight
  }
  // 获取手机型号(ios返回版本号, 因为ios取不到型号)
  function getModel() {
    let model = ''
    if (userAgent.toLowerCase().match(/android\s*(\d*\.*\d*)/)) {
      let infos = userAgent.split(';')
      for (let info of infos) {
        if (info.indexOf('Build') !== -1) {
          info = info.trim()
          model = info.substring(0, info.indexOf(' Build'))
          break
        }
      }
      if (!model) model = ''
    } else {
      let iosVersion = ''
      let iosExp = userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)
      if (iosExp && iosExp[1]) {
        iosVersion = iosExp[1].replace(/_/gim, '.')
      }
      model = `iPhone ${iosVersion}`
    }
    return model
  }

  return {
    // 应用程序判断
    language: (window.navigator.browserLanguage || window.navigator.language).toLowerCase(),
    protocol: window.location.protocol,
    host: window.location.host,
    domain: window.location.protocol + '//' + window.location.host,
    kernel: kernel,
    device: device,
    os: os,
    osVersion: osVersion,
    model: getModel(),
    platform: platform,
    platformVersion: platformVersion,
    isOnLine: window.navigator.onLine || true,
    userAgent: userAgent,
    getUrlParameter: getUrlParameter,
    screenWidth: getScreenWidth(),
    screenHeight: getScreenHeight(),
    // 比较版本号, -1小于 0等于 1大于
    compareVersion: function (v1, v2, separator = '.') {
      // Comaptiable with IOS version
      if (v1.indexOf(separator) === -1 && v1.indexOf('_') !== -1) {
        // eslint-disable-next-line
        v1 = v1.replace(/_/gim, separator)
      }
      if (v2.indexOf(separator) === -1 && v2.indexOf('_') !== -1) {
        // eslint-disable-next-line
        v2 = v2.replace(/_/gim, separator)
      }

      const v1Parts = v1.split(separator).map(Number)
      const v2Parts = v2.split(separator).map(Number)

      const length = Math.max(v1Parts.length, v2Parts.length)

      for (let i = 0; i < length; i++) {
        const part1 = v1Parts[i] || 0 // 如果没有该部分，默认为0
        const part2 = v2Parts[i] || 0 // 如果没有该部分，默认为0

        if (part1 < part2) return -1
        if (part1 > part2) return 1
      }

      return 0 // 如果所有部分都相等
    }
  }
})()

export default Device
