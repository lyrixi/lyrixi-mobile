type EventFn = (...args: unknown[]) => unknown

const Observer = {
  events: {} as Record<string, EventFn[]>,
  on: function (eventName: string, fn: EventFn): void {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(fn)
  },
  emit: function (eventName: string, ...args: unknown[]): boolean {
    const fns = this.events[eventName]
    if (!Array.isArray(fns) || !fns.length) return false
    // eslint-disable-next-line
    for (let i = 0, fn: EventFn | undefined; (fn = fns[i++]); ) {
      fn.apply(this, args)
    }
    return true
  },
  off: function (eventName: string, fn: EventFn): boolean {
    let fns = this.events[eventName]
    if (!Array.isArray(fns) || !fns.length) return false
    for (let i = 0; i < fns.length; i++) {
      let _fn = fns[i]
      if (_fn === fn) {
        fns.splice(i, 1)
      }
    }
    return true
  },
  destroy: function (eventName?: string): void {
    if (!eventName) {
      this.events = {}
      return
    }
    delete this.events[eventName]
  }
}

export default Observer
