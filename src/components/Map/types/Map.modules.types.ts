import coordsToWgs84 from '../utils/coordsToWgs84'
import wgs84ToCoords from '../utils/wgs84ToCoords'
import getSuperAddress from '../utils/getSuperAddress'
import getSuperLocation from '../utils/getSuperLocation'
import getAddress from '../utils/getAddress'
import getLocation from '../utils/getLocation'
import queryNearby from '../utils/queryNearby'

import MapLoader from '../components/MapLoader'
import MapContainer from '../components/MapContainer'
import ZoomControl from '../components/ZoomControl'
import SearchControl from '../components/SearchControl'
import CenterMarker from '../components/CenterMarker'
import Markers from '../components/Markers'
import Circles from '../components/Circles'
import Polyline from '../components/Polyline'
import Polygon from '../components/Polygon'
import LocationControl from '../components/LocationControl'
import NearbyControl from '../components/NearbyControl'
import MapChoose from '../pages/MapChoose'
import MapMarkers from '../pages/MapMarkers'

export type MapComponents = {
  coordsToWgs84: typeof coordsToWgs84
  wgs84ToCoords: typeof wgs84ToCoords
  getSuperAddress: typeof getSuperAddress
  getSuperLocation: typeof getSuperLocation
  getAddress: typeof getAddress
  getLocation: typeof getLocation
  queryNearby: typeof queryNearby
  MapLoader: typeof MapLoader
  MapContainer: typeof MapContainer
  ZoomControl: typeof ZoomControl
  SearchControl: typeof SearchControl
  CenterMarker: typeof CenterMarker
  Markers: typeof Markers
  Circles: typeof Circles
  Polyline: typeof Polyline
  Polygon: typeof Polygon
  LocationControl: typeof LocationControl
  NearbyControl: typeof NearbyControl
  MapChoose: typeof MapChoose
  MapMarkers: typeof MapMarkers
}
