import loadBaiduMap from './loadBaiduMap'
import loadBaiduTileLayer from './loadBaiduTileLayer'

// 加载BMap地图资源
async function loadBaidu(key) {
  let result = await loadBaiduMap(key)
  if (result.status === 'error') {
    return result
  }
  await loadBaiduTileLayer()
  return result
}

export default loadBaidu
