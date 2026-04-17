/**
 * 防抖：若在 delay 内再次调用则重新计时，仅最后一次调用在 delay 后执行
 * callback、delay、timerKey 三个参数任意一个不传则不生效
 *
 * @param {Function} callback 要防抖的函数
 * @param {number} delay 延迟毫秒数
 * @param {string} timerKey 用于在 window 上存储 setTimeout 的变量，不同 key 互不干扰
 *
 * @example
 * debounce(() => {}, 2000, 'peopleReload')
 */
function debounce(callback, delay, timerKey) {
  if (typeof callback !== 'function') return
  if (!delay || typeof delay !== 'number') return
  if (!timerKey || typeof timerKey !== 'string') return
  if (window[timerKey]) clearTimeout(window[timerKey])
  window[timerKey] = setTimeout(() => {
    callback()
  }, delay)
}

export default debounce
