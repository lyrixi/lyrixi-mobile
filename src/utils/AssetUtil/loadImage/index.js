// 动态加载script的方法
function loadImage(src, { onError, onSuccess } = {}) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src

    const handleLoad = () => {
      let result = {
        status: 'success',
        img: img,
        message: ''
      }
      resolve(result)
      // 支持新的 onSuccess
      onSuccess && onSuccess(result)

      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }
    const handleError = (error) => {
      let result = {
        status: 'error',
        img: img,
        message: 'Load image failed'
      }
      resolve(result)
      // 支持新的 onError
      onError && onError(result)

      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }

    img.addEventListener('load', handleLoad)
    img.addEventListener('error', handleError)
  })
}

export default loadImage
