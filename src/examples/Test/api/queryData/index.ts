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
            message:
              r.message || locale('获取数据错误！', 'lyrixi_9c62a21f2d7a4426f205f92e85ea64b9')
          })
        }
      })
      .catch((err: unknown) => {
        Loading.close()
        const e = err as { data?: { message?: string } }
        resolve({
          status: '500',
          message:
            e?.data?.message || locale('获取数据异常！', 'lyrixi_a085fb7c5cb81143dcec0f299fff709a')
        })
      })
  })
}

export default queryData
