import Storage from './../Storage'

function setCache(
  key: string,
  value: unknown,
  { persist = false }: { persist?: boolean | string } = {}
) {
  const w = window as unknown as Record<string, unknown>
  if (value === undefined || value === null || value === '') {
    if (persist === 'session') Storage.removeSessionStorage(key)
    else if (persist) Storage.removeLocalStorage(key)
    delete w[key]
  } else {
    if (persist === 'session') Storage.setSessionStorage(key, value)
    else if (persist) Storage.setLocalStorage(key, value)
    w[key] = value
  }
}

export default setCache
