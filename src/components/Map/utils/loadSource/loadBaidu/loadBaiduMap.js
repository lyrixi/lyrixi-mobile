// 内库使用-start
import LocaleUtil from './../../../../../utils/LocaleUtil'
import AssetUtil from './../../../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, AssetUtil } from 'lyrixi-mobile'
测试使用-end */

// 加载BMap地图资源
function loadBaiduMap(key) {
  return new Promise((resolve) => {
    if (window.BMap) {
      resolve({
        status: 'success',
        data: window.BMap
      })
      return
    }

    // Delete old script
    const scriptTag = document.getElementById('lyrixi-bmap-map-js')
    if (scriptTag) {
      scriptTag.parentNode.removeChild(scriptTag)
    }

    // Load js
    AssetUtil.loadJs(
      `https://api.map.baidu.com/api?v=3.0&ak=${key}&callback=&callback=onBMapLoad`,
      {
        id: 'lyrixi-bmap-map-js',
        onSuccess: (result) => {
          window.onBMapLoad = function () {
            if (window.BMap) {
              resolve({
                ...result,
                data: window.BMap
              })
            } else {
              resolve({
                ...result,
                code: 'BMAP_MAP_LOAD_ERROR',
                message: LocaleUtil.locale(
                  `地图库加载失败, 请稍后再试`,
                  'lyrixi_map_js_load_failed'
                )
              })
            }
          }
        },
        onError: (result) => {
          resolve({
            ...result,
            code: 'BMAP_JS_LOAD_ERROR',
            message: LocaleUtil.locale(`地图库加载失败, 请稍后再试`, 'lyrixi_map_js_load_failed')
          })
        }
      }
    )
  })
}

export default loadBaiduMap
