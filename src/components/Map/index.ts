/*
 * 说明: Map使用leaflet绘制, 一律使用wgs84坐标, 只有在绘制瓦片和搜索时需要纠偏转坐标
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 */

// Utils
import coordsToWgs84 from './utils/coordsToWgs84'
import wgs84ToCoords from './utils/wgs84ToCoords'
import getSuperAddress from './utils/getSuperAddress'
import getSuperLocation from './utils/getSuperLocation'
import getAddress from './utils/getAddress'
import getLocation from './utils/getLocation'
import queryNearby from './utils/queryNearby'

// Components
import MapLoader from './components/MapLoader'
import MapContainer from './components/MapContainer'
import ZoomControl from './components/ZoomControl'
import SearchControl from './components/SearchControl'
import CenterMarker from './components/CenterMarker'
import Markers from './components/Markers'
import Circles from './components/Circles'
import Polyline from './components/Polyline'
import Polygon from './components/Polygon'
import LocationControl from './components/LocationControl'
import NearbyControl from './components/NearbyControl'

// Pages
import MapChoose from './pages/MapChoose'
import MapMarkers from './pages/MapMarkers'

import type { MapComponents } from './types/Map.modules.types'

const Map = {} as MapComponents

Map.coordsToWgs84 = coordsToWgs84
Map.wgs84ToCoords = wgs84ToCoords
Map.getSuperAddress = getSuperAddress
Map.getSuperLocation = getSuperLocation
Map.getAddress = getAddress
Map.getLocation = getLocation
Map.queryNearby = queryNearby
Map.MapLoader = MapLoader
Map.MapContainer = MapContainer
Map.ZoomControl = ZoomControl
Map.SearchControl = SearchControl
Map.CenterMarker = CenterMarker
Map.Markers = Markers
Map.Circles = Circles
Map.Polyline = Polyline
Map.Polygon = Polygon
Map.LocationControl = LocationControl
Map.NearbyControl = NearbyControl
Map.MapChoose = MapChoose
Map.MapMarkers = MapMarkers

export default Map
