/**
 * 各平台 Bridge 回调入参：成功带业务扩展字段；失败 / 取消为固定形状。
 */
export type ResultStatus = 'success' | 'error' | 'cancel'

/** 成功：除 status / code / message 外，由各 API 通过泛型扩展 */
export type SuccessResult<TExtra extends object = object> = {
  status: 'success'
  code?: string
  message?: string
} & TExtra

/** 失败：固定结构 */
export type ErrorResult = {
  status: 'error'
  code?: string
  message?: string
}

/** 取消：固定结构 */
export type CancelResult = {
  status: 'cancel'
  code?: string
  message?: string
}

export type SuccessCallback<TExtra extends object = object> = (result: SuccessResult<TExtra>) => void

/** getLocation / getBrowserLocation 成功：业务字段统一在 data */
export type LocationSuccessPayload = SuccessResult<{ data: Record<string, unknown> }>

/** scanCode 成功：扫码内容在 data.resultStr */
export type ScanCodeSuccessPayload = SuccessResult<{ data: { content: string } }>

/** detectFace 成功：原生返回在 data.result */
export type DetectFaceSuccessPayload = SuccessResult<{ data: { result: unknown } }>

export type ErrorCallback = (result: ErrorResult) => void

export type CancelCallback = (result: CancelResult) => void

/** 三种结果联合，便于在实现层做变量标注或收窄 */
export type CallbackResult<TExtra extends object = object> =
  | SuccessResult<TExtra>
  | ErrorResult
  | CancelResult
