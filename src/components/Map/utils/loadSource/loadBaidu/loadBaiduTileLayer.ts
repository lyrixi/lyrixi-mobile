// Leaflet Baidu layer: class extend & internal TileLayer APIs are not representable in strict types.
const mapUrl =
  'https://maponline{s}.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=2&udt='

// 加载crs
function getCrs() {
  // CRS
  const projection = window.L.Util.extend({}, window.L.Projection.Mercator, {
    R: 6378206, //百度椭球赤道半径 a=6378206，相当于在 WGS84 椭球赤道半径上加了 69 米
    R_MINOR: 6356584.314245179, //百度椭球极半径 b=6356584.314245179，相当于在 WGS84 椭球极半径上减了 168 米
    bounds: new window.L.Bounds(
      [-20037725.11268234, -19994619.55417086],
      [20037725.11268234, 19994619.55417086]
    ) //数据覆盖范围在经度[-180°,180°]，纬度[-85.051129°, 85.051129°]之间
  })

  return window.L.Util.extend({}, window.L.CRS.Earth, {
    code: 'EPSG:Baidu',
    projection: projection,
    // Leaflet: factory L.transformation(a, b, c, d), not a constructor
    transformation: (window.L as { transformation: (a: number, b: number, c: number, d: number) => object }).transformation(1, 0.5, -1, 0.5),
    scale: function (zoom: number) {
      return 1 / Math.pow(2, 18 - zoom)
    },
    zoom: function (scale: number) {
      return 18 - Math.log(1 / scale) / Math.LN2
    },
    wrapLng: undefined
  })
}
// 加载百度插件
function loadBaiduTileLayer() {
  if (window.L?.tileLayer?.currentTileLayer) {
    return
  }

  // 瓦片
  const TileLayerProto = window.L.TileLayer as typeof window.L.TileLayer & {
    prototype: { initialize: (this: unknown, url: string, options: Record<string, unknown>) => void }
  }

  const BaiduTileLayer = window.L.TileLayer.extend({
    initialize: function (this: unknown, options: Record<string, unknown>) {
      // eslint-disable-next-line
      options = window.L.extend(
        {
          getUrlArgs: (o: { x: number; y: number; z: number }) => {
            return { x: o.x, y: -1 - o.y, z: o.z }
          },
          subdomains: ['0', '1', '2', '3'],
          minZoom: 0,
          maxZoom: 23,
          minNativeZoom: 1,
          maxNativeZoom: 18
        },
        options
      )
      TileLayerProto.prototype.initialize.call(this, mapUrl, options)
    },
    getTileUrl: function (this: { options: { getUrlArgs?: (c: { x: number; y: number; z: number }) => { x: number; y: number; z: number } }; _url: string; _getSubdomain: (c: { x: number; y: number; z: number }) => string }, coords: { x: number; y: number; z: number }) {
      if (this.options.getUrlArgs) {
        return window.L.Util.template(
          this._url,
          window.L.extend(
            { s: this._getSubdomain(coords), r: window.L.Browser.retina ? '@2x' : '' },
            this.options.getUrlArgs(coords),
            this.options
          )
        )
      } else {
        return window.L.TileLayer.prototype.getTileUrl.call(this, coords as never)
      }
    }
  })

  // 出口样式
  window.L.tileLayer.currentTileLayer = function () {
    return new BaiduTileLayer()
  }

  // crs
  const crs = getCrs()

  // maxBounds
  let southWest = window.L.latLng(-80, -180)
  let northEast = window.L.latLng(84, 180)
  const maxBounds = window.L.latLngBounds(southWest, northEast)

  // maxZoom, minZoom
  window.L.tileLayer.currentTileLayer.config = {
    crs,
    maxBounds,
    maxZoom: 19,
    minZoom: 3
  }
}

export default loadBaiduTileLayer
