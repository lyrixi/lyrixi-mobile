import languageMap from '../languageMap'

// Set locale
function setLocale(language, data) {
  if (languageMap?.[language]) {
    window.lyrixiLocaleLanguage = language
    window.lyrixiLocaleData = data
  }
}

export default setLocale
