export type CardItem = { id?: string; name?: string; [key: string]: unknown }

export type DataResult = {
  status?: string
  message?: string
  data?: unknown
}

export type ReportCardUpdateDataParams = {
  tabId?: string | number
  slideId?: string | number
}
