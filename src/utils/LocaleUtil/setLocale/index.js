import languageMap from '../languageMap'

// 覆盖原有的国际化数据
function setLocale(language, data) {
  if (languageMap?.[language]) {
    data && (window.lyrixiLocaleData = data)
    language && (window.lyrixiLocaleLanguage = language)
  }
}

export default setLocale
