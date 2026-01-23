import languageMap from '../languageMap'

// 覆盖原有的国际化数据
function setLocale(language, data) {
  if (languageMap?.[language]) {
    window.lyrixiLocales = {
      language: data
    }
    window.lyrixiLocaleLanguage = language
  }
}

export default setLocale
