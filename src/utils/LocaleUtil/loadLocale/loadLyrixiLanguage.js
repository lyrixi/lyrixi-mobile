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
    let result = await AssetUtil.loadLocalFile(`lyrixi-mobile/locale/${language}.json`)
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
