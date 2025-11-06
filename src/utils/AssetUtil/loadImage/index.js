// 动态加载script的方法
function loadImage(src, { onError, onSuccess } = {}) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src

    const handleLoad = () => {
      resolve(true)
      // 支持新的 onSuccess
      if (typeof onSuccess === 'function') onSuccess(img)

      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }
    const handleError = (error) => {
      resolve(false)
      // 支持新的 onError
      if (typeof onError === 'function') onError(error)

      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }

    img.addEventListener('load', handleLoad)
    img.addEventListener('error', handleError)
  })
}

export default loadImage
