/**
 * 防抖：若在 delay 内再次调用则重新计时，仅最后一次调用在 delay 后执行
 */
const timers: Record<string, ReturnType<typeof setTimeout> | undefined> = {}

function debounce(callback: (...args: unknown[]) => unknown, delay: number, timerKey: string): void {
  if (typeof callback !== 'function') return
  if (!delay || typeof delay !== 'number') return
  if (!timerKey || typeof timerKey !== 'string') return
  if (timers[timerKey]) clearTimeout(timers[timerKey])
  timers[timerKey] = setTimeout(() => {
    callback()
  }, delay)
}

export default debounce
