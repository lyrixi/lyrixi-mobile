export type RequestAxiosLikeError = {
  config?: unknown
  response?: Record<string, unknown>
  [key: string]: unknown
}

export type RequestAxiosLikeResponse = { config?: unknown; data?: unknown; [key: string]: unknown }
