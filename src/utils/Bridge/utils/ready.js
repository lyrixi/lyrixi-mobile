// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import AssetUtil from './../../AssetUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, AssetUtil } from 'lyrixi-mobile'
测试使用-end */

/**
 * 动态加载桥接库
 * @param {Func} callback 加载完成回调
 * @param {Object} options {lyrixi?.src: '', wechat?.src: '', wecom?.src: '', onError: function({message: ''})}
 */
function ready(callback, options = {}, platform) {
  // 微信支付宝平台
  if (
    platform === 'lyrixi' ||
    platform === 'wechat' ||
    platform === 'wechatMiniprogram' ||
    platform === 'wecom' ||
    platform === 'wecomMiniprogram' ||
    platform === 'alipay' ||
    platform === 'alipayMiniprogram' ||
    platform === 'dingtalk' ||
    platform === 'lark'
  ) {
    // 初始化完成不需要重复加载
    if (
      window.top.lyrixi ||
      window.top.wx ||
      window.top.ap ||
      window.top.dd ||
      (window.top.tt && window.top.h5sdk)
    ) {
      if (callback) callback()
      return
    }

    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = 'defer'

    if (platform === 'lyrixi') {
      script.src =
        options.lyrixi?.src ||
        'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/lyrixi/lyrixi-0.0.1.js'
    } else if (platform === 'wechat') {
      script.src = options.wechat?.src || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    } else if (platform === 'wechatMiniprogram') {
      script.src = options.wechatMiniprogramBridgeSrc || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    } else if (platform === 'wecom') {
      script.src = options.wecom?.src || '//res.wx.qq.com/wwopen/js/jsapi/jweixin-1.0.0.js'
    } else if (platform === 'wecomMiniprogram') {
      script.src = options.wecomMiniprogramBridgeSrc || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    } else if (platform === 'alipay' || platform === 'alipayMiniprogram') {
      script.src =
        options.alipayBridgeSrc ||
        '//gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js'
    } else if (platform === 'dingtalk') {
      script.src =
        options.dingtalkBridgeSrc ||
        '//g.alicdn.com/dingding/dingtalk-jsapi/3.0.25/dingtalk.open.js'
    } else if (platform === 'lark') {
      script.src = options.larkBridgeSrc || '//lf-scm-cn.feishucdn.com/lark/op/h5-js-sdk-1.5.34.js'
    }

    // 加载完成
    script.onload = async function () {
      // 支付小程序还需要加载一个js
      if (platform === 'alipayMiniprogram') {
        await AssetUtil.loadJs(options.alipayMiniprogramBridgeSrc || 'https://appx/web-view.min.js')
        if (window.my) {
          window.top.my = window.my
        }
        // js加载失败
        else {
          console.error('支付小程序js加载失败')
          options?.onError?.({
            message: LocaleUtil.locale(
              '支付小程序js加载失败',
              'lyrixi_alipayMiniProgram_js_load_failed'
            )
          })
        }
      }

      // 微信
      if (window.wx) {
        // eslint-disable-next-line
        window.top.wx = window.wx
      }

      // 支付宝
      if (window.ap) {
        // eslint-disable-next-line
        window.top.ap = window.ap
      }

      // 钉钉
      if (window.dd) {
        // eslint-disable-next-line
        window.top.dd = window.dd
      }

      // 飞书
      if (window.tt && window.h5sdk) {
        // eslint-disable-next-line
        window.top.tt = window.tt
        // eslint-disable-next-line
        window.top.h5sdk = window.h5sdk
      }

      if (callback) callback()
    }
    if (options.onError) {
      script.onerror = function () {
        options.onError({
          message: LocaleUtil.locale('微信js加载失败', 'lyrixi_weChat_js_load_failed')
        })
      }
    }

    if (script.src) document.body.appendChild(script)
    return
  }

  // 浏览器或其它平台
  if (callback) callback()
}

export default ready
