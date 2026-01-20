import languageMap from '../languageMap'

// 覆盖原有的国际化数据
function setLocale(language, data) {
  if (languageMap?.[language]) {
    window.lyrixiLocale = {
      language: data
    }
    window.lyrixiLocaleLanguage = language
    window.lyrixiLocaleData = window.lyrixiLocale[language]
  }
}

export default setLocale
