// 内库使用-start
import Request from './../../../../utils/Request'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// Get photos by polling interval
function getPhotos(id, { url, uploadDir, formatUploadedItem }) {
  return new Promise((resolve) => {
    Request.get(`${url}?fileCheckKey=${id}`)
      .then(async (result) => {
        console.log('服务器获取照片结果:', result)
        if (result.code === '1' || result.code === '3012004') {
          // 新列表
          let list = (result.data || []).map((item) => {
            let newItem = {
              fileThumbnail: item?.fileThumbnail || item?.fileUrl || '',
              fileUrl: item?.fileUrl || '',
              filePath: item?.filePath || '',
              uploadDir: uploadDir,
              status: 'success'
            }

            return newItem
          })

          if (typeof formatUploadedItem === 'function') {
            for (let item of list) {
              // eslint-disable-next-line
              item = await formatUploadedItem(item, {
                platform: 'wechatMiniprogram',
                result: item
              })
            }
          }

          // 返回列表
          resolve(list)
        } else {
          resolve(result.message)
        }
      })
      .catch((error) => {
        resolve(LocaleUtil.locale('获取照片异常'))
      })
  })
}

export default getPhotos
