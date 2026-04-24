import Storage from './../Storage'

function getCache(cacheName: string): unknown {
  return (
    (window as unknown as Record<string, unknown>)[cacheName] || Storage.getLocalStorage(cacheName) || Storage.getSessionStorage(cacheName)
  )
}

export default getCache
