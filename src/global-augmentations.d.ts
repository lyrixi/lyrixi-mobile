/** 运行时代码挂载到 window 的扩展（Locale 等） */
import type { LeafletWithPlugins as LeafletWindowL } from './components/Map/leaflet.types'

export {}

/** 与 window.wx 对齐的宽松类型，避免为每个 API 维护完整签名 */
type WeixinJsSdk = {
  config?: (cfg: Record<string, unknown>) => void
  error?: (cb: (err: unknown) => void) => void
  ready?: (cb: () => void) => void
  invoke?: (name: string, data: Record<string, unknown>, cb: (res: Record<string, unknown>) => void) => void
  agentConfig?: (cfg: Record<string, unknown>) => void
  chooseImage?: (opts: Record<string, unknown>) => void
  uploadImage?: (opts: Record<string, unknown>) => void
  previewImage?: (opts: Record<string, unknown>) => void
  previewFile?: (opts: Record<string, unknown>) => void
  updateAppMessageShareData?: (opts: Record<string, unknown>) => void
  openLocation?: (opts: Record<string, unknown>) => void
  getLocation?: (opts: Record<string, unknown>) => void
  scanQRCode?: (opts: Record<string, unknown>) => void
  getLocalImgData?: (opts: Record<string, unknown>) => void
  closeWindow?: () => void
  onHistoryBack?: (cb: () => void) => void
  miniProgram?: { navigateBack: (opts: Record<string, unknown>) => void }
}

/** MapLoader 配置 */
interface MapLoaderConfigType {
  key?: string
  type?: string
  markerIcons?: Record<string, unknown>
  leaflet?: { css?: string; js?: string }
  [key: string]: unknown
}

/** 百度地图 BMap namespace（CDN 动态注入） */
type BMapStatic = {
  Point: new (lng: number, lat: number) => unknown
  Map: new (container: unknown, opts?: Record<string, unknown>) => {
    centerAndZoom: (center: unknown, zoom: number) => void
    disableDragging: () => void
    disableScrollWheelZoom: () => void
    disableDoubleClickZoom: () => void
    disablePinchToZoom: () => void
    [key: string]: unknown
  }
  LocalSearch: new (map: unknown, opts: Record<string, unknown>) => {
    getStatus: () => unknown
    search: (keyword: string, options?: Record<string, unknown>) => void
    searchNearby: (keyword: string, center: unknown, radius: number) => void
  }
  Geocoder: new () => {
    getLocation: (point: unknown, cb: (result: unknown) => void) => void
  }
  [key: string]: unknown
}

/** 高德地图 AMap namespace（CDN 动态注入） */
type AMapStatic = Record<string, unknown>

/** Google Maps namespace（CDN 动态注入） */
type GoogleMapsStatic = {
  maps: {
    LatLng: new (lat: number, lng: number) => unknown
    Map: new (container: unknown, opts?: Record<string, unknown>) => unknown
    MapTypeId: { ROADMAP: string; [key: string]: unknown }
    Geocoder: new () => {
      geocode: (
        request: Record<string, unknown>,
        callback?: (results: unknown, status: unknown) => void
      ) => Promise<unknown> | void
    }
    importLibrary: (name: string) => Promise<Record<string, unknown>>
    [key: string]: unknown
  }
}

declare module 'react' {
  interface HTMLAttributes<T> {
    /** Allow non-standard disabled attribute on non-form elements for CSS selector patterns */
    disabled?: boolean
    /** Allow non-standard readOnly attribute on non-form elements for CSS selector patterns */
    readOnly?: boolean
  }
}

declare global {
  interface Window {
    /** 示例页表单缓存 debounce 句柄（Edit/Cache） */
    formCacheTimeout?: ReturnType<typeof setTimeout>
    lyrixiLocaleData?: unknown
    lyrixiLocaleLanguage?: string
    dayjsPlugin?: string[]
    _debug_?: unknown
    /** legacy IE */
    clipboardData?: { setData: (format: string, data: string) => void }
    /** legacy Firefox */
    netscape?: { security?: { PrivilegeManager?: { enablePrivilege: (cap: string) => void } } }
    /** 微信 / 企业微信 JSSDK（运行时注入，方法表随官方文档扩展） */
    wx?: WeixinJsSdk
    /** 飞书 JSSDK */
    tt?: {
      openLocation?: (opts: Record<string, unknown>) => void
      getLocation?: (opts: Record<string, unknown>) => void
      scanCode?: (opts: Record<string, unknown>) => void
      previewImage?: (opts: Record<string, unknown>) => void
      share?: (opts: Record<string, unknown>) => void
      closeWindow?: (opts: Record<string, unknown>) => void
    }
    h5sdk?: { config?: (cfg: Record<string, unknown>) => void }
    /** 支付宝 H5 JSSDK（运行时注入） */
    ap?: {
      popWindow?: () => void
      openLocation?: (opts: Record<string, unknown>) => void
      getLocation?: (opts: Record<string, unknown>) => void
      scan?: (opts: Record<string, unknown>) => void
    }
    /** 支付宝小程序 web-view 等 */
    my?: unknown
    /** 钉钉 JSSDK */
    dd?: {
      config?: (opts: Record<string, unknown>) => void
      error?: (cb: (err: { errorMessage?: string }) => void) => void
      ready?: (cb: () => void) => void
      env?: { platform?: string }
      quitPage?: (opts: Record<string, unknown>) => void
      setNavigationTitle?: (opts: Record<string, unknown>) => void
      closePage?: (opts: Record<string, unknown>) => void
      openLocation?: (opts: Record<string, unknown>) => void
      getLocation?: (opts: Record<string, unknown>) => void
      chooseImage?: (opts: Record<string, unknown>) => void
      uploadFile?: (opts: Record<string, unknown>) => void
      previewImage?: (opts: Record<string, unknown>) => void
      compressImage?: (opts: Record<string, unknown>) => void
      biz?: {
        util?: {
          scan?: (opts: Record<string, unknown>) => void
          share?: (opts: Record<string, unknown>) => void
        }
        ATMBle?: {
          exclusiveLiveCheck?: (opts: Record<string, unknown>) => void
        }
      }
    }
    /** Leaflet（CDN 动态注入，含 canvas-markers 等插件） */
    L?: LeafletWindowL
    /** Leaflet 加载状态标记 */
    leaflet?: unknown
    /** 百度地图 */
    BMap?: BMapStatic
    /** 百度地图状态码 */
    BMAP_STATUS_SUCCESS?: unknown
    /** 百度地图回调 */
    onBMapLoad?: () => void
    /** 高德地图 */
    AMap?: AMapStatic
    /** Google Maps */
    google?: GoogleMapsStatic
    /** 地图加载器全局配置 */
    MapLoaderConfig?: MapLoaderConfigType
    /** 地图 utils 默认实现（MapLoader 注入） */
    defaultGetAddress?: (...args: unknown[]) => unknown
    defaultGetLocation?: (...args: unknown[]) => unknown
    defaultOpenLocation?: (...args: unknown[]) => unknown
    defaultQueryNearby?: (...args: unknown[]) => unknown
    /** 地区选择器数据缓存 */
    countries?: unknown[]
    countryRegions?: Record<string, unknown[]>
    streets?: Record<string, unknown>
    /** ToolBar 下拉注册表 */
    dropdowns?: Record<string, { close?: () => void; open?: () => void }>
    /** 微信小程序上传轮询注册表 */
    wechatMiniProgramPolls?: Record<string, boolean>
    /** 当前语言（覆盖 navigator.language） */
    language?: string
    /** 登录用户信息（业务侧注入） */
    loginUser?: { name?: string; id?: string; tenantId?: string; [key: string]: unknown }
  }

  interface Navigator {
    browserLanguage?: string
  }
}
