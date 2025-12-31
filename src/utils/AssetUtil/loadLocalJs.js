// 加载本地js文件
async function loadLocalJs(localFile, { onError, onSuccess } = {}) {
  return new Promise((resolve) => {
    // 这是有意的运行时动态导入,不要尝试在构建时处理这个导入,忽略该警告
    import(/* webpackIgnore: true */ localFile)
      .then(() => {
        let result = {
          status: 'success',
          message: 'Local js file loaded successfully'
        }
        resolve(result)
        onSuccess?.(result)
      })
      .catch(() => {
        let error = {
          status: 'error',
          message: 'Local js file loaded failed'
        }
        resolve(error)
        onError?.(error)
      })
  })
}

export default loadLocalJs
