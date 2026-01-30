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

    // 动态引入国际化文件
    import(`./../../../assets/locale/${language}.js`).then(jsFile => {
      // 写死的国际化数据变量window.lyrixiLocaleData和window.lyrixiLocaleLanguage
      if (jsFile.default) {
        window.lyrixiLocaleLanguage = language
        window.lyrixiLocaleData = jsFile.default
        result = {
          status: 'success',
          message: 'Local js file loaded successfully'
        }
      }
      resolve(result)
    }).catch(() => {
      resolve(result)
    })
  })
}

export default loadLyrixiLanguage
