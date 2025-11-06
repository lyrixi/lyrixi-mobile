import Taro from '@tarojs/taro'

const showToast = (title, duration = 500) => {
  Taro.hideLoading()
  Taro.showToast({
    title: title,
    icon: 'none',
    duration: duration,
    success: () => {
      setTimeout(() => {
        Taro.navigateBack({
          delta: 1
        })
      }, duration)
    }
  })
}

export default showToast
