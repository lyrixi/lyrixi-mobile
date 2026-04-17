type LoadLyrixiResult = {
  status: string
  message: string
  data?: Record<string, unknown>
}

// 设置lyrixi语言
async function loadLyrixiLanguage(language: string) {
  return new Promise<LoadLyrixiResult>((resolve) => {
    if (!language) {
      resolve({
        status: 'error',
        message: 'Local file loaded failed'
      })
      return
    }
    let result: LoadLyrixiResult = {
      status: 'error',
      message: 'Local js file loaded failed'
    }

    // 动态引入国际化文件
    import(`./../../../assets/locale/${language}.js`).then((jsFile: { default?: Record<string, unknown> }) => {
      // 写死的国际化数据变量window.lyrixiLocaleData和window.lyrixiLocaleLanguage
      if (jsFile.default) {
        window.lyrixiLocaleLanguage = language
        window.lyrixiLocaleData = jsFile.default
        result = {
          status: 'success',
          message: 'Local js file loaded successfully',
          data: window.lyrixiLocaleData
        }
      }
      resolve(result)
    }).catch(() => {
      resolve(result)
    })
  })
}

export default loadLyrixiLanguage
