import Storage from './../Storage'

// Clear all caches named cacheName:xx
function clearCache(cacheName: string, options: { match?: string } = {}) {
  const { match } = options
  const w = window as unknown as Record<string, unknown>
  delete w[cacheName]
  Storage.removeLocalStorage(cacheName)

  // 清除所有以 cache: 开头的属性
  if (match === 'prefix') {
    for (const keyName in window) {
      if (Object.prototype.hasOwnProperty.call(window, keyName) && keyName.startsWith(`${cacheName}:`)) {
        delete w[keyName]
      }
    }

    // 清除所有以 cache: 开头的项
    Storage.removeLocalStorages((keyName) => !!keyName && keyName.startsWith(`${cacheName}:`))
    Storage.removeSessionStorages((keyName) => !!keyName && keyName.startsWith(`${cacheName}:`))
  }
  // 精确清除
  else {
    delete w[cacheName]
    Storage.removeLocalStorage(cacheName)
    Storage.removeSessionStorage(cacheName)
  }
}

export default clearCache
