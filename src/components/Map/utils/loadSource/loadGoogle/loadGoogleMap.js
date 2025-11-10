// 内库使用-start
import AssetUtil from '../../../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil } from 'lyrixi-mobile'
测试使用-end */

// 加载google地图资源
function loadGoogleMap(key) {
  return new Promise((resolve) => {
    if (window.google) {
      resolve(window.google)
      return
    }

    // Delete old script
    const scriptTag = document.getElementById('lyrixi-google-map-js')
    if (scriptTag) {
      scriptTag.parentNode.removeChild(scriptTag)
    }

    // Load js
    AssetUtil.loadJs(`https://maps.googleapis.com/maps/api/js?key=${key}`, {
      id: 'lyrixi-google-map-js',
      onSuccess: (result) => {
        resolve({
          ...result,
          data: window.google
        })
      },
      onError: (result) => {
        resolve({
          ...result,
          code: 'GOOGLE_MAP_LOAD_ERROR',
          message: 'google地图加载失败'
        })
      }
    })
  })
}

export default loadGoogleMap
