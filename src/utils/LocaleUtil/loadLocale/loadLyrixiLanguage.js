// 设置lyrixi语言
async function loadLyrixiLanguage(language) {
  return new Promise((resolve) => {
    if (!language) {
      resolve({
        status: 'error',
        message: 'Local file loaded failed'
      })
      return
    }
    let result = {
      status: 'error',
      message: 'Local js file loaded failed'
    }

    import(`lyrixi-mobile/locale/${language}.js`).then(jsFile => {
      if (window.lyrixiLocaleData) {
        result = {
          status: 'success',
          message: 'Local js file loaded successfully'
        }
        window.lyrixiLocaleLanguage = language
      }
      resolve(result)
    }).catch(() => {
      resolve(error)
    })
  })
}

export default loadLyrixiLanguage
