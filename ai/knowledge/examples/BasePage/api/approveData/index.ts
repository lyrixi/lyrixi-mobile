import { Device, Loading, LocaleUtil, Request } from 'lyrixi-mobile'

import type { ApproveDataOptions, ApproveDataResult } from '../../types'
import { toApproveDataResult, toErrorMessage } from '../../types'

const locale = LocaleUtil.locale

/**
 * 保存/提交（与 init-page DSL：api.modules.approveData 同构）
 */
function approveData(opts?: ApproveDataOptions): Promise<ApproveDataResult> {
  Loading.show()
  const id = Device.getUrlParameter('id')

  return new Promise((resolve) => {
    Request.post(
      '/api/examples/base-page/approve',
      { id: id, token: opts?.token },
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    )
      .then((raw: unknown) => {
        Loading.hide()
        resolve(toApproveDataResult(raw))
      })
      .catch((err: unknown) => {
        Loading.hide()
        const fallback: ApproveDataResult = {
          code: '0',
          message: toErrorMessage(err, locale('服务器繁忙，请稍后重试！'))
        }
        resolve(fallback)
      })
  })
}

export default approveData
