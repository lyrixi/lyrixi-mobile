import dayjs from 'dayjs'
import languageMap from '../languageMap'

// 加载dayjs本地文件
async function loadDayjsLanguage(language) {
  return new Promise((resolve) => {
    let lang = languageMap?.[language]
    // 设置dayjs语言
    if (!lang?.dayjs) {
      resolve({
        status: 'error',
        message: 'Dayjs language not found'
      })
      return
    }

    // npm后删除这段代码
    resolve({
      status: 'error',
      message: 'Dayjs language not found'
    })

    // npm后放开这段代码
    // import(`dayjs/locale/${lang.dayjs}.js`).then(jsFile => {
    //   let result = {
    //     status: 'success',
    //     message: 'Local js file loaded successfully'
    //   }
    //   dayjs.locale(lang?.dayjs)
    //   resolve(result)
    // }).catch(() => {
    //   let error = {
    //     status: 'error',
    //     message: 'Local js file loaded failed'
    //   }
    //   resolve(error)
    // })
  })
}

export default loadDayjsLanguage
