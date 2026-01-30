import loadDayjsLanguage from './loadDayjsLanguage'
import loadLyrixiLanguage from './loadLyrixiLanguage'

// 加载国际化文件
async function loadLocale(
  language,
  { dayjs = true, lyrixi = true } = {}
) {
  let result = {
    status: 'error',
    message: 'language is null'
  }
  if (!language) {
    return result
  }
  if (dayjs) {
    result = await loadDayjsLanguage(language)
    if (result.status === 'error') {
      return result
    }
  }
  if (lyrixi) {
    result = await loadLyrixiLanguage(language)
  }
  return result
}

export default loadLocale
