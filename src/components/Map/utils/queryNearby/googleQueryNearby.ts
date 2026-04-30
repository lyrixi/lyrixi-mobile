import coordsToFit from './../coordsToFit'
import type { QueryNearbyParams, GooglePlacesApi } from './types'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null
}

function hasNumberLatLng(loc: unknown): loc is { lat: () => number; lng: () => number } {
  if (typeof loc !== 'object' || loc === null) {
    return false
  }
  const o = loc as { lat?: unknown; lng?: unknown }
  return typeof o.lat === 'function' && typeof o.lng === 'function'
}

function displayNameToString(name: unknown): string {
  if (typeof name === 'string') {
    return name
  }
  if (isRecord(name) && typeof name.text === 'string') {
    return name.text
  }
  if (isRecord(name) && typeof (name as { toString?: () => string }).toString === 'function') {
    return (name as { toString: () => string }).toString()
  }
  return String(name)
}

// 搜索附近
async function nearbySearch({
  map,
  keyword,
  longitude,
  latitude,
  type,
  radius
}: QueryNearbyParams) {
  if (!map?.currentMap || !longitude || !latitude || !type) {
    // eslint-disable-next-line no-console
    console.error('缺少参数', { currentMap: map?.currentMap, longitude, latitude, type })
    return {
      status: 'error' as const,
      message: LocaleUtil.locale('缺少参数', 'lyrixi_f06ec979541f5f1283216579ac421380')
    }
  }

  const g = window.google
  if (!g?.maps?.importLibrary) {
    return {
      status: 'error' as const,
      message: LocaleUtil.locale('查询失败', 'lyrixi_0d66ed02d74d0bd89431d6d59533ffb3')
    }
  }

  const { Place, SearchNearbyRankPreference } = (await g.maps.importLibrary('places')) as GooglePlacesApi
  const request: Record<string, unknown> = {
    fields: ['displayName', 'location', 'businessStatus', 'formattedAddress'],
    maxResultCount: 20,
    language: window.language || 'en-US',
    region: 'us'
  }

  // 中国转gcj02再搜索
  const centerCoordRaw = coordsToFit({
    longitude,
    latitude,
    type: type,
    inChinaTo: 'gcj02',
    outChinaTo: 'wgs84'
  })
  if (!isRecord(centerCoordRaw)) {
    return {
      status: 'error' as const,
      message: LocaleUtil.locale('查询失败', 'lyrixi_0d66ed02d74d0bd89431d6d59533ffb3')
    }
  }
  const lon = centerCoordRaw.longitude
  const lat = centerCoordRaw.latitude
  if (lon === undefined || lon === null || lat === undefined || lat === null) {
    return {
      status: 'error' as const,
      message: LocaleUtil.locale('查询失败', 'lyrixi_0d66ed02d74d0bd89431d6d59533ffb3')
    }
  }

  const isInChina = centerCoordRaw.isInChina === true

  const center =
    latitude && longitude
      ? (new g.maps.LatLng(Number(lat), Number(lon)) as unknown)
      : null

  if (!center) {
    return {
      status: 'error' as const,
      message: LocaleUtil.locale('查询失败', 'lyrixi_0d66ed02d74d0bd89431d6d59533ffb3')
    }
  }

  // 结果列表
  let placeList: unknown[] = []

  // 搜索附近（有搜索半径时用附近搜索，否则全文）
  if (center && radius) {
    request.rankPreference = SearchNearbyRankPreference.DISTANCE
    request.locationRestriction = {
      center: center,
      radius: 500
    }
    request.includedPrimaryTypes = keyword.split(',')
    const { places } = await Place.searchNearby(request)
    placeList = places
  } else {
    // 搜索全部
    request.textQuery = keyword
    request.locationBias = center
    const { places } = await Place.searchByText(request)
    placeList = places
  }

  if (placeList.length) {
    const list: {
      longitude: number
      latitude: number
      name: string
      address: string
      type: 'gcj02' | 'wgs84'
    }[] = []
    for (const place of placeList) {
      if (!isRecord(place) || !hasNumberLatLng(place.location)) {
        continue
      }
      const pLoc = place.location
      if (pLoc.lat() && pLoc.lng()) {
        list.push({
          longitude: pLoc.lng(),
          latitude: pLoc.lat(),
          name: displayNameToString(place.displayName),
          address:
            (typeof place.formattedAddress === 'string' && place.formattedAddress) ||
            displayNameToString(place.displayName),
          type: isInChina ? 'gcj02' : 'wgs84'
        })
      }
    }
    if (list.length) {
      return {
        status: 'success' as const,
        list: list
      }
    }
    return {
      status: 'empty' as const,
      message: LocaleUtil.locale('暂无数据', 'lyrixi_21efd88b67a39834582ad99aabb9dc60')
    }
  }

  return {
    status: 'error' as const,
    message: LocaleUtil.locale('查询失败', 'lyrixi_0d66ed02d74d0bd89431d6d59533ffb3')
  }
}

export default nearbySearch
