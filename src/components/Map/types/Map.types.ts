/**
 * Map 类型聚合：分片为 Map.*.types.ts（见 ai/rules/lyrixi-develop-type-file.mdc）
 * 与 ListAsync/ActionSheet 一致，子目录不再保留 types.ts。
 */
export * from './Map.CenterMarker.createCenterMarkerIcon.types'
export type {
  MapCenterMarkerProps,
  MapCenterMarkerRef,
  MapCenterMarkerAddOptions
} from './Map.CenterMarker.types'
export * from './Map.Circles.types'
export * from './Map.LocationControl.types'
export * from './Map.MapChoose.types'
export * from './Map.MapContainer.types'
export type { LoadResult, MapLoaderProps, MapLoaderRef } from './Map.MapLoader.types'
export * from './Map.Markers.createMarkerIcon.types'
export type {
  MapCoord,
  CanvasMarkerLayer,
  AddMarkersIconOptions,
  AddMarkersLayersOptions,
  MapMarkersLayerProps,
  MapMarkersLayerHandle
} from './Map.Markers.types'
export type { MapMapMarkersProps, MapMapMarkersHandle } from './Map.MapMarkers.types'
export * from './Map.NearbyControl.Current.types'
export * from './Map.NearbyControl.types'
export * from './Map.Polygon.types'
export * from './Map.Polyline.types'
export * from './Map.SearchControl.types'
export * from './Map.ZoomControl.types'
export * from './Map.coordsToFit.types'
export type { MapPoint } from './Map.coordsToWgs84.types'
export * from './Map.filterCoords.types'
export * from './Map.getAddress.types'
export * from './Map.getLocation.types'
export * from './Map.getMapType.types'
export * from './Map.getSuperAddress.types'
export type {
  GetSuperLocationCallOptions,
  GetSuperLocationOptions,
  LocResult,
  LocCacheData,
  LocationStorageCache
} from './Map.getSuperLocation.types'
export * from './Map.isSamePoint.types'
export * from './Map.leaflet.types'
export * from './Map.loadSource.types'
export * from './Map.markerIcons.types'
export * from './Map.normalizeLocationResult.types'
export * from './Map.queryNearby.types'
