/**
 * WeChat / 企业微信 JSSDK 鉴权相关私有类型（不通过 `types.ts` 对外导出）。
 */
import type { BridgeErrorCallback, BridgeSuccessCallback } from './Bridge.callbacks.types'

export type BridgeWeChatWechatPayload = { appId?: string } & Record<string, unknown>

export type BridgeWeChatWechatConfigOptions = {
  url?: string
  headers?: Record<string, string>
  payload?: BridgeWeChatWechatPayload
  formatResponse?: (response: unknown, ctx: { platform: string }) => Promise<unknown> | unknown
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}

export type BridgeWeChatWecomPayload = { appId?: string } & Record<string, unknown>

export type BridgeWeChatWecomAgentConfigOptions = {
  url?: string
  headers?: Record<string, string>
  payload?: BridgeWeChatWecomPayload
  formatResponse?: (response: unknown, ctx: { platform: string }) => Promise<unknown> | unknown
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}

// --- 微信 JSSDK 私有响应（成功形态各 API 不同；错误见 `Bridge.platform.types`）---

export type BridgeWechatGetLocationSuccessResponse = {
  longitude?: number
  latitude?: number
  accuracy?: number
  [key: string]: unknown
}

export type BridgeWechatScanCodeSuccessResponse = {
  resultStr?: string
  [key: string]: unknown
}

export type BridgeWechatChooseImageSuccessResponse = {
  localIds?: string[]
  [key: string]: unknown
}

export type BridgeWechatUploadImageSuccessResponse = {
  serverId?: string
  [key: string]: unknown
}

