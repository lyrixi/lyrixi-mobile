// 获取默认图标
function getDefaultIconClassName(type) {
  switch (type) {
    case 'success':
      return 'lyrixi-iconfont-circle-ok'
    case 'info':
      return 'lyrixi-iconfont-circle-info'
    case 'warning':
      return 'lyrixi-iconfont-circle-warning'
    case 'error':
      return 'lyrixi-iconfont-circle-close'
    default:
      return null
  }
}

export default getDefaultIconClassName
