import coordsToFit from './../coordsToFit'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 搜索附近
async function nearbySearch({ map, keyword, longitude, latitude, type, radius }) {
  if (!map?.currentMap || !longitude || !latitude || !type) {
    console.error('缺少参数', { currentMap: map?.currentMap, longitude, latitude, type })
    return {
      status: 'error',
      message: LocaleUtil.locale('缺少参数', 'lyrixi_f06ec979541f5f1283216579ac421380')
    }
  }

  const { Place, SearchNearbyRankPreference } = await window.google.maps.importLibrary('places')
  const request = {
    // required parameters
    fields: ['displayName', 'location', 'businessStatus', 'formattedAddress'],
    // optional parameters
    maxResultCount: 20,
    language: window.language || 'en-US',
    region: 'us'
  }

  // 中国转gcj02再搜索
  let centerCoord = coordsToFit({
    longitude,
    latitude,
    type: type,
    inChinaTo: 'gcj02',
    outChinaTo: 'wgs84'
  })
  let center =
    latitude && longitude
      ? new window.google.maps.LatLng(centerCoord.latitude, centerCoord.longitude)
      : null

  // 结果列表
  let placeList = []

  // 搜索附近
  if (center && radius) {
    request.rankPreference = SearchNearbyRankPreference.DISTANCE
    request.locationRestriction = {
      center: center,
      radius: 500
    }
    request.includedPrimaryTypes = keyword.split(',')
    let { places } = await Place.searchNearby(request)
    placeList = places
  }
  // 搜索全部
  else {
    // request.includedType = "restaurant"
    request.textQuery = keyword
    request.locationBias = center
    let { places } = await Place.searchByText(request)
    placeList = places
  }

  // 格式化结果
  if (placeList.length) {
    let list = []
    for (let place of placeList) {
      if (place.location.lat() && place.location.lng()) {
        list.push({
          longitude: place.location.lng(),
          latitude: place.location.lat(),
          name: place.displayName,
          address: place.formattedAddress || place.displayName,
          type: centerCoord.isInChina ? 'gcj02' : 'wgs84'
        })
      }
    }
    if (list.length) {
      return {
        status: 'success',
        list: list
      }
    } else {
      return {
        status: 'empty',
        message: LocaleUtil.locale('暂无数据', 'lyrixi_21efd88b67a39834582ad99aabb9dc60')
      }
    }
  }

  return {
    status: 'error',
    message: LocaleUtil.locale('查询失败', 'lyrixi_0d66ed02d74d0bd89431d6d59533ffb3')
  }
}

export default nearbySearch
