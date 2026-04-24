import { LocaleUtil, Request, Loading, Toast } from 'lyrixi-mobile'

type OcrItem = {
  fileUrl?: string
  ocrResult?: unknown
  ocrErrMsg?: string
} & Record<string, unknown>

// 新的OCR识别：单个照片识别
function recognizeItem(item: OcrItem | null) {
  // eslint-disable-next-line
  return new Promise<OcrItem | null>(async (resolve) => {
    // 识别完成
    if (!item) {
      resolve(item)
      return
    }

    // 没有必要数据直接报错
    if (!item.fileUrl) {
      item.ocrErrMsg = String(LocaleUtil.locale(`缺少url参数, 无法进行ocr识别！`))

      Toast.show({ content: item.ocrErrMsg })
      resolve(item)
      return
    }

    Request.post(
      'ocrRecognizeUrl',
      {
        imageUrl: item.fileUrl
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then((result: unknown) => {
        item.ocrResult = result || null
        const r = result as { code?: string; message?: string } | null

        Loading.hide()
        if (r?.code === '1') {
          resolve(item)
        } else {
          item.ocrErrMsg = r?.message || String(LocaleUtil.locale('名片识别失败！'))
          Toast.show({ content: item.ocrErrMsg })
          Loading.hide()
          resolve(item)
        }
      })
      .catch(() => {
        Loading.hide()
        item.ocrErrMsg = String(LocaleUtil.locale('名片识别失败！'))
        resolve(item)
      })
  })
}

export default { recognizeItem }
