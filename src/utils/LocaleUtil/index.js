import languageMap from './languageMap'
import loadLocale from './loadLocale'
import locale from './locale'
import getLanguage from './getLanguage'

const LocaleUtil = {
  locale: locale,
  loadLocale: loadLocale,
  getLanguage: getLanguage,
  getLanguageMap: (language) => {
    if (language) {
      return languageMap?.[language] || null
    }
    return languageMap
  }
}

export default LocaleUtil
