export interface MapLoaderSourceConfig {
  key?: string
  type?: string
  leaflet?: { css?: string; js?: string }
  [key: string]: unknown
}

export interface LoadSourceResult {
  status: string
  message?: string
  data?: unknown
  [key: string]: unknown
}
