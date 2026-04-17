import DataParse from './DataParse'

const LocalStorage = {
  setLocalStorage: function (key: unknown, val: unknown) {
    window.localStorage.setItem(String(key), DataParse.stringify(val))
    return true
  },
  getLocalStorage: function (key: unknown) {
    if (!key || typeof key !== 'string') return null
    return DataParse.parse(window.localStorage.getItem(key))
  },
  getLocalStorageKeys: function (): string[] | null {
    const storages = window.localStorage
    if (storages.length === 0) return null
    const keys: string[] = []
    for (let i = 0; i < storages.length; i++) {
      const key = storages.key(i)
      if (key !== null) keys.push(key)
    }
    return keys
  },
  getLocalStorages: function (): Record<string, unknown> | null {
    const storages = window.localStorage
    if (storages.length === 0) return null
    const localStorages: Record<string, unknown> = {}
    for (let i = 0; i < storages.length; i++) {
      const key = storages.key(i)
      if (key === null) continue
      const raw = storages.getItem(key)
      localStorages[key] = DataParse.parse(raw)
    }
    return localStorages
  },
  removeLocalStorage: function (key: unknown) {
    window.localStorage.removeItem(String(key))
    return true
  },
  removeLocalStorages: function (filter: (key: string | null) => boolean) {
    if (typeof filter !== 'function') return false

    const removeKeys: string[] = []
    const storages = window.localStorage
    for (let i = 0; i < storages.length; i++) {
      const key = storages.key(i)
      if (key !== null && key !== undefined && filter(key)) {
        removeKeys.push(key)
      }
    }

    for (const removeKey of removeKeys) {
      window.localStorage.removeItem(removeKey)
    }
    return true
  },
  clearLocalStorage: function () {
    window.localStorage.clear()
    return true
  }
}

export default LocalStorage
