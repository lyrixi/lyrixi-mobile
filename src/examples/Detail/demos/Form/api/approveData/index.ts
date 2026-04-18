import { LocaleUtil, Device } from 'lyrixi-mobile'
import { ExampleLoading, ExampleRequest } from '@examples-compat'

const locale = LocaleUtil.locale

// 审批数据
async function approveData(_opts?: { token?: string }) {
  ExampleLoading.show()
  let id = Device.getUrlParameter('id')

  return new Promise((resolve) => {
    ExampleRequest.post(
      '审批数据接口地址',
      { id: id },
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    )
      .then((result) => {
        ExampleLoading.hide()
        resolve(result)
      })
      .catch((err: unknown) => {
        ExampleLoading.hide()
        const e = err as { data?: { message?: string } }
        resolve({
          code: '0',
          message: e?.data?.message || locale('服务器繁忙，请稍后重试！')
        })
      })
  })
}

export default approveData
