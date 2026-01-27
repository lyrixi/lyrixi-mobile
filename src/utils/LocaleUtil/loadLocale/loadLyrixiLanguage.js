import setLocale from './../setLocale'

// 内库使用-start
import AssetUtil from './../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil } from 'lyrixi-mobile'
测试使用-end */

// 设置lyrixi语言
async function loadLyrixiLanguage(language) {
  // 设置dayjs语言
  if (language) {
    let result = {
      status: 'error',
      message: 'Local file loaded failed'
    }
    try {
      let js = await import(`lyrixi-mobile/locale/${language}.js`)
      debugger
      if (js) {
        result = {
          status: 'success',
          message: 'Local file loaded successfully'
        }
      }
    } catch (error) {

    }
    if (result.status === 'success') {
      setLocale(language, result.data)
    }
    return result
  }
  return {
    status: 'error',
    message: 'Lyrixi language not found'
  }
}

export default loadLyrixiLanguage
