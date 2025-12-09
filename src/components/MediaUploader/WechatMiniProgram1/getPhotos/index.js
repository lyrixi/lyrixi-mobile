// 内库使用-start
import Request from './../../../../utils/Request'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// Get photos by polling interval
function getPhotos(id, { url, formatResponse }) {
  return new Promise((resolve) => {
    Request.get(`${url}?fileCheckKey=${id}`)
      .then(async (result) => {
        let response = {
          status: 'success',
          result: result
        }
        if (typeof formatResponse === 'function') {
          response = await formatResponse(
            { status: 'success', result: result },
            {
              platform: 'wechatMiniProgram'
            }
          )
        }

        console.log('有结果了:', response)
        // 成功, response.result为新格式化后的新item: {fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'success' | 'error'}
        if (response.status === 'success') {
          resolve(response.result)
        }
        // 失败
        else if (response.status === 'error') {
          resolve(response.message)
        }
        // 加载中
        else {
          resolve(null)
        }
      })
      .catch((error) => {
        resolve(LocaleUtil.locale('获取照片异常'))
      })
  })
}

export default getPhotos
