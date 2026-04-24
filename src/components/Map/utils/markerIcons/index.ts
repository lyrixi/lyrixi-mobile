const markerIcons = {
  centerMarkerIcon: {
    active: true,
    className: 'lyrixi-map-center-marker-icon',
    iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-custom-shop.png`,
    iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-custom-shop.png`,
    shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
    shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
    shadowSize: [39, 39] as [number, number],
    iconSize: [30, 49] as [number, number],
    iconAnchor: [15, 25] as [number, number],
    shadowAnchor: undefined as [number, number] | undefined,
    popupAnchor: undefined as [number, number] | undefined
  },
  markerIcon: {
    iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.png`,
    iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon-2x.png`,
    shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
    shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
    shadowSize: [33, 33] as [number, number],
    iconSize: [20, 33] as [number, number],
    iconAnchor: [10, 16] as [number, number],
    shadowAnchor: undefined as [number, number] | undefined,
    popupAnchor: undefined as [number, number] | undefined
  }
}

export default markerIcons
