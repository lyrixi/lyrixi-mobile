import getLanguage from './../getLanguage'

// 内库使用-start
import AssetUtil from './../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil } from 'lyrixi-mobile'
测试使用-end */

// 加载国际化文件, localeFileMap: {zh_CN: 'url', en_US: 'url'}
async function loadLocale(localeFileMap) {
  const language = getLanguage()
  let localeFileUrl = localeFileMap[language]
  let result = await AssetUtil.loadJs(localeFileUrl)
  return result
}

export default loadLocale
