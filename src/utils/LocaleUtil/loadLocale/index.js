import loadDayjsLanguage from './loadDayjsLanguage'
import loadLyrixiLanguage from './loadLyrixiLanguage'
import loadLocalJsFiles from './loadLocalJsFiles'
import loadLocalJsonFiles from './loadLocalJsonFiles'
import loadRemoteJsFiles from './loadRemoteJsFiles'
import loadRemoteJsonFiles from './loadRemoteJsonFiles'

// 加载国际化文件
async function loadLocale(
  language,
  { dayjs = true, lyrixi = true, localJsFiles, localJsonFiles, remoteJsFiles, remoteJsonFiles } = {}
) {
  if (!language) {
    return {
      status: 'error',
      message: 'language is null'
    }
  }
  if (dayjs) {
    await loadDayjsLanguage(language)
  }
  if (lyrixi) {
    await loadLyrixiLanguage(language)
  }
  if (localJsFiles?.length) {
    await loadLocalJsFiles(localJsFiles)
  }
  if (localJsonFiles?.length) {
    await loadLocalJsonFiles(localJsonFiles)
  }
  if (remoteJsFiles?.length) {
    await loadRemoteJsFiles(remoteJsFiles)
  }
  if (remoteJsonFiles?.length) {
    await loadRemoteJsonFiles(remoteJsonFiles)
  }
  return {
    status: 'success',
    message: 'locale loaded'
  }
}

export default loadLocale
