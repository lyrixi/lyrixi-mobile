type LoadLyrixiResult = {
  status: string
  message: string
  data?: Record<string, string>
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
      message: 'Local ts file loaded failed'
    }

    // 动态引入各语言文案（.ts 与 src 内其它模块一样由 father/webpack 参与打包）
    import(`./../../../assets/locale/${language}.ts`)
      .then((tsFile: { default?: Record<string, string> }) => {
        const data = tsFile.default
        if (data) {
          window.lyrixiLocaleLanguage = language
          window.lyrixiLocaleData = data
          result = {
            status: 'success',
            message: 'Local locale loaded',
            data: window.lyrixiLocaleData as Record<string, string> | undefined
          }
        }
        resolve(result)
      })
      .catch(() => {
        resolve(result)
      })
  })
}

export default loadLyrixiLanguage
