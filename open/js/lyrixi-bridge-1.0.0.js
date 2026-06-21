/**
 * Lyrixi H5 Bridge SDK 1.0.0
 * API 与 lyrixi-mobile Bridge 保持一致，通过 LyrixiJSBridge 与原生 App 通信。
 * 参考微信 jweixin-1.6.0 实现模式。
 */
;(function (root, factory) {
  if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(function () {
      return factory(root)
    })
  } else {
    factory(root, true)
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (root, exportToGlobal) {
  if (root.lyrixi) return root.lyrixi

  var doc = root.document
  var ua = navigator.userAgent.toLowerCase()
  var isLyrixiApp = ua.indexOf('lyrixi') > -1

  /** JSAPI 名称 -> 原生 invoke 名称 */
  var apiMap = {
    config: 'preVerifyJSAPI',
    closeWindow: 'closeWindow',
    onHistoryBack: 'onHistoryBack',
    setTitle: 'setTitle',
    tel: 'tel',
    openLocation: 'openLocation',
    getLocation: 'geoLocation',
    scanCode: 'scanCode',
    chooseMedia: 'chooseMedia',
    uploadFile: 'uploadFile',
    previewMedia: 'previewMedia',
    previewFile: 'previewFile',
    share: 'share',
    detectFace: 'detectFace',
    getPhoneNumber: 'getPhoneNumber',
    openWindow: 'openWindow'
  }

  var reverseApiMap = (function () {
    var map = {}
    for (var key in apiMap) {
      map[apiMap[key]] = key
    }
    return map
  })()

  var configData = {}
  var readyState = { value: 0, data: {} }
  var eventHub = { _completes: [] }

  function whenBridgeReady(fn) {
    if (root.LyrixiJSBridge) {
      fn()
      return
    }
    if (doc.addEventListener) {
      doc.addEventListener('LyrixiJSBridgeReady', fn, false)
    }
  }

  function normalizeApiList(list) {
    if (!list || !list.length) return []
    var result = []
    for (var i = 0; i < list.length; i++) {
      var item = list[i]
      result.push(apiMap[item] || item)
    }
    return result
  }

  function buildVerifyPayload(extra) {
    var payload = {
      appId: configData.appId,
      verifyAppId: configData.appId,
      verifySignType: 'sha1',
      verifyTimestamp: String(configData.timestamp || ''),
      verifyNonceStr: configData.nonceStr,
      verifySignature: configData.signature
    }
    if (extra) {
      for (var k in extra) {
        payload[k] = extra[k]
      }
    }
    return payload
  }

  function invokeBridge(api, data, callback) {
    if (root.LyrixiJSBridge) {
      root.LyrixiJSBridge.invoke(api, data || {}, callback || function () {})
      return
    }
    if (configData.debug) {
      setTimeout(function () {
        callback({ err_msg: api + ':ok', errMsg: api + ':ok' })
      }, 0)
      return
    }
    callback({
      err_msg: api + ':fail',
      errMsg: api + ':fail LyrixiJSBridge not found'
    })
  }

  function parseErrStatus(errMsg) {
    if (!errMsg) return 'fail'
    var colon = errMsg.indexOf(':')
    if (colon < 0) return 'fail'
    return errMsg.substring(colon + 1)
  }

  function handleCallback(res, opts) {
    var errMsg = res.errMsg || res.err_msg || ''
    var status = parseErrStatus(errMsg)
    if (status === 'ok') {
      opts.success && opts.success(res)
    } else if (status === 'cancel' || status === 'confirm') {
      opts.cancel && opts.cancel(res)
    } else {
      opts.fail && opts.fail(res)
    }
    opts.complete && opts.complete(res)
  }

  function makeApi(name) {
    return function (opts) {
      opts = opts || {}
      whenBridgeReady(function () {
        var nativeName = apiMap[name] || name
        var data = {}
        for (var k in opts) {
          if (k !== 'success' && k !== 'fail' && k !== 'cancel' && k !== 'complete') {
            data[k] = opts[k]
          }
        }
        invokeBridge(nativeName, data, function (res) {
          handleCallback(res, opts)
        })
      })
    }
  }

  var lyrixi = {
    version: '1.0.0',

    config: function (cfg) {
      configData = cfg || {}
      var check = configData.check !== false

      whenBridgeReady(function () {
        if (!check) {
          readyState.value = 1
          var completes = eventHub._completes
          for (var i = 0; i < completes.length; i++) {
            completes[i]()
          }
          eventHub._completes = []
          return
        }

        invokeBridge(
          apiMap.config,
          buildVerifyPayload({
            verifyJsApiList: normalizeApiList(configData.jsApiList),
            debug: configData.debug ? 1 : 0
          }),
          function (res) {
            var status = parseErrStatus(res.errMsg || res.err_msg || '')
            if (status === 'ok') {
              readyState.value = 1
              readyState.data = res
              var list = eventHub._completes
              for (var j = 0; j < list.length; j++) {
                list[j]()
              }
              eventHub._completes = []
            } else {
              readyState.value = -1
              readyState.data = res
            }
          }
        )
      })
    },

    ready: function (fn) {
      if (readyState.value !== 0 || (!isLyrixiApp && configData.debug)) {
        fn()
      } else {
        eventHub._completes.push(fn)
      }
    },

    error: function (fn) {
      if (readyState.value === -1) {
        fn(readyState.data)
      }
    },

    checkJsApi: function (opts) {
      opts = opts || {}
      whenBridgeReady(function () {
        invokeBridge(
          'checkJsApi',
          { jsApiList: normalizeApiList(opts.jsApiList) },
          function (res) {
            var checkResult = res.checkResult
            if (checkResult && typeof checkResult === 'string') {
              try {
                checkResult = JSON.parse(checkResult)
              } catch (e) {}
            }
            if (checkResult) {
              for (var key in checkResult) {
                var alias = reverseApiMap[key]
                if (alias) {
                  checkResult[alias] = checkResult[key]
                }
              }
            }
            res.checkResult = checkResult
            handleCallback(res, opts)
          }
        )
      })
    },

    onHistoryBack: function (opts) {
      opts = opts || {}
      whenBridgeReady(function () {
        if (root.LyrixiJSBridge && root.LyrixiJSBridge.on) {
          root.LyrixiJSBridge.on(apiMap.onHistoryBack, function (res) {
            if (opts.success) {
              var allow = opts.success(res)
              if (allow === false) {
                invokeBridge(apiMap.onHistoryBack, { action: 'register' }, function () {})
              }
            }
          })
          return
        }
        invokeBridge(apiMap.onHistoryBack, {}, function (res) {
          handleCallback(res, opts)
        })
      })
    }
  }

  var apiList = [
    'closeWindow',
    'setTitle',
    'tel',
    'openLocation',
    'getLocation',
    'scanCode',
    'chooseMedia',
    'uploadFile',
    'previewMedia',
    'previewFile',
    'share',
    'detectFace',
    'getPhoneNumber',
    'openWindow'
  ]

  for (var i = 0; i < apiList.length; i++) {
    lyrixi[apiList[i]] = makeApi(apiList[i])
  }

  if (exportToGlobal) {
    root.lyrixi = lyrixi
  }

  return lyrixi
})
