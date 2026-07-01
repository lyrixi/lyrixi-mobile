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

/** loadBaidu / loadGoogle 等对子步骤返回的轻量形态 */
export interface LoadStatus {
  status?: string
  [key: string]: unknown
}

export interface LoadLeafletParams {
  css?: string
  js?: string
}
