// 内库使用-start
import Request from './../../../../utils/Request'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

interface GetPhotosResponse {
  status: string
  code?: string
  message?: string
  data?: unknown
}

function getPhotos(
  id: string,
  { url, formatResponse }: { url: string; formatResponse?: (r: GetPhotosResponse, ctx: { platform: string }) => GetPhotosResponse | Promise<GetPhotosResponse> }
): Promise<unknown> {
  return new Promise((resolve) => {
    Request.get(`${url}?fileCheckKey=${id}`)
      .then(async (result) => {
        console.log('服务器返回照片结果:', result)
        let response: GetPhotosResponse = {
          status: 'success',
          code: '',
          message: '',
          data: result
        }
        if (typeof formatResponse === 'function') {
          response = await formatResponse(
            { status: 'success', code: '', message: '', data: result },
            { platform: 'wechatMiniProgram' }
          )
        }

        console.log('照片格式化完成:', response)
        if (response.status === 'success') {
          resolve(response.data)
        } else if (response.status === 'error') {
          resolve(response.message)
        } else {
          resolve(null)
        }
      })
      .catch(() => {
        resolve(LocaleUtil.locale('获取照片异常', 'lyrixi_a189fb8a40ac4d851d6888b886c0022f') as string)
      })
  })
}

export default getPhotos
