import loadDayjsLanguage from './loadDayjsLanguage'
import loadLyrixiLanguage from './loadLyrixiLanguage'

// 加载国际化文件
async function loadLocale(
  language,
  { dayjs = true } = {}
) {
  let result = {
    status: 'error',
    message: 'language is null'
  }
  if (!language) {
    return result
  }

  // 加载dayjs国际化语言文件
  if (dayjs) {
    result = await loadDayjsLanguage(language)
    if (result.status === 'error') {
      return result
    }
  }

  // 加载lyrixi国际化语言文件
  result = await loadLyrixiLanguage(language)
  return result
}

export default loadLocale
