import { LocaleUtil, Device } from 'lyrixi-mobile'
import { ExampleLoading, ExampleRequest } from '@examples-compat'
import serverData from './serverData'

const locale = LocaleUtil.locale

// 提交数据
async function saveData(opts: { baseData?: unknown; data?: unknown; token?: string }) {
  const { baseData, data, token } = opts
  ExampleLoading.show()

  // 构建服务器参数
  let params = (await serverData({ baseData, data })) as Record<string, unknown>

  // 新增
  let url = '提交数据接口地址'

  // 编辑
  let id = Device.getUrlParameter('id')
  if (id) {
    params.id = id
    url = '提交数据接口地址'
  }

  return new Promise((resolve) => {
    ExampleRequest.post(url, params, {
      headers: {
        tokenDup: token,
        'content-type': 'application/json'
      }
    })
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

export default saveData
