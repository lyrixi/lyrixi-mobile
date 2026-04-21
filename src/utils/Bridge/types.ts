/** 成功结果固定形状；无业务载荷时 `T` 为 `undefined`，`data` 为 `undefined`。 */
export type SuccessResult<T = undefined> = {
  status: 'success'
  code?: string
  message?: string
  data: T
}

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

export type SuccessCallback<T = undefined> = (result: SuccessResult<T>) => void

export type ErrorCallback = (result: ErrorResult) => void

export type CancelCallback = (result: CancelResult) => void
