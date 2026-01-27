import languageMap from '../languageMap'

// 加载dayjs本地文件
async function loadDayjsLanguage(language) {
  let lang = languageMap?.[language]
  // 设置dayjs语言
  if (lang?.dayjs) {
    let result = {
      status: 'error',
      message: 'Local file loaded failed'
    }

    try {
      let isOk = await import(`dayjs/locale/${lang.dayjs}.js`)
      debugger
      result = {
        status: 'success',
        message: 'Local file loaded successfully'
      }
    } catch (error) {

    }

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
