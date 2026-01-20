import languageMap from '../languageMap'

// 内库使用-start
import AssetUtil from './../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil } from 'lyrixi-mobile'
测试使用-end */

// 加载dayjs本地文件
async function loadDayjsLanguage(language) {
  let lang = languageMap?.[language]
  // 设置dayjs语言
  if (lang?.dayjs) {
    let result = await AssetUtil.loadLocalFile(`dayjs/locale/${lang.dayjs}.json`)
    if (result.status === 'success') {
      dayjs.locale(lang?.dayjs)
    }
    return result
  }
  return {
    status: 'error',
    message: 'Dayjs language not found'
  }
}

export default loadDayjsLanguage
