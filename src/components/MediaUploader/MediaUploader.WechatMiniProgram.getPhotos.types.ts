export interface WechatMiniProgramGetPhotosResponse {
  status: string
  code?: string
  message?: string
  data?: unknown
}

export interface WechatMiniProgramGetPhotosOptions {
  url: string
  formatResponse?: (
    r: WechatMiniProgramGetPhotosResponse,
    ctx: { platform: string }
  ) => WechatMiniProgramGetPhotosResponse | Promise<WechatMiniProgramGetPhotosResponse>
}
