/**
 * 间隔时间追踪器（函数实现）
 * 用于检测方法调用间隔，当间隔小于指定时间时触发回调, 间隔5秒自动切成浏览器拍照
 */
function Interval(interval) {
  let lastCallTime = 0

  return {
    isTimeout() {
      const now = Date.now()
      const currentInterval = now - lastCallTime

      lastCallTime = now

      if (currentInterval < interval && lastCallTime > 0) {
        return false
      } else {
        return true
      }
    }
  }
}

export default Interval
