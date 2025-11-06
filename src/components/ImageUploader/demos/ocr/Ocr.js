import { LocaleUtil, Request, Loading, Toast } from 'lyrixi-mobile'

// 新的OCR识别：单个照片识别
function recognizeItem(item) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    // 识别完成
    if (!item) {
      resolve(item)
      return
    }

    // 没有必要数据直接报错
    if (!item.fileUrl) {
      item.ocrErrMsg = LocaleUtil.locale(`缺少url参数, 无法进行ocr识别！`)

      Toast.show({ content: item.ocrErrMsg })
      resolve(item)
      return
    }

    Request.post('ocrRecognizeUrl', {
      data: {
        imageUrl: item.fileUrl
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((result) => {
        item.ocrResult = result || null

        Loading.hide()
        if (result?.code === '1') {
          resolve(item)
        } else {
          item.ocrErrMsg = result?.message || locale('名片识别失败！')
          Toast.show({ content: item.ocrErrMsg })
          Loading.hide()
          resolve(item)
        }
      })
      .catch(() => {
        Loading.hide()
        item.ocrErrMsg = locale('名片识别失败！')
        resolve(item)
      })
  })
}

export default { recognizeItem }
