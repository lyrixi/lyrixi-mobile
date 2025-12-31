import languageMap from './languageMap'
import loadLocale from './loadLocale'
import locale from './locale'
import setLocale from './setLocale'
import getLanguage from './getLanguage'

const LocaleUtil = {
  locale: locale,
  loadLocale: loadLocale,
  setLocale: setLocale,
  getLanguage: getLanguage,
  getLanguageMap: (language) => {
    if (language) {
      return languageMap?.[language] || null
    }
    return languageMap
  }
}

export default LocaleUtil
