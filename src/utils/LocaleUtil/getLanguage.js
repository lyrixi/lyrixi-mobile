// 从userAgent中获取语言
function getLanguage() {
  let language =
    window.lyrixiLocaleLanguage ||
    navigator.userAgent.match(/lyrixiLanguage\/([\w.]*)/)?.[1] ||
    'zh_CN'
  return language
}

export default getLanguage
