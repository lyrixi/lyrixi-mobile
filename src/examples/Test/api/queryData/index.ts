import { Device, Loading, LocaleUtil, Request } from 'lyrixi-mobile'

const locale = LocaleUtil.locale

function queryData() {
  return new Promise((resolve) => {
    const id = Device.getUrlParameter('id')

    Loading.open()
    Request.get('/api/getDetail.do', { id })
      .then((result: unknown) => {
        Loading.close()
        const r = result as { code?: string; message?: string; data?: unknown }
        if (r.code === '1') {
          resolve({
            data: r.data
          })
        } else {
          resolve({
            status: '500',
            message: r.message || locale('获取数据错误！')
          })
        }
      })
      .catch((err: unknown) => {
        Loading.close()
        const e = err as { data?: { message?: string } }
        resolve({
          status: '500',
          message: e?.data?.message || locale('获取数据异常！')
        })
      })
  })
}

export default queryData
