import loadGoogleMap from './loadGoogleMap'
import loadGoogleTileLayer from './loadGoogleTileLayer'

// 加载BMap地图资源
async function loadGoogle(key) {
  let result = await loadGoogleMap(key)
  if (result.status === 'error') {
    return result
  }
  await loadGoogleTileLayer()
  return result
}

export default loadGoogle
