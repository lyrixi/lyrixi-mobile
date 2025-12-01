import fetch from '@/utils/request'
import parseUrlJson from './parseUrlJson'

async function saveServer(item, options) {
  return new Promise((resolve) => {
    const url = '保存数据接口地址'

    let watermark = ''
    try {
      watermark = parseUrlJson(options.watermark)
    } catch (error) {
      watermark = ''
    }

    const params = {
      fileCheckKey: options?.id,
      imageParamList: [
        {
          ...item,
          watermark: watermark,
          uploadExtraFormData: uploadExtraFormData
        }
      ]
    }
    fetch({
      url,
      params,
      method: 'POST',
      timeout: 6000
    }).then((res) => {
      if (res?.code === '1') {
        resolve(true)
      } else {
        resolve('调用接口上传失败')
      }
    })
  })
}

export default saveServer
