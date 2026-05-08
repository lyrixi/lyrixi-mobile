/**
 * Map 类型聚合：分片为 Map.*.types.ts（见 ai/rules/lyrixi-develop-type-file.mdc）
 * 与 ListAsync/ActionSheet 一致，子目录不再保留 types.ts。
 */
export type * from './Map.CenterMarker.createCenterMarkerIcon.types'
export type {
  MapCenterMarkerProps,
  MapCenterMarkerRef,
  MapCenterMarkerAddOptions
} from './Map.CenterMarker.types'
export type * from './Map.Circles.types'
export type * from './Map.LocationControl.types'
export type * from './Map.MapChoose.types'
export type * from './Map.MapContainer.types'
export type { LoadResult as MapLoaderLoadResult, MapLoaderProps, MapLoaderRef } from './Map.MapLoader.types'
export type * from './Map.Markers.createMarkerIcon.types'
export type {
  MapCoord,
  CanvasMarkerLayer,
  AddMarkersIconOptions,
  AddMarkersLayersOptions,
  MapMarkersLayerProps,
  MapMarkersLayerHandle
} from './Map.Markers.types'
export type { MapMapMarkersProps, MapMapMarkersHandle } from './Map.MapMarkers.types'
export type * from './Map.NearbyControl.Current.types'
export type * from './Map.NearbyControl.types'
export type * from './Map.Polygon.types'
export type * from './Map.Polyline.types'
export type * from './Map.SearchControl.types'
export type * from './Map.ZoomControl.types'
export type * from './Map.coordsToFit.types'
export type { MapPoint as CoordsToWgs84MapPoint } from './Map.coordsToWgs84.types'
export type * from './Map.demos.types'
export type * from './Map.filterCoords.types'
export type * from './Map.getAddress.types'
export type * from './Map.getLocation.types'
export type * from './Map.getMapType.types'
export type * from './Map.getSuperAddress.types'
export type {
  GetSuperLocationCallOptions,
  GetSuperLocationOptions,
  LocResult,
  LocCacheData,
  LocationStorageCache
} from './Map.getSuperLocation.types'
export type * from './Map.isSamePoint.types'
export type * from './Map.leaflet.types'
export type * from './Map.loadSource.types'
export type * from './Map.markerIcons.types'
export type * from './Map.normalizeLocationResult.types'
export type * from './Map.queryNearby.types'
